import React from "react";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ListingCard from "./ListingCard";
import getListings from "@/actions/getListings";
export const dynamic = "force-dynamic";
import LeftSidebar from "@/components/Dashboard/LeftSidebar";

const page = async ({ searchParams }) => {
	const {listings} = await getListings(searchParams);
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	if (!isAdmin) {
		redirect("/");
	}
	return (
		<>
			<PageBanner pageTitle="All listings" />

			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
						 	<LeftSidebar />
						</div>

						<div className="col-lg-8">
							<ListingCard listings={listings} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
