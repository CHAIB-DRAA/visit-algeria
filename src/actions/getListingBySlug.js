import prisma from "@/libs/prismadb";

export default async function getListingBySlug(params) {
	try {
		const { listingId, slug } = params;

		const listing = await prisma.listing.findUnique({
			where: {
				id: listingId.toString(), // Convertir en chaîne
			},
			include: {
				user: {
					include: {
						profile: true,
					},
				},
				reviews: {
					select: {
						rating: true,
					},
				},
			},
		});

		if (!listing) {
			return null;
		}

		return listing;
	} catch (error) {
		throw new Error(error);
	}
}
