import React from "react";
import { MobileItem } from "../../Types/MobileItem";

const MobileNavbarItem: React.FC<MobileItem> = ({ item, setNavbarOpen }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const targetElement = document.getElementById(item.href.substring(1));
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
			setNavbarOpen(false);
		}
	};
	return (
		<a
			href={item.href}
			className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 w-full text-center"
			onClick={handleClick}
		>
			{item.label}
		</a>
	);
};

export default MobileNavbarItem;
