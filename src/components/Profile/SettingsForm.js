"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../FormHelpers/Input";
import Button from "../FormHelpers/Button";
import ImageUpload from "../FormHelpers/ImageUpload";

const SettingsForm = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
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
			name: currentUser.name || "",
			image: currentUser.image ? currentUser.image : "",
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
				toast.error("Something went wrong.");
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
					<form
						className="authentication"
						onSubmit={handleSubmit(onSubmit)}
					>
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
								onChange={(value) =>
									setCustomValue("image", value)
								}
								value={image}
							/>
						</div>
						<div className="form-group mb-0">
							<Button label="Update" disabled={isLoading} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SettingsForm;
