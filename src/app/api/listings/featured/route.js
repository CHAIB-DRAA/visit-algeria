import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(request) {
	const category = request.nextUrl.searchParams.get("category");

	let listings;

	if (category === "all") {
		listings = await prisma.listing.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				user: {
					select: {
						name: true,
						id: true,
					},
				},
			},
			take: 10,
		});
	} else {
		listings = await prisma.listing.findMany({
			where: {
				category: category,
			},
			orderBy: {
				createdAt: "desc",
			},
			include: {
				user: {
					select: {
						name: true,
						id: true,
					},
				},
			},
		});
	}

	return NextResponse.json(listings);
}
