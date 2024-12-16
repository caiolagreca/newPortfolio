import { Item } from "./Item";

export type MobileItem = {
	item: Item;
	setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
