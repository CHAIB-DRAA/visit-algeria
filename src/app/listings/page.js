import React from "react";
import Listings from "@/components/Listings/Index";
import getListings from "@/actions/getListings";
import SearchForm from "@/components/Listings/SearchForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
export const dynamic = "force-dynamic";

const page = async ({ searchParams }) => {
	const {
		listings,
		totalPages,
		startListingNumber,
		endListingNumber,
		totalListings: totalCount,
	} = await getListings(searchParams);
	const currentUser = await getCurrentUser();

	return (
		<>
			<SearchForm searchParams={searchParams} />
			
			<Listings
				currentUser={currentUser}
				totalPages={totalPages}
				listings={listings}
				searchParams={searchParams}
				totalCount={totalCount}
				startListingNumber={startListingNumber}
				endListingNumber={endListingNumber}
			/>
		</>
	);
};

export default page;
