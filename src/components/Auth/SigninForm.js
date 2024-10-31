"use client";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../FormHelpers/Input";
import Button from "../FormHelpers/Button";
import SocialButton from "../FormHelpers/SocialButton";

const SigninForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// Store the previous URL in local storage
	useEffect(() => {
		const previousUrl = localStorage.getItem("redirectUrl");
		if (previousUrl) {
			localStorage.removeItem("redirectUrl"); // Clear it after using
		}
	}, []);

	const onSubmit = async (data) => {
		setIsLoading(true);
		const callback = await signIn("credentials", {
			...data,
			redirect: false,
		});
		setIsLoading(false);

		if (!callback?.error) {
			toast.success("Logged in");
			const previousUrl = localStorage.getItem("redirectUrl") || "/";
			router.push(previousUrl); // Redirect to the previous URL or home
		} else {
			toast.error(callback.error);
		}
	};

	return (
		<div className="authentication-area ptb-100 bg-color-fff5e1">
			<div className="container">
				<div className="authentication-content">
					<h3>Login</h3>
					<form onSubmit={handleSubmit(onSubmit)} className="authentication">
						<div className="form-group">
							<Input
								id="email"
								type="email"
								placeholder="Email"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className="form-group">
							<Input
								id="password"
								type="password"
								placeholder="Password"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>

						<div className="form-group mb-0">
							<Button label="Login" disabled={isLoading} />
						</div>
					</form>
					<SocialButton />
				</div>
			</div>
		</div>
	);
};

export default SigninForm;
