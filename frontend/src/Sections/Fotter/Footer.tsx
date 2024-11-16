// src/components/Footer.tsx

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import { SiLeetcode } from "react-icons/si"; // LeetCode icon
import { IconContext } from "react-icons";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-gray-300 py-8">
			<div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between">
				{/* Left Side - Social Icons */}
				<div className="flex space-x-6 mb-4 md:mb-0">
					<IconContext.Provider value={{ size: "1.5em" }}>
						<a
							href="https://www.linkedin.com/in/your-linkedin-username/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors duration-300"
							aria-label="LinkedIn"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://github.com/your-github-username"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors duration-300"
							aria-label="GitHub"
						>
							<FaGithub />
						</a>
						<a
							href="https://leetcode.com/your-leetcode-username/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors duration-300"
							aria-label="LeetCode"
						>
							<SiLeetcode />
						</a>
					</IconContext.Provider>
				</div>

				{/* Right Side - Name and Year */}
				<div className="text-center md:text-right">
					<p>&copy; {currentYear}  Caio Miranda. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
