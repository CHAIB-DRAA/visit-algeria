import React from "react";
import Link from "next/link";
import Image from "next/image";

import locationSvg from "../../../../public/images/icon/location-pin.svg";
import clockSvg from "../../../../public/images/icon/clock.svg";
import profileSvg from "../../../../public/images/icon/profile.svg";
import { formatDate } from "@/utils/formatDate";
import { formattedPrice } from "@/utils/formattedPrice";
import HeartButton from "@/components/HeartButton";

const ListingItem = ({
	listing: {
		id,
		title,
		slug,
		imageSrc,
		location_value,
		price,
		category,
		created_at,
		user,
	},
	currentUser,
}) => {
	return (
		<div className="col-lg-4">
			<div className="single-featured">
				<Link href={`/listing/${id}/${slug}`} className="feature-img">
					<Image
						src={imageSrc}
						width={860}
						height={590}
						alt="features"
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</Link>

				<div className="featured-content">
					<div className="d-flex justify-content-between align-items-center">
						<h3>
							<Link href={`/listing/${id}/${slug}`}>{title}</Link>
						</h3>
						<HeartButton currentUser={currentUser} listingId={id} />
					</div>

					<ul className="featured-info">
						<li>
							<Image
								src={locationSvg}
								width="18"
								height="18"
								alt="features"
							/>
							{location_value}
						</li>
						<li>
							<Image
								src={clockSvg}
								width="18"
								height="18"
								alt="features"
							/>
							{formatDate(created_at)}
						</li>
						<li>
							<Image
								src={profileSvg}
								width="18"
								height="18"
								alt="features"
							/>
							{user.name}
						</li>
					</ul>

					<ul className="priceing d-flex justify-content-between align-items-center">
						<li>
							<Link href="/search" className="tag">
								{category}
							</Link>
						</li>
						<li>
							<span className="price">
								{formattedPrice(price)}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ListingItem;
