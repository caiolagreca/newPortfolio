import React from "react";
import ThemeSwitch from "../../components/DayNightSwitch/ThemeSwitch";

const Hero = () => {
	const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="home"
			className="relative h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800 text-center px-6 md:px-0"
		>
			{/* Theme Switch positioned at the top right */}
			<div className="absolute top-4 right-4">
				<ThemeSwitch />
			</div>

			<div className="max-w-3xl">
				<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 font-serif tracking-wide">
					Caio Lagreca
				</h1>
				<p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 tracking-[0.3em] uppercase">
					Software Developer
				</p>
				<div>
					<a
						href="#contact"
						onClick={handleContactClick}
						className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-indigo-600 dark:text-indigo-400 transition duration-300 ease-out border-2 border-indigo-600 dark:border-indigo-400 rounded-full shadow-md group"
					>
						<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease">
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
						</span>
						<span className="absolute flex items-center justify-center w-full h-full text-indigo-600 transition-all duration-300 transform group-hover:translate-x-full ease">
							Contact Me
						</span>
						<span className="relative invisible">Contact Me</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
