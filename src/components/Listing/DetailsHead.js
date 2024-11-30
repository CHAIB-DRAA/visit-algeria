"use client";
import React from "react";
import Image from "next/image";
import locationPin from "../../../public/images/icon/location-pin.svg";
import clock from "../../../public/images/icon/clock.svg";
import { formatDate, formatDateWithMonth } from "@/utils/formatDate";
import { getAverageRating } from "@/utils/getAverageRating";
import RatingStars from "./RatingStars";

const DetailsHead = ({
	title,
	location_value,
	createdAt,
	reviews,
}) => {
	const rating = getAverageRating(reviews);

	return (
		<ul className="list-detail d-flex justify-content-between">
			<li>
				<h3>{title}</h3>
				<ul className="info">
					<li>
						<Image
							src={locationPin}
							alt="location"
							width={16}
							height={16}
						/>
						{location_value}
					</li>
					<li>
						<Image src={clock} alt="clock" width={18} height={18} />
						{formatDateWithMonth(createdAt)}
					</li>

				</ul>
			</li>

			<li className="review-wraps">
				<RatingStars rating={rating} />
			</li>
		</ul>
	);
};

export default DetailsHead;
