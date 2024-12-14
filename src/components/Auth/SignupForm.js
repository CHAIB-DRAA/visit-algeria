"use client";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import { useState } from "react";
import Button from "../FormHelpers/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialButton from "../FormHelpers/SocialButton";

const SignupForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "", // Ajout de confirmPassword
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		if (data.password !== data.confirmPassword) {
			setError("confirmPassword", {
				type: "manual",
				message: "Les mots de passe ne correspondent pas",
			});
			setIsLoading(false);
			return;
		}

		axios
			.post("/api/register", {
				name: data.name,
				email: data.email,
				password: data.password,
			})
			.then(() => {
				toast.success("Inscription réussie !");
				router.push("/auth/signin");
			})
			.catch((error) => {
				if (error.response && error.response.data) {
					toast.error(error.response.data.message || "Une erreur est survenue !");
				} else {
					toast.error("Une erreur est survenue !");
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="authentication-area ptb-100 bg-color-fff5e1">
			<div className="container">
				<div className="authentication-content">
					<h3>S'inscrire</h3>
					<form
						className="authentication"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="form-group">
							<Input
								id="name"
								placeholder="Nom"
								disabled={isLoading}
								register={register}
								errors={errors}
								required={{ required: "Le nom est requis" }}
							/>
							{errors.name && <p className="error-message">{errors.name.message}</p>}
						</div>
						<div className="form-group">
							<Input
								id="email"
								type="email"
								placeholder="Email"
								disabled={isLoading}
								register={register}
								errors={errors}
								required={{
									required: "L'email est requis",
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: "Adresse email invalide",
									},
								}}
							/>
							{errors.email && <p className="error-message">{errors.email.message}</p>}
						</div>
						<div className="form-group">
							<Input
								id="password"
								type="password"
								placeholder="Mot de passe"
								disabled={isLoading}
								register={register}
								errors={errors}
								required={{
									required: "Le mot de passe est requis",
									minLength: {
										value: 8,
										message: "Le mot de passe doit contenir au moins 8 caractères",
									},
									pattern: {
										value: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/,
										message: "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial",
									},
								}}
							/>
							{errors.password && <p className="error-message">{errors.password.message}</p>}
						</div>
						<div className="form-group">
							<Input
								id="confirmPassword"
								type=" password"
								placeholder="Confirmer le mot de passe"
								disabled={isLoading}
								register={register}
								errors={errors}
								required={{
									required: "La confirmation du mot de passe est requise",
								}}
							/>
							{errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
						</div>

						<div className="form-group mb-0">
							<Button label="S'inscrire" disabled={isLoading} />
						</div>
					</form>
					<SocialButton />
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
