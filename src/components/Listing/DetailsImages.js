"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const DetailsImages = ({ imageSrc }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // 768px est une largeur courante pour les mobiles
		};

		handleResize(); // Vérifiez la taille de l'écran au chargement
		window.addEventListener("resize", handleResize); // Écoutez les changements de taille

		return () => {
			window.removeEventListener("resize", handleResize); // Nettoyez l'écouteur
		};
	}, []);

	return (
		<div className="listing-details-img listing-details-slide owl-carousel owl-theme">
			<div
				className="listing-details-img-item"
				style={{
					position: 'relative',
					height: isMobile ? '50vh' : '87vh', // Changez la hauteur en fonction de la taille de l'écran
					width: '100%',
				}}
			>
				<Image
					src={imageSrc}
					alt="Image"
					layout="fill" // Utiliser le remplissage du conteneur
					objectFit="cover" // Remplit le conteneur en conservant le ratio
					objectPosition="center" // Centre l'image
					priority // Charge l'image en priorité pour une meilleure performance
				/>
			</div>
		</div>
	);
};

export default DetailsImages;
