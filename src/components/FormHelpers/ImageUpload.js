import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import {CloudinaryImage} from "@cloudinary/url-gen";
import {auto} from "@cloudinary/transformation-builder-sdk/actions/resize";


const uploadPreset = process.env.NEXT_CLOUDINARY_PRESET; // Assurez-vous que c'est NEXT_PUBLIC

const ImageUpload = ({ onChange, value }) => {
	const handleUpload = useCallback(
		(error, result) => {
			if (result.event === "success") {
				const secureUrl = result.info.secure_url; // Récupération correcte de secure_url
				console.log(secureUrl);
				if (secureUrl) {
					onChange(secureUrl);
				}
			}
		},
		[onChange]
	);

	return (
		<CldUploadWidget
			uploadPreset={uploadPreset}
			options={{ maxFiles: 1 }}
			showPoweredBy={false}
			onSuccess={(result) => {
				console.log("Image uploaded successfully:", result);
				if (result.info.secure_url) {
					onChange(result.info.secure_url)

				}
			}}
		>
			{({ open }) => {
				return (
					<>
						<div
							onClick={() => open?.()}
							className="img-thumbnail mb-3"
							style={{ cursor: "pointer" }}
						>
							<div className="text-center">Click to upload</div>
						</div>
						{value && (
							<div className="text-center position-relative mb-3">
								<Image
									src={value}
									alt="uploaded image"
									width={500}
									height={300} // Ajustez la hauteur si nécessaire
								/>
							</div>
						)}
					</>
				);
			}}
		</CldUploadWidget>
	);
};

export default ImageUpload;
