import React from "react";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getReviews from "@/actions/getReviews";
import ReviewCard from "./ReviewCard";
import LeftSidebar from "@/components/Dashboard/LeftSidebar";

export const dynamic = "force-dynamic";

const page = async () => {
	const reviews = await getReviews();
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	if (!isAdmin) {
		redirect("/");
	}
	return (
		<>
			<PageBanner pageTitle="Reviews" />

			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
						 	<LeftSidebar />
						</div>

						<div className="col-lg-8">
							<ReviewCard reviews={reviews} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
