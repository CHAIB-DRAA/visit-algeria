import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import getMyFavourites from "@/actions/getFavourites";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ListingCard from "./ListingCard";
export const dynamic = "force-dynamic";

const page = async () => {
	const favourites = await getMyFavourites();
	const currentUser = await getCurrentUser();

	return (
		<>
			<PageBanner pageTitle="My Favourites" />

			<ListingCard currentUser={currentUser} favourites={favourites} />
		</>
	);
};

export default page;
