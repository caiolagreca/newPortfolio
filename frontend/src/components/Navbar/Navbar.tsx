import React, { useEffect, useState } from "react";
import { menuItems } from "../../Utils/menuItems";
import NavbarItem from "../NavbarItem/NavbarItem";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavbarItem from "../MobileNavbarItem/MobileNavbarItem";

const Navbar: React.FC = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	const [showNavbar, setShowNavbar] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	const updateLastScrollY = () => {
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// When scrollY is 0 (top of the page), show navbar
			if (currentScrollY <= 0) {
				setShowNavbar(true);
			} else if (currentScrollY > lastScrollY) {
				// Scrolling down
				setShowNavbar(false);
			} else if (currentScrollY < lastScrollY) {
				// Scrolling up
				setShowNavbar(true);
			}
			setLastScrollY(currentScrollY);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			// Cleanup the event listener on component unmount
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<nav className="w-full">
			{/* Desktop Navbar */}
			<div
				className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-max items-center justify-center space-x-16 transition-all duration-500 ease-in-out z-50 ${
					showNavbar ? "opacity-100" : "opacity-0 -top-20"
				}`}
			>
				{menuItems.map((item) => (
					<NavbarItem
						key={item.label}
						item={item}
						updateLastScrollY={updateLastScrollY}
					/>
				))}
			</div>

			{/* Mobile Navbar Toggle Button */}
			<div className="absolute z-10 left-4 top-4 md:hidden ml-4 mt-2">
				<button
					onClick={() => {
						setNavbarOpen(!navbarOpen);
					}}
					className="text-gray-800 dark:text-gray-200 focus:outline-none"
					aria-label="Toggle mobile menu"
				>
					{navbarOpen ? (
						<AiOutlineClose className="h-6 w-6" />
					) : (
						<svg
							className="h-7 w-7"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile Navbar */}
			{navbarOpen && (
				<div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center pt-20">
					{menuItems.map((item) => (
						<MobileNavbarItem
							key={item.label}
							item={item}
							setNavbarOpen={setNavbarOpen}
						/>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
