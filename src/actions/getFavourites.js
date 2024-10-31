import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export default async function getMyFavourites() {
	try {
		const { id: userId } = await getCurrentUser();

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

		return favourites;
	} catch (error) {
		throw new Error(error);
	}
}
