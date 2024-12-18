"use client";

import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import location1 from "../../../public/images/location/djanet.png";
import location2 from "../../../public/images/location/chria.png";
import location3 from "../../../public/images/location/mzab.png";
import location4 from "../../../public/images/location/timgad.png";
import location5 from "../../../public/images/location/kasbah.png";
import location6 from "../../../public/images/location/sacre-oran.png";
import starIcon from "../../../public/images/icon/star.svg";
import starHIcon from "../../../public/images/icon/star-h.svg";
import shape1 from "../../../public/images/shape-1.png";
import shape2 from "../../../public/images/shape-2.png";
import getListings from "@/actions/getListings";

// Données des emplacements
const locationsData = [
	{
		id: 1,
		image: location1, // Remplacez par l'image du Tassili n'Ajjer
		title: "Tassili n'Ajjer",
		subtitle: "Parc National, Sud Algérie",
		rating: 5,
		link: "/listing/673b4f96adb0929420b9c33d/parc-national-du-tassili-najjer",
	},
	{
		id: 2,
		image: location2, // Remplacez par l'image de Djanet
		title: "Montagnes de Chréa",
		subtitle: "montagne, Blida",
		rating: 4.5,
		link: "/listing//67483fae36976f652c03081f/montagnes-de-chra",
	},
	{
		id: 3,
		image: location3, // Remplacez par l'image de Ghardaïa
		title: "Ghardaïa",
		subtitle: "Ville historique, M'zab",
		rating: 4.5,
		link: "/listing/6741d40a9ae1b57aef70c09d/ville-historique-mzab",
	},
	{
		id: 4,
		image: location4, // Remplacez par l'image des ruines de Timgad
		title: "Timgad",
		subtitle: "Ruines romaines, Aurès",
		rating: 5,
		link: "/listing/6741d27f9ae1b57aef70c09c/timgad",
	},
	{
		id: 5,
		image: location5, // Remplacez par l'image de la Kasbah d'Alger
		title: "Kasbah d'Alger",
		subtitle: "Patrimoine mondial, Alger",
		rating: 4.5,
		link: "/listing/6734802e97c39d67c3b2ffb7/la-casbah-dalger",
	},
	{
		id: 6,
		image: location6, // Remplacez par l'image de Béjaïa
		title: "Cathedrale du Sacré-Cœur",
		subtitle: "Cathedrale du Sacré-Cœur",
		rating: 4.3,
		link: "/listing/673b077fb445b5facb6a748d/cathedrale-du-sacr-cur",
	},
];

// Composant pour afficher un emplacement
const LocationItem = ({listings, image, title, subtitle, rating, link }) => {
	useEffect(() => {
		console.error(listings);
	}, []);
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
