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
import { getCurrentUser } from "@/actions/getCurrentUser";
import getBlogPosts from "@/actions/getBlogPosts";

export const dynamic = "force-dynamic";

const limitParams = { limit: 6 };

export default async function Home() {
	const currentUser = await getCurrentUser();
	const blogPosts = await getBlogPosts(limitParams);

	return (
		<>

			<Banner />

			<Category />

			<Featured currentUser={currentUser} />

			<Locations />

			<WorkArea />

			<Testimony />

			<Favour />

			<Subscribe />
			<Blog blogPosts={blogPosts} />
		</>
	);
}
