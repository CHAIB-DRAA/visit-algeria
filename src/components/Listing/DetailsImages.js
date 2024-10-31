"use client";
import React from "react";
import Image from "next/image";

const DetailsImages = ({ imageSrc }) => {
	return (
		<div className="listing-details-img listing-details-slide owl-carousel owl-theme">
			<div className="listing-details-img-item" style={{ position: 'relative', height: '834px', width: '100%' }}>
				<Image
					src={imageSrc}
					alt="Image"
					layout="fill" // Utiliser le remplissage du conteneur
					objectFit="cover" // Remplit le conteneur en conservant le ratio
					objectPosition="center" // Centre l'image
				/>
			</div>
		</div>
	);
};

export default DetailsImages;
