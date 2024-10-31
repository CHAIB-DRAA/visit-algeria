import React from "react";
import Link from "next/link";

const DashboardStats = ({ listings, blogPosts, users, reviews }) => {
	return (
		<div className="row">
			<div className="col-lg-6 col-md-6 mb-4">
				<Link href="/dashboard/listings">
					<div className="card">
						<div className="card-body">
							<h6 className="card-title">Listings</h6>
							<p className="card-text ">
								Number of listings: {listings}
							</p>
						</div>
					</div>
				</Link>
			</div>

			<div className="col-lg-6 col-md-6 mb-4">
				<Link href="/dashboard/blog">
					<div className="card">
						<div className="card-body">
							<h6 className="card-title">Blog Posts</h6>
							<p className="card-text ">
								Number of blog posts: {blogPosts}
							</p>
						</div>
					</div>
				</Link>
			</div>

			<div className="col-lg-6 col-md-6 mb-4">
				<Link href="/dashboard/reviews">
					<div className="card">
						<div className="card-body">
							<h6 className="card-title">Reviews</h6>
							<p className="card-text ">
								Number of reviews: {reviews}
							</p>
						</div>
					</div>
				</Link>
			</div>

			<div className="col-lg-6 col-md-6 mb-4">
				<Link href="/dashboard/users">
					<div className="card">
						<div className="card-body">
							<h6 className="card-title">Users</h6>
							<p className="card-text ">
								Number of users: {users}
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default DashboardStats;
