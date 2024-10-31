import prisma from "@/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export default async function getMyListings() {
	try {
		const { id: userId } = await getCurrentUser();

		const listings = await prisma.listing.findMany({
			where: { userId: userId },
			orderBy: {
				createdAt: "desc",
			},
			include: {
				user: {
					select: {
						name: true,
					},
				},
			},
		});

		return listings;
	} catch (error) {
		throw new Error(error);
	}
}
