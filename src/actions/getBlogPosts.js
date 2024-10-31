import prisma from "@/libs/prismadb";

export default async function getBlogPosts(params) {
	try {
		const { limit } = params || false;

		let blogPosts;

		if (limit) {
			blogPosts = await prisma.blog.findMany({
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
				take: limit,
			});
		} else {
			blogPosts = await prisma.blog.findMany({
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
		}

		if (!blogPosts) {
			return null;
		}

		return blogPosts;
	} catch (error) {
		//throw new Error(error);
	}
}
