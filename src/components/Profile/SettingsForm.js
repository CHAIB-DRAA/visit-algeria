"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../FormHelpers/Input";
import Button from "../FormHelpers/Button";
import ImageUpload from "../FormHelpers/ImageUpload";

const SettingsForm = ({ currentUser  }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const router = useRouter();

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	const {
		register,
		handleSubmit,
		setError,
		watch,
		setValue,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			name: currentUser .name || "",
			image: currentUser .image ? currentUser .image : "",
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	});

	const image = watch("image");

	const onSubmit = (data) => {
		setIsLoading(true);
		axios
			.post("/api/profile/settings", data)
			.then((response) => {
				toast.success("Profile Updated");
				router.refresh();
			})
			.catch((error) => {
				toast.error(error.response?.data?.message || "Something went wrong.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const onChangePassword = (data) => {
		setIsLoading(true);
		if (data.newPassword !== data.confirmPassword) {
			setError("confirmPassword", {
				type: "manual",
				message: "Les mots de passe ne correspondent pas",
			});
			setIsLoading(false);
			return;
		}

		const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
		if (!passwordPattern.test(data.newPassword)) {
			setError("newPassword", {
				type: "manual",
				message: "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.",
			});
			setIsLoading(false);
			return;
		}

		axios
			.post("/api/profile/change-password", {
				oldPassword: data.oldPassword,
				newPassword: data.newPassword,
			})
			.then((response) => {
				toast.success("Password Updated");
				reset({
					oldPassword: "",
					newPassword: "",
					confirmPassword: "",
				});
			})
			.catch((error) => {
				toast.error(error.response?.data?.message || "Something went wrong.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="authentication-area ptb-100 bg-color-fff5e1">
			<div className="container">
				<div className="authentication-content">
					<h3>Update Profile</h3>
					<form className="authentication" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<Input
								id="name"
								placeholder="Name"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>

						<div className="form-group">
							<ImageUpload
								onChange={(value) => setCustomValue("image", value)}
								value={image}
							/>
						</div>
						<div className="form-group mb-0">
							<Button label="Update" disabled={isLoading} />
						</div>
					</form>
					<h3>Changer le mot de passe</h3>
					<form className="authentication" onSubmit={handleSubmit(onChangePassword)}>
						<div className="form-group">
							<Input
								id="oldPassword"
								placeholder="Mot de passe actuel"
								type={showOldPassword ? "text" : "password"}
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
							<button type="button" onClick={() => setShowOldPassword(!showOldPassword)}>
								{showOldPassword ? "Cacher" : "Voir"}
							</button>
						</div>
						<div className="form-group">
							<Input
								id="newPassword"
								placeholder="Nouveau mot de passe"
								type={showNewPassword ? "text" : "password"}
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
							<button type="button" onClick={() => setShowNewPassword(!showNewPassword)}>
								{showNewPassword ? "Cacher" : "Voir"}
							</button>
						</div>
						<div className="form-group">
							<Input
								id="confirmPassword"
								placeholder="Confirmer le mot de passe"
								type={showConfirmPassword ? "text" : "password"}
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
							<button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
								{showConfirmPassword ? "Cacher" : "Voir"}
							</button>
							{errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
						</div>
						<div className="form-group mb-0">
							<Button label="Change Password" disabled={isLoading} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SettingsForm;
