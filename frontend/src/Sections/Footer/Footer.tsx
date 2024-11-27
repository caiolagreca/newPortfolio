// src/components/Footer.tsx

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import { SiLeetcode } from "react-icons/si"; // LeetCode icon
import { IconContext } from "react-icons";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-8">
			<div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-around">
				{/* Left Side - Social Icons */}
				<div className="flex space-x-6 mb-4 md:mb-0">
					<IconContext.Provider value={{ size: "1.5em" }}>
						<a
							href="https://www.linkedin.com/in/caio-lagreca/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-500 transition-colors duration-300"
							aria-label="LinkedIn"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://github.com/caiolagreca"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-500 transition-colors duration-300"
							aria-label="GitHub"
						>
							<FaGithub />
						</a>
						<a
							href="https://leetcode.com/u/caiolagreca/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-500 transition-colors duration-300"
							aria-label="LeetCode"
						>
							<SiLeetcode />
						</a>
					</IconContext.Provider>
				</div>

				{/* Right Side - Name and Year */}
				<div className="text-center md:text-right dark:text-gray-100">
					<p>&copy; {currentYear} Caio Miranda. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
