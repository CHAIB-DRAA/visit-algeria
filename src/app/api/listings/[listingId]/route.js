import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export const dynamic = "force-dynamic";

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}

	const { listingId } = params;
	if (!listingId) {
		return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
	}

	try {
		const deletedListing = await prisma.listing.delete({
			where: {
				id: listingId,  // Utilise listingId comme chaîne de caractères
			},
		});

		return NextResponse.json(deletedListing);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
