export default async function getReviews() {
	try {
		const reviews = await prisma.review.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				user: {
					select: {
						name: true,
					},
				},
				listing: {
					select: {
						id: true,
						title: true,
					},
				},
			},
		});

		// S'assurer qu'on renvoie un tableau, même vide
		return reviews.length > 0 ? reviews : [];
	} catch (error) {
		console.error("Error fetching reviews from database:", error.message);
		// Tu peux retourner un tableau vide si tu veux éviter de bloquer le processus :
		return [];
	}
}
