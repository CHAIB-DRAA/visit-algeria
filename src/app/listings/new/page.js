import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import ListingForm from "@/components/Listings/New/ListingForm";
import {getCurrentUser} from "@/actions/getCurrentUser";
import {redirect} from "next/navigation";

const page = async () => {
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	if (!isAdmin) {
		redirect("/");
	}
	return (
		<>
			<PageBanner pageTitle="Add Listing" />

			<ListingForm />
		</>
	);
};

export default page;
