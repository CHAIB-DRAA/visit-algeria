import React from "react";
import Link from "next/link";

const PageBanner = ({ pageTitle }) => {
	return (
		<div className="page-banner-area overly bg-ski ptb-100">
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
