import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import SettingsForm from "@/components/Profile/SettingsForm";
export const dynamic = "force-dynamic";

const page = async () => {
	const currentUser = await getCurrentUser();
	return (
		<>
			<PageBanner pageTitle="Settings" />
			
			<SettingsForm currentUser={currentUser} />
		</>
	);
};

export default page;
