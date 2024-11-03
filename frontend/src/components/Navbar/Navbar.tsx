// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegFile, FaLaptopCode, FaMoon } from "react-icons/fa";
import { FiTool, FiPhone } from "react-icons/fi";
import { GrArticle } from "react-icons/gr";
import { IoMdSunny } from "react-icons/io";

interface MenuItem {
	href: string;
	icon: React.ReactNode;
	label: string;
}

const Navbar: React.FC = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [light, setLight] = useState<boolean>(true);

	// Função para controlar a cor do navbar ao rolar a página
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const menuItems: MenuItem[] = [
		{ href: "#home", icon: <IoHomeOutline size={24} />, label: "Home" },
		{ href: "#about", icon: <MdOutlinePersonPin size={24} />, label: "About" },
		{
			href: "#experience",
			icon: <BsSuitcaseLg size={24} />,
			label: "Experience",
		},
		{ href: "#projects", icon: <FaRegFile size={24} />, label: "Projects" },
		{ href: "#skills", icon: <FiTool size={24} />, label: "Skills" },
		{ href: "#articles", icon: <GrArticle size={24} />, label: "Articles" },
		{
			href: "#challenges",
			icon: <FaLaptopCode size={24} />,
			label: "LeetCode",
		},
		{ href: "#books", icon: <IoBookOutline size={24} />, label: "Books" },
		{ href: "#contact", icon: <FiPhone size={24} />, label: "Contact" },
	];

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Menu Desktop */}
					<div className="hidden md:flex space-x-8">
						<a href="#home" className="text-gray-800 hover:text-blue-600">
							<IoHomeOutline />
						</a>
						<a href="#about" className="text-gray-800 hover:text-blue-600">
							<MdOutlinePersonPin />
						</a>
						<a href="#experience" className="text-gray-800 hover:text-blue-600">
							<BsSuitcaseLg />
						</a>
						<a href="#projects" className="text-gray-800 hover:text-blue-600">
							<FaRegFile />
						</a>
						<a href="#skills" className="text-gray-800 hover:text-blue-600">
							<FiTool />
						</a>
						<a href="#articles" className="text-gray-800 hover:text-blue-600">
							<GrArticle />
						</a>
						<a href="#challenges" className="text-gray-800 hover:text-blue-600">
							<FaLaptopCode />
						</a>
						<a href="#books" className="text-gray-800 hover:text-blue-600">
							<IoBookOutline />
						</a>
						<a href="#contact" className="text-gray-800 hover:text-blue-600">
							<FiPhone />
						</a>
						<div>
							<button onClick={() => setLight(!light)}>
								{light ? <IoMdSunny /> : <FaMoon />}
							</button>
						</div>
					</div>
					{/* Botão Mobile */}
					<div className="md:hidden">
						<button
							onClick={() => setNavbarOpen(!navbarOpen)}
							className="text-gray-800 focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{navbarOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Menu Mobile */}
			{navbarOpen && (
				<div className="md:hidden transition-all duration-300">
					<a
						href="#home"
						className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
						onClick={() => setNavbarOpen(false)}
					>
						Início
					</a>
					<a
						href="#about"
						className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
						onClick={() => setNavbarOpen(false)}
					>
						Sobre
					</a>
					<a
						href="#projects"
						className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
						onClick={() => setNavbarOpen(false)}
					>
						Projetos
					</a>
					<a
						href="#contact"
						className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
						onClick={() => setNavbarOpen(false)}
					>
						Contato
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
