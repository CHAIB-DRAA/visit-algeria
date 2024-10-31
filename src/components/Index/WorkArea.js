"use client";
import React from "react";
import Image from "next/image";
import work1 from "../../../public/images/work/work-1.png";
import work2 from "../../../public/images/work/work-2.png";
import work3 from "../../../public/images/work/work-3.png";
import shape1 from "../../../public/images/shape-3.png";
import shape2 from "../../../public/images/shape-4.png";

const WorkArea = () => {
	return (
		<div className="work-area pt-100 pb-70 bg-color-fffcf8">
			<div className="container">
				<div className="section-title">
					<h2>Comment notre site fonctionne pour vous</h2>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="single-work">
							<Image
								src={work1}
								width={282}
								height={292}
								alt="Choisissez une catégorie"
							/>
							<h3>1. Choisissez une catégorie</h3>
							<p>
								Sélectionnez une catégorie qui correspond à vos
								centres d'intérêt. Utilisez des filtres pour
								personnaliser votre recherche et trouver
								précisément ce que vous voulez.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-work">
							<Image
								src={shape1}
								width={167}
								height={24}
								className="shape shape-3"
								alt="Éléments graphiques"
							/>
							<Image
								src={shape2}
								width={167}
								height={24}
								className="shape shape-4"
								alt="Éléments graphiques"
							/>
							<Image
								src={work2}
								width={282}
								height={292}
								alt="Trouvez ce que vous voulez"
							/>
							<h3>2. Trouvez ce que vous voulez</h3>
							<p>
								Une fois que vous avez choisi une option, découvrez-en
								plus, lisez les avis et trouvez sa localisation pour
								y accéder facilement !
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-work">
							<Image
								src={work3}
								width={282}
								height={292}
								alt="Explorez"
							/>
							<h3>3. Sortez et explorez</h3>
							<p>
								La seule chose qu'il vous reste à faire est de sortir,
								d'explorer et de vous amuser ! Rencontrez de nouveaux
								amis et vivez la ville comme un vrai local !
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkArea;
