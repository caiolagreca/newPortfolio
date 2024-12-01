import React from "react";
import { NavBarItem } from "../../Types/NavbarItem";
import { scrollToElement } from "../../Utils/scrollToElement";

const NavbarItem: React.FC<NavBarItem> = ({ item }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		scrollToElement(item.href);
	};

	return (
		<div className="relative group">
			<a
				href={item.href}
				onClick={handleClick}
				className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
			>
				{item.icon}
			</a>
			<div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 mt-2 px-2 py-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				{item.label}
			</div>
		</div>
	);
};

export default NavbarItem;
