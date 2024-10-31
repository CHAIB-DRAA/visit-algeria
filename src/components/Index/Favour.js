"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import plush from "../../../public/images/icon/plush.svg";
import favimg from "../../../public/images/favourite-img.png";

const Favour = () => {
	return (
		<div className="favourite-area bg-color-fbf6ff ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<div className="favourite-content">
							<h2>
								Découvrez Vos Destinations Préférées et Où Vous Rêvez d'Aller !
							</h2>
							<p>
								Choisissez une catégorie qui correspond à vos envies.
								Utilisez les filtres pour affiner votre recherche selon vos préférences !{" "}
								<span className="br">
									<br />
								</span>{" "}
								et trouvez exactement ce que vous recherchez !
							</p>

							<Link href="/listings" className="default-btn">
								<span>
									Explorer les distinations
									<Image
										width="18"
										height="18"
										src={plush}
										alt="plush"
									/>
								</span>
							</Link>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="favourite-img">
							<Image
								width={530}
								height={402}
								src={favimg}
								alt="favimg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favour;
