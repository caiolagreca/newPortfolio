// src/components/NavbarItem/NavbarItem.tsx

import React from "react";
import { Item } from "../../Types/Item";

interface INavBarItem {
	item: Item;
	updateLastScrollY: () => void;
}

const NavbarItem: React.FC<INavBarItem> = ({ item, updateLastScrollY }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const targetElement = document.getElementById(item.href.substring(1));
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
			updateLastScrollY();
		}
	};

	return (
		<div className="relative group">
			<a
				href={item.href}
				className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
				onClick={handleClick}
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
