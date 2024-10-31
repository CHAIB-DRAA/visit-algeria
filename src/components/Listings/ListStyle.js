import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { formattedPrice } from "@/utils/formattedPrice";
import HeartButton from "../HeartButton";

const ListStyle = ({
	id,
	title,
	slug,
	imageSrc,
	user,
	location_value,
	category,
	price,
	created_at,
	currentUser,
}) => {
	return (
		<div className="col-lg-6">
			<div className="single-featured style-two box-shadow">
				<div className="row align-items-center">
					<div className="col-lg-4">
						<Link href={`/listing/${id}/${slug}`} className="feature-img">
							<div style={{ width: "100%", height: "190px", position: "relative" }}>
								<Image
									src={imageSrc}
									alt={title}
									layout="fill"  // Utilise le remplissage du conteneur
									objectFit="cover" // Remplit le conteneur en conservant le ratio
									objectPosition="center" // Centre l'image
								/>
							</div>
						</Link>
					</div>

					<div className="col-lg-8">
						<div className="featured-content">
							<div className="d-flex justify-content-between align-items-center">
								<h3>
									<Link href={`/listing/${id}/${slug}`}>
										{title}
									</Link>
								</h3>
								<HeartButton
									currentUser={currentUser}
									listingId={id}
								/>
							</div>

							<ul className="featured-info">
								<li>
									<i className="ri-map-pin-line"></i>
									{location_value}
								</li>
								<li>
									<i className="ri-time-line"></i>
									{formatDate(created_at)}
								</li>
								<li>
									<i className="ri-user-line"></i>
									{user.name}
								</li>
							</ul>

							<ul className="priceing d-flex justify-content-between align-items-center">
								<li>
									<Link
										href={`/listings/?category=${category}`}
										className="tag"
									>
										{category}
									</Link>
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListStyle;
