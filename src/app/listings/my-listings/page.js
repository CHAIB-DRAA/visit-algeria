import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import ListingCard from "@/components/Listings/MyListings/ListingCard";
import getMyListings from "@/actions/getMyListings";
import { getCurrentUser } from "@/actions/getCurrentUser";
import {redirect} from "next/navigation";
export const dynamic = "force-dynamic";

const page = async () => {
	const listings = await getMyListings();

	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	if (!isAdmin) {
		redirect("/");
	}
	return (
		<>
			<PageBanner pageTitle="My Listings" />

			<ListingCard currentUser={currentUser} listings={listings} />
		</>
	);
};

export default page;
