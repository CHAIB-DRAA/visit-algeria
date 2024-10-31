import { getServerSession } from "next-auth/next";
import { authHandler } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prismadb";

export async function getCurrentSession() {
	try {
		return await getServerSession(authHandler);
	} catch (error) {
		console.error("Error getting session:", error);
		return null;
	}
}

export async function getCurrentUser() {
	try {
		const session = await getCurrentSession();

		if (!session?.user?.email) {
			return null;
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email,
			},
			include: {
				profile: true,
				// listings: true,
				favourites: true,
			},
		});

		if (!currentUser) {
			return null;
		}

		return {
			...currentUser,
			created_at: currentUser.created_at ? currentUser.created_at.toISOString() : null,
			updated_at: currentUser.updated_at ? currentUser.updated_at.toISOString() : null,
			emailVerified: currentUser.emailVerified ? currentUser.emailVerified.toISOString() : null,
		};
	} catch (error) {
		console.error("Error getting current user:", error);
		return null;
	}
}
