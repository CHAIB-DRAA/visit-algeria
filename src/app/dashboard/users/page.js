import React from "react";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import UsersCard from "./UsersCard";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getAllUsers from "@/actions/getAllUser";
import LeftSidebar from "@/components/Dashboard/LeftSidebar";

export const dynamic = "force-dynamic";


const page = async () => {
	const users = await getAllUsers();
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	if (!isAdmin) {
		redirect("/");
	}
	return (
		<>
			<PageBanner pageTitle="Users" />

			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
						 	<LeftSidebar />
						</div>

						<div className="col-lg-8">
							<UsersCard users={users} currentUser={currentUser} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
