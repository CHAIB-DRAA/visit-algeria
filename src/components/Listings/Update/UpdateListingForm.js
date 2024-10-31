'use client'
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const UpdateListingForm = ({ listing }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            title: listing.title,
            description: listing.description,
            imageSrc: listing.imageSrc,
            address: listing.address,
            features: listing.features,
            category: listing.category,
            location: listing.location,
            price: listing.price,
        },
    });
    const router = useRouter();

    const onSubmit = (data) => {
        axios.put(`/api/listings/${listing.id}`, data)
            .then(() => {
                toast.success("Listing updated!");
                router.push(`/listing/${listing.id}/${listing.slug}`); // Redirection après la mise à jour
            })
            .catch(() => {
                toast.error("Failed to update listing.");
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title</label>
                <input type="text" {...register("title", { required: true })} />
                {errors.title && <span>This field is required</span>}
            </div>
            {/* Ajouter les autres champs du formulaire ici */}
            <button type="submit">Update Listing</button>
        </form>
    );
};

export default UpdateListingForm;
