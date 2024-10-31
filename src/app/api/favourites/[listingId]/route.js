import { NextResponse } from "next/server";
import { getCurrentUser  } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function POST(request, { params }) {
	const currentUser  = await getCurrentUser ();
	if (!currentUser ) {
		return NextResponse.json({ error: "User  not authenticated" }, { status: 401 });
	}

	const { listingId } = params;

	if (!listingId) {
		return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
	}

	// Ne pas convertir listingId en entier si c'est un String dans votre schéma
	const favExist = await prisma.favourite.findFirst({
		where: {
			userId: currentUser .id,
			listingId: listingId, // Utilisez listingId tel quel
		},
	});

	if (favExist) {
		return NextResponse.json({ error: "Already exists!" }, { status: 409 });
	}

	const fav = await prisma.favourite.create({
		data: {
			userId: currentUser .id,
			listingId: listingId, // Utilisez listingId tel quel
		},
	});

	return NextResponse.json(fav, { status: 201 });
}

export async function DELETE(request, { params }) {
	const currentUser  = await getCurrentUser ();
	if (!currentUser ) {
		return NextResponse.json({ error: "User  not authenticated" }, { status: 401 });
	}

	const { listingId } = params;
	if (!listingId) {
		return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
	}

	const findFavorite = await prisma.favourite.findFirst({
		where: {
			userId: currentUser .id,
			listingId: listingId, // Utilisez listingId tel quel
		},
	});

	if (!findFavorite) {
		return NextResponse.json({ error: "Not found!" }, { status: 404 });
	}

	const deletedFavorite = await prisma.favourite.delete({
		where: {
			id: findFavorite.id,
		},
	});

	return NextResponse.json(deletedFavorite, { status: 200 });
}
