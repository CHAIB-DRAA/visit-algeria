"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import FeaturedItem from "./FeaturedItem";
import { toast } from "react-hot-toast";

const Featured = ({ currentUser }) => {
	const [listings, setListings] = useState([]);
	const [cat, setCat] = useState("all");

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`/api/listings/featured?category=all`)
				.then((response) => {
					setListings(response.data);
				})
				.catch((error) => {
					toast.error("Something went wromg!");
				});
		};

		fetchData();
	}, []);

	const getFeatured = async (cat) => {
		setCat(cat);
		await axios
			.get(`/api/listings/featured?category=${cat}`)
			.then((response) => {
				setListings(response.data);
			})
			.catch((error) => {
				toast.error("Something went wromg!");
			});
	};
	return (
		<div className="featured-area bg-color-fffcf8 ptb-100">
			<div className="container">
				<div className="section-title-wrap">
					<div className="section-title left-title">
						<h2>Tendances</h2>
					</div>

					<div className="section-title-right">
						<ul className="nav nav-tabs featured-tabs">
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "all" && "active"
									}`}
									onClick={() => getFeatured("all")}
								>
									Toutes
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Hôtel" && "active"
									}`}
									onClick={() => getFeatured("Hôtel")}
								>
									Hotêls
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Restaurant" && "active"
									}`}
									onClick={() => getFeatured("Restaurant")}
								>
									Restaurants
								</button>
							</li>

							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Plage" && "active"
									}`}
									onClick={() => getFeatured("Plage")}
								>
									Plages
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Châteaux" && "active"
									}`}
									onClick={() => getFeatured("Châteaux")}
								>
									Châteaux
								</button>
							</li>
							<li className="nav-item">
								<button
									className={`nav-link default-btn ${
										cat === "Sahara" && "active"
									}`}
									onClick={() => getFeatured("Sahara")}
								>
									Sahara
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="tab-content">
					<div className="tab-pane fade show active">
						<Swiper
							spaceBetween={30}
							grabCursor={true}
							pagination={{
								clickable: true,
							}}
							breakpoints={{
								0: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
								1200: {
									slidesPerView: 4,
								},
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className="featured-slide"
						>
							{listings.length > 0 &&
								listings.map((list) => (
									<SwiperSlide key={list.id}>
										<FeaturedItem
											currentUser={currentUser}
											{...list}
										/>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
