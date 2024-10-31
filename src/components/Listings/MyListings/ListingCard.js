"use client";
import React from "react";
import ListingItem from "./ListingItem";

const ListingCard = ({ currentUser, listings }) => {
	return (
		<div className="featured-area bg-color-fff5e1 ptb-100">
			<div className="container">
				<div className="section-title-wrap">
					<div className="section-title left-title">
						<h2>My Latest Ads</h2>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					{listings.length > 0
						? listings.map((list) => (
								<ListingItem
									currentUser={currentUser}
									key={list.id}
									{...list}
								/>
						  ))
						: <div className="col-lg-12"><div className="border p-4 text-center">Empty</div></div>}
				</div>
			</div>
		</div>
	);
};

export default ListingCard;
