"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";

import testimonyImg from "../../../public/images/testimony/testimony-img.png";
import testimonyShp1 from "../../../public/images/testimony/testimony-shape-1.png";
import testimonyShp2 from "../../../public/images/testimony/testimony-shape-2.png";
import quotemarks from "../../../public/images/icon/quotemarks-left.svg";
import starIco from "../../../public/images/icon/star.svg";
import starHIco from "../../../public/images/icon/star-h.svg";
import testimonyUser from "../../../public/images/testimony/testimony-1.jpg";

const Testimony = () => {
	return (
		<div className="testimony-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="testimony-img">
							<Image
								src={testimonyImg}
								alt="testimony"
								width={510}
								height={531}
							/>
							<Image
								src={testimonyShp1}
								className="shape shape-1"
								alt="testimony"
								width={416}
								height={405}
							/>
							<Image
								src={testimonyShp2}
								className="shape shape-2"
								alt="testimony"
								width={127}
								height={171}
							/>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="testimony-content">
							<h2>Les témoignages de nos clients sont très importants pour nous</h2>

							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								navigation={true}
								mousewheel={true}
								modules={[Navigation, Mousewheel]}
								className="testimony-slide"
							>
								<SwiperSlide>
									<div className="single-testimony">
										<div className="d-flex justify-content-between align-items-center">
											<Image
												className="quotes"
												src={quotemarks}
												width="50"
												height="50"
												alt="testimony"
											/>
											<ul>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starHIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
											</ul>
										</div>

										<p>
											"Mon voyage en Algérie a été une expérience inoubliable ! Les paysages sont à couper le souffle et la culture est incroyablement riche. J'ai découvert des endroits magnifiques, des gens accueillants, et j'ai savouré une délicieuse cuisine locale. Grâce à ce site, j'ai pu planifier mon voyage facilement et trouver des recommandations sur les meilleures attractions. Merci à ADLES !"
										</p>

										<div className="for-post d-flex justify-content-start align-items-center">
											<Image
												src={testimonyUser}
												alt="testimony"
												width={64}
												height={64}
											/>
											<div className="traveller">
												<h3>Clara Dupont</h3>
												<span>Voyageuse</span>
											</div>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="single-testimony">
										<div className="d-flex justify-content-between align-items-center">
											<Image
												className="quotes"
												src={quotemarks}
												width="50"
												height="50"
												alt="testimony"
											/>
											<ul>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
												<li>
													<Image
														src={starHIco}
														width="17"
														height="16"
														alt="testimony"
													/>
												</li>
											</ul>
										</div>

										<p>
											"Explorer les marchés colorés d'Alger et se perdre dans les rues anciennes de la Casbah a été un rêve devenu réalité. Chaque rencontre avec les habitants a enrichi mon expérience et m'a donné envie de revenir. ADLES m'a aidé à découvrir des trésors cachés que je n'aurais jamais trouvés autrement. Je recommande vivement ce site à tous les voyageurs !"
										</p>

										<div className="for-post d-flex justify-content-start align-items-center">
											<Image
												src={testimonyUser}
												alt="testimony"
												width={64}
												height={64}
											/>
											<div className="traveller">
												<h3>Marc Leclerc</h3>
												<span>Aventurier</span>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimony;
