import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import UpdateListingForm from "@/components/Listings/Update/UpdateListingForm"; // Le formulaire de mise à jour

const Page = async ({ params }) => {
    const currentUser = await getCurrentUser();
    const isAdmin = currentUser?.role === "ADMIN";

    // Redirige l'utilisateur s'il n'est pas un administrateur
    if (!isAdmin) {
        redirect("/");
    }

    const { id } = params; // Récupère l'ID de l'annonce depuis les paramètres d'URL

    return (
        <>
            <PageBanner pageTitle="Update Listing" />
            <UpdateListingForm listingId={id} /> {/* Passe l'ID au formulaire */}
        </>
    );
};

export default Page;
