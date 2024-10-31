"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import routeSquare from "../../../public/images/icon/route-square.svg";
import shp1 from "../../../public/images/shape-1.png";
import shp2 from "../../../public/images/shape-2.png";
import Input from "../FormHelpers/Input";

const Subscribe = () => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (data) => {
		setIsLoading(true);
		axios
			.post("/api/subscription", data)
			.then((response) => {
				toast.success("Inscription réussie !");
				reset();
			})
			.catch((error) => {
				toast.error(error.response.data.message || "Une erreur s'est produite");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="subscribe-area">
			<div className="container">
				<div className="subscribe-bg">
					<div className="subscribe-content">
						<h2>
							Inscrivez-vous pour recevoir des offres spéciales chaque jour par e-mail
						</h2>

						<div className="newsletter-wrap">
							<form
								className="newsletter-form"
								onSubmit={handleSubmit(onSubmit)}
							>
								<Input
									id="email"
									placeholder="Adresse e-mail valide"
									disabled={isLoading}
									register={register}
									errors={errors}
									type="email"
									required
								/>

								<button
									className="default-btn"
									type="submit"
									disabled={isLoading}
								>
									Abonnez-vous maintenant
									<Image
										src={routeSquare}
										width="20"
										height="20"
										alt="Image"
									/>
								</button>
							</form>
						</div>
					</div>

					<Image
						src={shp1}
						className="shape shape-1"
						alt="Décoratif"
						width={136}
						height={125}
					/>
					<Image
						src={shp2}
						className="shape shape-2"
						alt="Décoratif"
						width={159}
						height={177}
					/>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
