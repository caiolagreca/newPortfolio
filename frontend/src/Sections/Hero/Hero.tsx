// src/components/Hero/Hero.tsx
import React from "react";
import { scrollToElement } from "../../Utils/scrollToElement";
import Button from "../../components/Button/Button";


const Hero: React.FC = () => {
	const handleContactClick = () => {
		scrollToElement("contact");
	};

	return (
		<section
			id="home"
			className="relative h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800 text-center px-6 md:px-0"
		>
			<div className="max-w-3xl">
				<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 font-serif tracking-wide">
					Caio Lagreca
				</h1>
				<p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 tracking-[0.3em] uppercase">
					Software Developer
				</p>
				<Button
					label="Contact Me"
					onClick={handleContactClick}
					variant="primary"
					icon={
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					}
				/>
			</div>
		</section>
	);
};

export default Hero;
