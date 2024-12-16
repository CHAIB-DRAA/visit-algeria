import prisma from "@/libs/prismadb";

export default async function getUserById(params) {
	try {
		const { userId } = params;

		const user = await prisma.user.findUnique({
			where: {
				id: userId, // Use userId directly as a string
			},
			include: {
				profile: true,
				
				listings: {
					take: 6,
				},
			},
		});

		// Return null if user is not found
		if (!user) {
			return null;
		}

		return user;
	} catch (error) {
		console.error("Error fetching user by ID:", error); // Log the error for debugging
		return null; // Return null in case of an error
	}
}
