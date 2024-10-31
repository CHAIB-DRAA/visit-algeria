import { NextResponse } from "next/server";
import { getCurrentUser  } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function POST(request, { params }) {
	const currentUser  = await getCurrentUser ();
	if (!currentUser ) {
		return NextResponse.error();
	}

	const { listingId } = params;

	if (!listingId) {
		return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
	}

	const body = await request.json();
	const { rating, comment } = body;

	if (!rating || !comment) {
		return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
	}

	const ratingValue = parseInt(rating.value);
	if (isNaN(ratingValue)) {
		return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
	}

	try {
		const review = await prisma.review.create({
			data: {
				userId: currentUser .id,
				listingId: listingId, // Pass listingId as a string
				rating: ratingValue,
				comment: comment,
			},
		});

		return NextResponse.json(review);
	} catch (error) {
		console.error("Error creating review:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
