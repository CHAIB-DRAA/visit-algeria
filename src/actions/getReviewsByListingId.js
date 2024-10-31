import prisma from "@/libs/prismadb";

export default async function getReviewByListingId(params) {
	try {
		const { listingId } = params;

		// Assurez-vous que listingId est bien un nombre ou une chaîne selon votre schéma
		const reviews = await prisma.review.findMany({
			where: {
				listingId: listingId.toString(), // Convertir en chaîne si nécessaire
			},
			orderBy: {
				createdAt: "desc",
			},
			include: {
				user: {
					select: {
						id: true,
						name: true,
						image: true,
					},
				},
			},
		});

		return reviews; // Renvoie un tableau, même vide si aucune revue n'est trouvée
	} catch (error) {
		console.error("Error fetching reviews:", error); // Log de l'erreur pour le débogage
		throw new Error("Could not fetch reviews. Please try again later."); // Message d'erreur plus descriptif
	}
}
