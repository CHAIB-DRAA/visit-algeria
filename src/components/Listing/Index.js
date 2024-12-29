"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DetailsHead from "./DetailsHead";
import RightSidebar from "./RightSidebar";
import FeedbackForm from "./FeedbackForm";
import Reviews from "./Reviews";
import dynamic from "next/dynamic";
import axios from "axios";

const MapWithNoSSR = dynamic(() => import("../Map"), {
	ssr: false,
});
import Features from "./Features";
import SahreAndSave from "./SahreAndSave";
import DetailsImages from "./DetailsImages";
import Listings from "@/components/Listings";

const Index = ({ currentUser, listing, reviews }) => {
	const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
	const [error, setError] = useState("");
	const [googleMapsUrl, setGoogleMapsUrl] = useState("");
	const [wazeUrl, setWazeUrl] = useState("");

	useEffect(() => {
		const fetchCoordinates = async () => {
			if (listing) {
				try {
					// Tentative de récupération des coordonnées par l'adresse
					if (listing.address) {
						const response = await axios.get(
							`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(listing.address)}`
						);
						console.log(response);

						if (response.data && response.data.length > 0) {
							const { lat, lon } = response.data[0];
							const parsedLat = parseFloat(lat);
							const parsedLon = parseFloat(lon);
							setCoordinates({ lat: parsedLat, lng: parsedLon });
							setWazeUrl(`https://waze.com/ul?q=${listing.address}`);
							setGoogleMapsUrl(`https://www.google.com/maps/dir/?api=1&destination=${listing.address}`);
						} else if (listing.latitude && listing.longitude) {
							// Si aucune adresse n'est trouvée, utiliser latitude et longitude du listing
							const parsedLat = listing.latitude;
							const parsedLon = listing.longitude;
							setCoordinates({ lat: parsedLat, lng: parsedLon });
							setWazeUrl(`https://waze.com/ul?q=${listing.address}`);
							setGoogleMapsUrl(`https://www.google.com/maps/dir/?api=1&destination=${listing.address}`);
						} else {
							setError("No results found for the address or name.");
						}
					} else {
						setError("No address provided for the listing.");
					}
				} catch (error) {
					setError("Error fetching coordinates.");
					console.error("Error fetching coordinates:", error);
				}
			} else {
				setError("Listing is not available.");
			}
		};

		fetchCoordinates();
	}, [listing]);

	// Afficher un message d'erreur si nécessaire
	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className="listing-details-area ptb-100 ">
			<div className="container ">
				<div className="row">
					<div className="col-lg-11">
						<div className="listing-details-content">
							<DetailsHead {...listing} />
							<DetailsImages {...listing} />

							<div className="tag-sheare d-flex justify-content-between">
								<ul className="tags-list">
									<li>
										<Link href={`/listings/?category=${listing.category}`}>
											{listing.category}
										</Link>
									</li>
								</ul>
								<SahreAndSave
									currentUser={currentUser}
									listingId={listing.id}
								/>
							</div>

							<div
								dangerouslySetInnerHTML={{
									__html: listing.description,
								}}
								className="listing-details-box"
							/>

							<Features {...listing} />
							{/* Liens vers Google Maps et Waze */}
							<div>
								<h3>Ouvrir dans :</h3>
								<ul>
									<li>
										<Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
											Google Maps
										</Link>
									</li>
									<li>
										<Link href={wazeUrl} target="_blank" rel="noopener noreferrer">
											Waze
										</Link>
									</li>
								</ul>
							</div>

							{coordinates.lat !== null && coordinates.lng !== null ? (
								<MapWithNoSSR
									latitude={coordinates.lat}
									longitude={coordinates.lng}
								/>
							) : (
								<p>Loading map...</p> // Affiche un message pendant le chargement des coordonnées
							)}

							<Reviews reviews={reviews} />

							<FeedbackForm
								currentUser={currentUser}
								listingId={listing.id}
							/>
						</div>
						</div>



				</div>
			</div>

		</div>
	);
};

export default Index;
