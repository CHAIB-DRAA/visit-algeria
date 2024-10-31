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
			{label && <label>{label}</label>}
			<input
				id={id}
				{...register(id, { required })}
				placeholder={placeholder}
				type={type}
				className={`
                form-control
                ${errors[id] ? "is-invalid" : ""}
            `}
				disabled={disabled}
			/>
		</div>
	);
};

export default Input;
