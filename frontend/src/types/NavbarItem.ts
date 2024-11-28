import { Item } from "./Item";

export type NavBarItem = {
	item: Item;
	updateLastScrollY: () => void;
};
