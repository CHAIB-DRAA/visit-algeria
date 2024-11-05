import React, { useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import SigninForm from "@/components/Auth/SigninForm";
import { getCurrentUser  } from "@/actions/getCurrentUser";

const Page = async () => {
	const currentUser  = await getCurrentUser ();
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState(!!currentUser );

	if (isAuthenticated) {
		redirect("/");
	}

	const handleSignin = () => {
		setIsAuthenticated(true);
		router.push("/"); // Redirige vers la page d'accueil après la connexion
	};

	return (
		<>
			<PageBanner pageTitle="Signin" />
			<SigninForm onSignin={handleSignin} />
		</>
	);
};

export default Page;
