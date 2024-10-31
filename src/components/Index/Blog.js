"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import { formatDateBlog } from "@/utils/formatDate";

const Blog = ({ blogPosts = [] }) => { // Default to an empty array
	return (
		<div className="blog-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Blog Posts</h2>
				</div>

				<Swiper
					spaceBetween={30}
					navigation={true}
					mousewheel={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 3,
						},
						1400: {
							slidesPerView: 4,
						},
					}}
					modules={[Navigation, Mousewheel]}
					className="blog-slide owl-carousel owl-theme"
				>
					{blogPosts.length > 0 ? ( // Check if there are blog posts
						blogPosts.map((blog) => (
							<SwiperSlide key={blog.id}>
								<div className="single-blog">
									<Link
										href={`/blog/${blog.id}/${blog.slug}`}
										className="blog-img"
									>
										<Image
											src={blog.imageSrc}
											alt="blog"
											width="300"
											height="300"
										/>
										<span className="date">
											<div
												dangerouslySetInnerHTML={{
													__html: formatDateBlog(blog.createdAt), // Ensure this matches your data
												}}
											/>
										</span>
									</Link>

									<div className="blog-content">
										<Link href="/blogs" className="tag">
											{blog.category}
										</Link>
										<h3>
											<Link
												href={`/blog/${blog.id}/${blog.slug}`}
											>
												{blog.title}
											</Link>
										</h3>
										<Link
											href={`/blog/${blog.id}/${blog.slug}`}
											className="read-more"
										>
											Read More
											<i className="ri-arrow-right-line"></i>
										</Link>
									</div>
								</div>
							</SwiperSlide>
						))
					) : (
						<SwiperSlide>
							<div className="single-blog">
								<p>No blog posts available.</p>
							</div>
						</SwiperSlide>
					)}
				</Swiper>
			</div>
		</div>
	);
};

export default Blog;
