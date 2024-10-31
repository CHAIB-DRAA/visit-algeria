"use client";
import React from "react";

const Features = ({ features }) => {
	return (
		<div className="features-content">
			<h3>Features</h3>
			<div
				dangerouslySetInnerHTML={{
					__html: features,
				}}
			/>

			{/* <div className="row">
				<div className="col-lg-6 col-sm-6">
					<ul className="features-list">
						<li>
							<i className="ri-checkbox-circle-line"></i>
							Pro camera system
						</li>
						<li>
							<i className="ri-checkbox-circle-line"></i>
							Pro camera system
						</li>
						<li>
							<i className="ri-checkbox-circle-line"></i>
							Pro camera system
						</li>
					</ul>
				</div>
				<div className="col-lg-6 col-sm-6">
					<ul>
						<li>
							<i className="ri-checkbox-circle-line"></i>
							A15 Bionic chip
						</li>
						<li>
							<i className="ri-checkbox-circle-line"></i>
							Compatible with MagSafe accessories
						</li>
						<li>
							<i className="ri-checkbox-circle-line"></i>
							256 GB Dedicated Ram
						</li>
					</ul>
				</div>
			</div> */}
		</div>
	);
};

export default Features;
