import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import getListingBySlug from "@/actions/getListingBySlug";
import Listing from "@/components/Listing/Index";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getReviewByListingId from "@/actions/getReviewsByListingId";

export const generateMetadata = ({ params }) => {
	return {
		title: `Listing - ${params.slug}`,
	};
};

const page = async ({ params }) => {
	const listing = await getListingBySlug(params);
	const currentUser = await getCurrentUser();
	const reviews = await getReviewByListingId(params);

	return (
		<>

			<PageBanner pageTitle={listing.title}  />
			<Listing
				currentUser={currentUser}
				listing={listing}
				reviews={reviews}
			/>
		</>
	);
};

export default page;
