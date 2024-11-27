import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const htmlElement = document.documentElement;
		const savedTheme = localStorage.getItem("theme");

		if (savedTheme === "dark") {
			htmlElement.classList.add("dark");
			setIsDarkMode(true);
		} else {
			htmlElement.classList.remove("dark");
			setIsDarkMode(false);
		}
	}, []);

	const handleToggle = () => {
		const htmlElement = document.documentElement;
		if (isDarkMode) {
			htmlElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		} else {
			htmlElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDarkMode(true);
		}
	};

	return (
		<div className="scale-75"> {/* Adjust scale here */}
			<label className="cursor-pointer inline-flex items-center relative">
				<input
					type="checkbox"
					className="hidden peer"
					checked={isDarkMode}
					onChange={handleToggle}
					aria-label="Toggle Theme"
				/>
				<div
					className={`relative w-[90px] h-[40px] bg-white peer-checked:bg-zinc-500 rounded-full transition-all duration-300 shadow-sm`}
				>
					<div
						className={`absolute w-[30px] h-[30px] bg-gradient-to-r from-orange-500 to-yellow-400 dark:from-gray-800 dark:to-gray-900 peer-checked:from-zinc-900 peer-checked:to-zinc-900 rounded-full top-[5px] left-[5px] peer-checked:left-[55px] transform transition-all duration-300 shadow-md ${
							isDarkMode ? "translate-x-10" : "translate-x-1"
						}`}
					></div>
				</div>
				{/* Sun Icon */}
				<svg
					height="0"
					width="100"
					viewBox="0 0 24 24"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-white peer-checked:opacity-60 absolute w-5 h-5 left-[10px]"
				>
					<path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
				</svg>
				{/* Moon Icon */}
				<svg
					height="512"
					width="512"
					viewBox="0 0 24 24"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-5 h-5 right-[10px]"
				>
					<path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
				</svg>
			</label>
		</div>
	);
};

export default ThemeSwitch;
