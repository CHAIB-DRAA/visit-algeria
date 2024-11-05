import React from "react"; import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import SigninForm from "@/components/Auth/SigninForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async () => { const currentUser = await getCurrentUser();
	if (currentUser) { redirect("/");}
	return ( <>
			<PageBanner pageTitle="Signin" />
			<SigninForm />
	</>
);
};

export default page;
