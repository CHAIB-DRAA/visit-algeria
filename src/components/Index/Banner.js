"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import bannerBg from "../../../public/images/banner/banner-bg.png";
import shape1 from "../../../public/images/banner/shape-1.png";
import shape2 from "../../../public/images/banner/shape-2.png";
import shape3 from "../../../public/images/banner/shape-3.png";
import SearchForm from "./SearchForm";
import { categories } from "@/libs/Categories";
import useTranslation from 'next-translate/useTranslation';

const Banner = () => {
	const router = useRouter();
	const { t } = useTranslation('common'); // 'common' fait référence au fichier common.json

	return (
		<div className="banner-area bg-1">
			<div className="container-fluid">
				<div className="banner-content ptb-100">
					<h1>Trouvez tout ce que vous voulez.</h1>

					<SearchForm />

					<ul className="src-tag">
						<li>
							<span>Recherche populaire:</span>
						</li>
						{categories.slice(0, 7).map((cat) => (
							<li key={cat.label}>
								<div
									onClick={() =>
										router.push(
											`/listings/?category=${cat.value}`
										)
									}
									style={{ cursor: "pointer" }}
									href="/search"
								>
									{cat.label},
								</div>
							</li>
						))}

						<li>
							<div
								onClick={() => router.push(`/listings`)}
								className="read-more active"
							>
								Voir Tous
							</div>
						</li>
					</ul>
					<Image
						src={shape1}
						width={122}
						height={96}
						className="shape shape-1"
						alt="shape"
					/>
					<Image
						src={shape2}
						width={122}
						height={96}
						className="shape shape-2"
						alt="shape"
					/>
					<Image
						src={shape3}
						width={122}
						height={96}
						className="shape shape-3"
						alt="shape"
					/>
				</div>

				<div className="banner-img">
					<Image
						src={bannerBg}
						width={1920}
						height={821}
						alt="banner"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
