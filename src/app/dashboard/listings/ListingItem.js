"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateWithMonth } from "@/utils/formatDate";

const ListingItem = ({
						 id,
						 title,
						 slug,
						 imageSrc,
						 user,
						 created_at,
						 category,
						 onDelete,
					 }) => {
	return (
		<div className="col-md-6 col-xl-4 mb-4">
			<div className="db-listing-card card">
				<Image
					src={imageSrc}
					className="card-img-top"
					alt="Card Image"
					width={300}
					height={300}
				/>
				<div className="card-body">
					<h6 className="card-title">{title}</h6>

					<ul className="fs-14">
						<li>Author: {user.name}</li>
						<li>Date: {formatDateWithMonth(created_at)}</li>
						<li>Category: {category}</li>
					</ul>

					<Link
						href={`/listing/${id}/${slug}`}
						className="btn btn-primary btn-sm"
					>
						View Details
					</Link>

					<button
						className="btn btn-danger btn-delete btn-sm ms-3"
						onClick={onDelete}
					>
						Delete
					</button>

					{/* Passez l'ID dans l'URL pour accéder à la page de mise à jour
					<Link
						href={`/listing/update/${id}`}  // Lien de mise à jour avec l'ID
						className="btn btn-warning btn-sm ms-3"
					>
						Update
					</Link>*/}
				</div>
			</div>
		</div>
	);
};

export default ListingItem;
