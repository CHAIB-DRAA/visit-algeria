import prisma from "@/libs/prismadb";
import { getCurrentUser  } from "./getCurrentUser";

export default async function getMyFavourites() {
	try {
		const currentUser  = await getCurrentUser ();

		// Vérifiez si l'utilisateur est authentifié
		if (!currentUser ) {
			throw new Error("User  not authenticated.");
		}

		const { id: userId } = currentUser ;

		const favourites = await prisma.favourite.findMany({
			where: { userId: userId },
			orderBy: {
				createdAt: "desc",
			},
			include: {
				listing: {
					include: {
						user: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});

		return favourites; // Renvoie un tableau, même vide si aucun favori n'est trouvé
	} catch (error) {
		console.error("Error fetching favourites:", error); // Log de l'erreur pour le débogage
		throw new Error("Could not fetch favourites. Please try again later."); // Message d'erreur plus descriptif
	}
}
