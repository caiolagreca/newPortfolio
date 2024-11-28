import { MdOutlinePersonPin } from "react-icons/md";
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";
import { Item } from "../Types/Item";
import { FiTool } from "react-icons/fi";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaLaptopCode, FaRegFile } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";

export const menuItems: Item[] = [
	{ href: "#home", icon: <IoHomeOutline size={20} />, label: "Home" },
	{ href: "#about", icon: <MdOutlinePersonPin size={20} />, label: "About" },
	{ href: "#skills", icon: <FiTool size={20} />, label: "Skills" },
	{
		href: "#experience",
		icon: <BsSuitcaseLg size={20} />,
		label: "Experience",
	},
	{ href: "#projects", icon: <FaRegFile size={20} />, label: "Projects" },

	{ href: "#articles", icon: <GrArticle size={20} />, label: "Articles" },
	{ href: "#challenges", icon: <FaLaptopCode size={20} />, label: "LeetCode" },
	{ href: "#books", icon: <IoBookOutline size={20} />, label: "Books" },
];
