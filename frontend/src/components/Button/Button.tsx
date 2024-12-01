// src/components/Button/Button.tsx
import React from "react";
import { ButtonProps } from "../../Types/ButtonpROPS";


const Button: React.FC<ButtonProps> = ({ label, onClick, variant, icon }) => {
	return (
		<button
			onClick={onClick}
			className={`relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-indigo-600 dark:text-indigo-400 transition duration-300 ease-out border-2 rounded-full shadow-md group ${
				variant === "primary"
					? "border-indigo-600 dark:border-indigo-400"
					: "border-gray-800 dark:border-gray-200"
			}`}
			aria-label={label}
		>
			{icon && (
				<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease">
					{icon}
				</span>
			)}
			<span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
				{label}
			</span>
			<span className="relative invisible">{label}</span>
		</button>
	);
};

export default Button;
