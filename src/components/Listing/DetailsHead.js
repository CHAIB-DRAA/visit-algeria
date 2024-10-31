"use client";
import React from "react";
import Image from "next/image";
import locationPin from "../../../public/images/icon/location-pin.svg";
import clock from "../../../public/images/icon/clock.svg";
import informationLine from "../../../public/images/icon/information-line.svg";
import star from "../../../public/images/icon/star.svg";
import starH from "../../../public/images/icon/star-h.svg";
import { formatDate, formatDateWithMonth } from "@/utils/formatDate";
import { formattedPrice } from "@/utils/formattedPrice";
import { getAverageRating } from "@/utils/getAverageRating";
import RatingStars from "./RatingStars";

const DetailsHead = ({
	title,
	location_value,
	created_at,
	id,
	price,
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
						{formatDateWithMonth(created_at)}
					</li>
					<li>
						<Image
							src={informationLine}
							alt="information"
							width={18}
							height={18}
						/>
						ID: TR-{id}-S
					</li>
				</ul>
			</li>

			<li className="review-wraps">
				<h3>{formattedPrice(price)}</h3>
				<RatingStars rating={rating} />
			</li>
		</ul>
	);
};

export default DetailsHead;
