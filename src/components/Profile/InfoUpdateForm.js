"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../FormHelpers/Input";
import Button from "../FormHelpers/Button";

const InfoUpdateForm = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			bio: currentUser && currentUser.bio ? currentUser.bio : "",
			gender: currentUser && currentUser.gender ? currentUser.gender : "",
			address:
				currentUser && currentUser.address ? currentUser.address : "",
			phone: currentUser && currentUser.phone ? currentUser.phone : "",
			website:
				currentUser && currentUser.website ? currentUser.website : "",
			twitter:
				currentUser && currentUser.twitter ? currentUser.twitter : "",
			facebook:
				currentUser && currentUser.facebook ? currentUser.facebook : "",
			linkedin:
				currentUser && currentUser.linkedin ? currentUser.linkedin : "",
			youtube:
				currentUser && currentUser.youtube ? currentUser.youtube : "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		axios
			.post("/api/profile/info", data)
			.then((response) => {
				toast.success("Information updated!");
				router.refresh();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="authentication-area ptb-100 bg-color-fff5e1">
			<div className="container">
				<div className="authentication-content">
					<h3>Update Info</h3>
					<form
						className="authentication"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="form-group">
							<Input
								id="bio"
								placeholder="Bio"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className="form-group">
							<Input
								id="gender"
								placeholder="Gender"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className="form-group">
							<Input
								id="address"
								placeholder="Address"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className="form-group">
							<Input
								id="phone"
								placeholder="Phone"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className="form-group">
							<Input
								id="website"
								placeholder="Website"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="form-group">
							<Input
								id="twitter"
								placeholder="Twitter"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="form-group">
							<Input
								id="facebook"
								placeholder="Facebook"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="form-group">
							<Input
								id="linkedin"
								placeholder="Linkedin"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="form-group">
							<Input
								id="youtube"
								placeholder="Youtube"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="form-group mb-0">
							<Button
								label="Update My Info"
								disabled={isLoading}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default InfoUpdateForm;
