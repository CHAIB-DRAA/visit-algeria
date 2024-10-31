"use client"
import React, {useEffect} from "react";
import Link from "next/link";

const PageBanner = ({ pageTitle, imageSrc }) => {
	useEffect(() => {

	}, [imageSrc]);
	return (
		<div
			className="page-banner-area overly ptb-100"
			style={{
				backgroundImage: `url(${imageSrc})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className="container">
				<div className="page-banner-content white-title">
					<ul>
						<li>
							<Link href="/">Accueil</Link>
						</li>
						<li>
							<span>{pageTitle}</span>
						</li>
					</ul>

					<h2>{pageTitle}</h2>
				</div>
			</div>
		</div>
	);
};

export default PageBanner;
