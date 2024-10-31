import React from "react";
import ListingItem from "./ListingItem";

const UserListing = ({ listings, user, currentUser }) => {
	return (
		<div className="featured-area bg-color-181616 ptb-100">
			<div className="container">
				<div className="section-title left-title">
					<h2>Listings</h2>
				</div>

				<div className="row">
					{listings.length > 0 ? (
						listings.map((list) => (
							<ListingItem
								key={list.id}
								{...list}
								user={user}
								currentUser={currentUser}
							/>
						))
					) : (
						<div className="col-lg-12">
							<div className="border p-4 text-center">Empty</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserListing;
