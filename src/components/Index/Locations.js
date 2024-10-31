"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import location1 from "../../../public/images/location/location-1.jpg";
import location2 from "../../../public/images/location/location-2.jpg";
import location3 from "../../../public/images/location/location-3.jpg";
import location4 from "../../../public/images/location/location-4.jpg";
import location5 from "../../../public/images/location/location-5.jpg";
import location6 from "../../../public/images/location/location-6.jpg";
import starIcon from "../../../public/images/icon/star.svg";
import starHIcon from "../../../public/images/icon/star-h.svg";
import shape1 from "../../../public/images/shape-1.png";
import shape2 from "../../../public/images/shape-2.png";

// Données des emplacements
const locationsData = [
	{
		id: 1,
		image: location1, // Remplacez par l'image du Tassili n'Ajjer
		title: "Tassili n'Ajjer",
		subtitle: "Parc National, Sud Algérie",
		rating: 5,
		link: "/listing/56/tassili-n-ajjer",
	},
	{
		id: 2,
		image: location2, // Remplacez par l'image de Djanet
		title: "Djanet",
		subtitle: "Oasis, Sud-Est Algérie",
		rating: 4.5,
		link: "/listing/2/djanet",
	},
	{
		id: 3,
		image: location3, // Remplacez par l'image de Ghardaïa
		title: "Ghardaïa",
		subtitle: "Ville historique, M'zab",
		rating: 4.5,
		link: "/listing/3/ghardaia",
	},
	{
		id: 4,
		image: location4, // Remplacez par l'image des ruines de Timgad
		title: "Timgad",
		subtitle: "Ruines romaines, Aurès",
		rating: 5,
		link: "/listing/4/timgad",
	},
	{
		id: 5,
		image: location5, // Remplacez par l'image de la Kasbah d'Alger
		title: "Kasbah d'Alger",
		subtitle: "Patrimoine mondial, Alger",
		rating: 4.5,
		link: "/listing/5/kasbah-alger",
	},
	{
		id: 6,
		image: location6, // Remplacez par l'image de Béjaïa
		title: "Béjaïa",
		subtitle: "Ville côtière, Kabylie",
		rating: 4,
		link: "/listing/6/bejaia",
	},
];

// Composant pour afficher un emplacement
const LocationItem = ({ image, title, subtitle, rating, link }) => {
	// Générer des icônes d'étoiles en fonction de la note
	const stars = Array.from({ length: 5 }, (_, index) => (
		<li key={index}>
			<Image
				src={index < rating ? starIcon : starHIcon}
				width={20}
				height={20}
				alt="étoile"
			/>
		</li>
	));

	return (
		<div className="single-location d-flex justify-content-start align-items-center">
			<Image src={image} width={115} height={115} className="location-image" alt={title} />
			<div className="location-content">
				<h3>{title}</h3>
				<span>{subtitle}</span>
				<ul>{stars}</ul>
			</div>
			<Link href={link} className="map-link"></Link>
		</div>
	);
};

// Composant principal pour afficher les emplacements
const Locations = () => {
	return (
		<div className="location-area ptb-100">
			<div className="container for-shape">
				<div className="section-title">
					<h2>Endroits les plus populaires</h2>
				</div>

				<div className="row justify-content-center">
					{locationsData.map(location => (
						<div key={location.id} className="col-lg-4 col-sm-6">
							<LocationItem
								image={location.image}
								title={location.title}
								subtitle={location.subtitle}
								rating={location.rating}
								link={location.link}
							/>
						</div>
					))}
					<div className="col-lg-12">
						<p className="all-categories mt-20">
							Découvrez tous les différents{" "}
							<Link href="/listings" className="read-more active">
								endroits <i className="ri-arrow-right-line"></i>
							</Link>
						</p>
					</div>
				</div>

				<Image
					src={shape1}
					width={136}
					height={125}
					className="shape shape-1"
					alt="forme décorative"
				/>
				<Image
					src={shape2}
					width={159}
					height={177}
					className="shape shape-2"
					alt="forme décorative"
				/>
			</div>
		</div>
	);
};

export default Locations;
