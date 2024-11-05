'use client'
import React, { useState, useEffect } from "react";
import Banner from "@/components/Index/Banner";
import Blog from "@/components/Index/Blog";
import Category from "@/components/Index/Category";
import Favour from "@/components/Index/Favour";
import Featured from "@/components/Index/Featured";
import Locations from "@/components/Index/Locations";
import Partner from "@/components/Index/Partner";
import Subscribe from "@/components/Index/Subscribe";
import Testimony from "@/components/Index/Testimony";
import WorkArea from "@/components/Index/WorkArea";
import { getCurrentUser  } from "@/actions/getCurrentUser ";
import getBlogPosts from "@/actions/getBlogPosts";

export const dynamic = "force-dynamic";

const limitParams = { limit: 6 };

export default function Home() {
	const [currentUser , setCurrentUser ] = useState(null);
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const user = await getCurrentUser ();
				const posts = await getBlogPosts(limitParams);
				setCurrentUser (user);
				setBlogPosts(posts);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			<Banner />
			<Category />
			<Featured currentUser ={currentUser } />
			<Locations />
			<WorkArea />
			<Testimony />
			<Favour />
			<Subscribe />
			<Blog blogPosts={blogPosts} />
		</>
	);
}
