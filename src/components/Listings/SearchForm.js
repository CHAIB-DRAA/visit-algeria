"use client";

import React, { useState, useEffect, useCallback } from "react";
import searchZoom from "../../../public/images/icon/search-zoom-in.svg";
import locationIco from "../../../public/images/icon/location.svg";
import globalIco from "../../../public/images/icon/global.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchForm = ({ searchParams }) => {
	const [category, setCategory] = useState("");
	const [locationValue, setLocationValue] = useState("");
	const router = useRouter();

	useEffect(() => {
		const { category, location_value } = searchParams;
		setCategory(category);
		setLocationValue(location_value);
	}, [searchParams]);

	const handleSearch = useCallback(() => {
		router.push(
			`/listings?category=${category || ""}&location_value=${
				locationValue || ""
			}`
		);
	}, [category, locationValue]);

	return (
		<div className="page-banner-area pt-100 pb-70">
			<div className="container">
				<div className="page-banner-content">
					<ul className="text-center">
						<li>
							<Link href="/">Accueil</Link>
						</li>
						<li>
							<span>Lieux</span>
						</li>
					</ul>

					<h2 className="text-center">Trouver votre distination </h2>

					<form
						className="search-result"
						onSubmit={(e) => {
							e.preventDefault();
							handleSearch();
						}}
					>
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Tapez ce que vous recherchez..."
										value={category}
										onChange={(e) => {
											const value = e.target.value;
											const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
											setCategory(capitalizedValue);
										}}
									/>
									<Image
										src={globalIco}
										width="20"
										height="20"
										alt="global"
									/>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Entrez une localisation (ex : Oran)"
										value={locationValue}
										onChange={(e) => {
											const value = e.target.value;
											const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
											setLocationValue(capitalizedValue);
										}}
									/>
									<Image
										src={locationIco}
										width="18"
										height="18"
										alt="location"
									/>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="form-group">
									<button
										type="submit"
										className="default-btn"
									>
										<span>
											Chercher maintenant
											<Image
												className="ml-0"
												src={searchZoom}
												width="20"
												height="20"
												alt="search"
											/>
										</span>
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SearchForm;
