"use client";

import React from "react";

const Input = ({
				   id,
				   type = "text",
				   label,
				   placeholder,
				   disabled,
				   register,
				   required,
				   errors,
			   }) => {
	return (
		<div className="form-group">
			{label && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				{...register(id, { required })}
				placeholder={placeholder}
				type={type}
				className={`form-control ${errors && errors[id] ? "is-invalid" : ""}`}
				disabled={disabled}
			/>
			{/* Affiche le message d'erreur si présent */}
			{errors && errors[id] && (
				<div className="invalid-feedback">{errors[id].message}</div>
			)}
		</div>
	);
};

export default Input;
