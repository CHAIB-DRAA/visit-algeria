'use client'
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { toast } from "react-hot-toast";
import { useForm, useController, Controller } from "react-hook-form";
import Input from "@/components/FormHelpers/Input";
import ImageUpload from "@/components/FormHelpers/ImageUpload";
import CountrySelect from "@/components/FormHelpers/CountrySelect";
import { categories } from "@/libs/Categories";
import Button from "@/components/FormHelpers/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import RTEControls from "@/utils/RTEControls";

const ListingForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
  const test = () => {
  }
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		setError,
		formState: { errors },
		reset,
		control,
	} = useForm({
		defaultValues: {
			title: "",
			description: "",
			imageSrc: "", // L'URL de l'image Cloudinary sera ici
			address: "",
			features: "",
			category: "",
			location: null,
			price: 1,
		},
	});

	const {
		field: { value: catValue, onChange: catOnChange, ...restCategoryField },
	} = useController({ name: "category", control });

	const location = watch("location");
	const imageSrc = watch("imageSrc");

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
		console.log('value', imageSrc)
	};

	const onSubmit = (data) => {
		setIsLoading(true);
		axios
			.post("/api/listings/create", {
				...data,
				imageSrc: imageSrc, // Use the memoized imageSrc value
			})
			.then(() => {
				toast.success("Listing created!");
				router.refresh();
				reset(); // réinitialiser le formulaire après création
			})
			.catch((error) => {
				toast.error("Something went wrong.");
			})
			.finally(() => {
				setIsLoading(false);
			});
		console.log(data);

	};

	return (
		<div className="submit-property-area ptb-100">
			<div className="container">
				<form
					className="submit-property-form"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="row">
						<div className="col-lg-12">
							<Input
								label="Title"
								id="title"
								type="text"
								placeholder="Title"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>

						<div className="col-lg-12">
							<div className="form-group">
								<Controller
									name="description"
									control={control}
									defaultValue=""
									render={({ field }) => (
										<RichTextEditor
											controls={RTEControls}
											{...field}
											placeholder="Description"
										/>
									)}
								/>
							</div>
						</div>

						{/* Image Upload */}
						<div className="col-lg-12">
							<ImageUpload
								onChange={(value) => setCustomValue("imageSrc", value)}
								value={imageSrc}
							/>
						</div>

						{/* Afficher l'image téléchargée */}
						<div className="col-lg-12">
							{imageSrc && (
								<div className="text-center position-relative mb-3">
									<img src={imageSrc} alt="Uploaded" width="200" />
								</div>
							)}
						</div>

						<div className="col-lg-12">
							<CountrySelect
								value={location}
								onChange={(value) => setCustomValue("location", value)}
							/>
						</div>

						<div className="col-lg-12">
							<div className="form-group">
								<Select
									id="react-select-2-live-region"
									className="select-input"
									placeholder="Select Category"
									isClearable
									options={categories}
									value={
										catValue
											? categories.find((x) => x.value === catValue)
											: catValue
									}
									onChange={(option) => catOnChange(option ? option.value : option)}
									{...restCategoryField}
								/>
							</div>
						</div>

						<div className="col-lg-12">
							<Input
								label="Address"
								id="address"
								type="text"
								placeholder="Address"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>

						<div className="col-lg-12">
							<div className="form-group">
								<Controller
									name="features"
									control={control}
									defaultValue=""
									render={({ field }) => (
										<RichTextEditor
											controls={RTEControls}
											{...field}
										/>
									)}
								/>
							</div>
						</div>



						<div className="col-lg-12">
							<Input
								label="Price"
								id="price"
								type="number"
								placeholder="Features"
								disabled={isLoading}
								register={register}
								errors={errors}
								required
							/>
						</div>

						<Button disabled={isLoading} label={"Add Listing"} />
					</div>
				</form>
-			</div>
		</div>
	);
};

export default ListingForm;
