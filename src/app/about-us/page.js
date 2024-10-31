import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Image from "next/image";
import Link from "next/link";
import WorkArea from "@/components/Index/WorkArea";
import Testimony from "@/components/Index/Testimony";
import Favour from "@/components/Index/Favour";
import Partner from "@/components/Index/Partner";
import Subscribe from "@/components/Index/Subscribe";
import Blog from "@/components/Index/Blog";
import aboutImg from "../../../public/images/about-img.png";
import getBlogPosts from "@/actions/getBlogPosts";

const page = async () => {
	const blogPosts = await getBlogPosts();
	return (
		<>
			<PageBanner pageTitle="About Us" />

			<div className="about-us-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-content">
								<h2>
									Découvrez l'Algérie : Votre Guide de Voyage Incontournable
								</h2>
								<p>
									Bienvenue sur notre site, la référence pour les voyageurs souhaitant explorer les
									merveilles de l'Algérie. Notre mission est de vous aider à découvrir les trésors
									cachés de ce magnifique pays, de ses paysages époustouflants aux richesses
									culturelles uniques. Que vous soyez en quête d'aventures dans le Sahara, d'escapades
									en bord de mer ou d'explorations des sites historiques, nous avons tout ce qu'il
									vous faut pour planifier votre voyage.
								</p>
								<p>
									Nous sommes fiers de promouvoir le tourisme en Algérie, un pays riche en histoire et
									en diversité. Grâce à nos recommandations, vous pourrez profiter des meilleures
									expériences, des conseils pratiques, et des itinéraires personnalisés pour chaque
									type de voyageur. Laissez-nous vous guider dans cette aventure inoubliable et
									découvrir tout ce que l'Algérie a à offrir.
								</p>

								<Link href="/listings" className="default-btn active">
									Commencez votre aventure en Algérie
								</Link>
							</div>
						</div>


						<div className="col-lg-6">
							<div className="about-img">
								<Image
									src={aboutImg}
									width={"auto"}
									height={"auto"}
									alt="about"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<WorkArea/>

			<Testimony/>

			<Favour/>

			<Partner/>

			<Subscribe/>

			<Blog blogPosts={blogPosts}/>
		</>
	);
};

export default page;
