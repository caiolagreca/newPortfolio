import React from "react";
import { Item } from "../../types/Item";

interface INavBarItem {
	item: Item;
}

const NavbarItem: React.FC<INavBarItem> = ({ item }) => {
	return (
		<div className="relative group">
			<a href={item.href} className="text-gray-800 hover:text-blue-600">
				{item.icon}
			</a>
			<div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 mt-2 px-2 py-1 bg-white text-gray-800 text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				{item.label}
			</div>
		</div>
	);
};

export default NavbarItem;
