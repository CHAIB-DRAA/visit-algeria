import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import ContactForm from "@/components/Common/ContactForm";
import GoogleMap from "@/components/Contact/GoogleMap";
import ContactInfo from "@/components/Contact/ContactInfo";

const page = () => {
	return (
		<>
			<PageBanner pageTitle={"Contactez nous"} />

			<ContactInfo />

			<ContactForm />

			<GoogleMap />
		</>
	);
};

export default page;
