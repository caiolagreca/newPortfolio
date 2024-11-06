import React from "react";
import { Item } from "../../types/Item";

interface IMobileItem {
	item: Item;
	setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNavbarItem: React.FC<IMobileItem> = ({
	item,
	setNavbarOpen,
}) => {
	return (
		<a
			href={item.href}
			className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-center"
			onClick={() => setNavbarOpen(false)}
		>
			{item.label}
		</a>
	);
};
