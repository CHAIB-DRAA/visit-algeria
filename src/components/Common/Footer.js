import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.png";
import phoneCell from "../../../public/images/icon/phone-call.svg";
import locationPin from "../../../public/images/icon/location-pin.svg";
import emailIco from "../../../public/images/icon/email.svg";
import menuActive from "../../../public/images/menu-active.png";

const Footer = () => {
	return (
		<>
			<div className="footer-area pt-100 pb-70 bg-color-fffcf8">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<div className="single-footer-widget">
								<Link href="/" className="footer-logo">
									<Image
										src={logo}
										width={156}
										height={40}
										className="main-logo"
										alt="logo"
									/>
								</Link>

								<ul className="contact-info">
									{/*<li>
										<Image
											src={phoneCell}
											width="16"
											height="17"
											alt="footer"
										/>
										Appelez-nous :
										<a href="tel:+33772339892">
											+(213) 0772339892
										</a>
									</li>
									<li>
										<Image
											src={locationPin}
											width="16"
											height="16"
											alt="footer"
										/>
										<span>
											Adresse : +7011 Vermont Ave, Los
											Angeles,{" "}
											<span className="br">
												<br />
											</span>{" "}
											CA 90044
										</span>
									</li>*/}
									<li>
										<Image
											src={emailIco}
											width="16"
											height="17"
											alt="footer"
										/>
										Écrivez-nous :
										<a href="mailto:contact@dzairtrips.com">
											contact@dzairtrips.com
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-8">
							<div className="row">
								<div className="col-lg-4 col-sm-6 col-md-4">
									<div className="single-footer-widget ml-55">
										<h3>Catégories Populaires</h3>

										<ul className="import-link">

											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings?category=Plage">
													Plages
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings?category=Hôtel">
													Hôtels
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings?category=sahara">
													Sahara
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings?category=Ski">
													Ski
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-4 col-sm-6 col-md-4">
									<div className="single-footer-widget ml-105">
										<h3>Liens Rapides</h3>

										<ul className="import-link">
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/about-us">
													À Propos de Nous
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/contact-us">
													Contactez-Nous
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/faq">FAQ</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/">
													Politique de Confidentialité
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/">
													Termes et Conditions
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-4 col-sm-6 col-md-4">
									<div className="single-footer-widget ml-90">
										<h3>Suivez-Nous Sur</h3>
										<p>
											Une fois que vous avez choisi une entreprise,
											en savoir plus à son sujet.
										</p>

										<ul className="social-link">
											<li>
												<a
													href="https://www.facebook.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="ri-facebook-fill"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.instagram.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="ri-instagram-line"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.twitter.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="ri-twitter-fill"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.linkedin.com/"
													rel="noopener noreferrer"
												>
													<i className="ri-linkedin-fill"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copy-right-area bg-color-fcf1e3">
				<div className="container">
					<div className="copy-right-content">
						<p>
							© <span>DZ Travel</span> est fièrement détenu par{" "}
							<a
								href="https://envytheme.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								DZ Travel
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
