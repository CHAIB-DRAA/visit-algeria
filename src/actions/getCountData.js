import prisma from "@/libs/prismadb";

export default async function countData() {
	try {
		const users = await prisma.user?.count() ?? 0;
		const listings = await prisma.listing?.count() ?? 0;
		const reviews = await prisma.review?.count() ?? 0;
		const blogPosts = await prisma.blog?.count() ?? 0;
		return { users, listings, reviews, blogPosts };
	} catch (error) {
		console.error("Error counting data:", error);
		throw new Error("An error occurred while fetching data counts.");
	}
}
