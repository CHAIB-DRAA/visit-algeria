import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import getBlogPosts from "@/actions/getBlogPosts";
import BlogContent from "@/components/BlogContent";

export const dynamic = 'force-dynamic';

const page = async () => {
	const blogPosts = await getBlogPosts();
	return (
		<>
			<PageBanner pageTitle="Blog" />

			<BlogContent blogPosts={blogPosts} />
		</>
	);
};

export default page;
