"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import ListingForm from "@/components/Listings/New/ListingForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

export const dynamic = "force-dynamic";

const Page = () => {
	const router = useRouter();
	const [isAdmin, setIsAdmin] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const currentUser = await getCurrentUser();
			const userIsAdmin = currentUser?.role === "ADMIN";
			setIsAdmin(userIsAdmin);

			if (!userIsAdmin) {
				router.push("/");
			}
		};

		fetchUser();
	}, [router]);

	// Évite l'affichage du contenu jusqu'à la fin de la vérification
	if (isAdmin === null) return null;

	return (
		<>
			<PageBanner pageTitle="Add Listing" />
			<ListingForm />
		</>
	);
};

export default Page;
