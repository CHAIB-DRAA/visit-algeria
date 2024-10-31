"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import { categories } from "@/libs/Categories";

const Category = () => {
	return (
		<div className="category-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>
						Trouvez, c'est plus facile !{" "}
						<span className="br">
							<br />
						</span>{" "}
						Par Catégories
					</h2>
				</div>

				<Swiper
					spaceBetween={30}
					navigation={true}
					mousewheel={true}
					breakpoints={{
						0: {
							slidesPerView: 2,
						},
						576: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 4,
						},
						1200: {
							slidesPerView: 6,
						},
					}}
					modules={[Navigation, Mousewheel]}
					className="category-slide"
				>
					{categories.map((cat) => (
						<SwiperSlide key={cat.label}>
							<div className="single-category">
								<Link
									href={`/listings/?category=${cat.value}`}
									className="category-img"
								>
									<Image
										src={cat.imageSrc}
										width={400}
										height={440}
										alt="category"
									/>
									<i className="ri-add-circle-fill"></i>
								</Link>

								<div className="category-content">
									<h3>
										<Link
											href={`/listings/?category=${cat.value}`}
										>
											{cat.label}
										</Link>
									</h3>
									{/* <span>131 Listings</span> */}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<p className="all-categories">
					Parcourez Tous les Différentes {" "}
					<Link href="/listings" className="read-more active">
						Catégories <i className="ri-arrow-right-line"></i>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Category;
