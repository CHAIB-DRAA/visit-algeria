import prisma from "@/libs/prismadb";

export default async function getUserById(params) {
	try {
		const { userId } = params;

		// Use userId directly as a string
		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
			include: {
				profile: true,
				listings: {
					take: 6,
				},
				// Uncomment the following line if you want to include favourites as well
				// favourites: true,
			},
		});

		// Return null if user is not found
		if (!user) {
			return null;
		}

		return user;
	} catch (error) {
		console.error("Error fetching user by ID:", error.message); // Log the error message for debugging
		return null; // Return null in case of an error
	}
}
