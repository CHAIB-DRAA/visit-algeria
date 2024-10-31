import prisma from "@/libs/prismadb";

export default async function getAllUsers() {
	try {
		const users = await prisma.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});

		if (!users) {
			return null;
		}

		return users;
	} catch (error) {
		throw new Error(error);
	}
}
