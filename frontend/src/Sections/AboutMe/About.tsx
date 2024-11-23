import React from "react";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section
			id="about"
			className="py-20 bg-white text-black dark:bg-gray-900 dark:text-white"
		>
			<div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
				{/* Conteúdo de Texto */}
				<motion.div
					className="md:w-2/3"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Hey, I’m Caio.
					</h2>
					<h3 className="text-lg font-medium text-gray-600 mb-6 text-justify">
						I’m an Innovative Fullstack and Mobile Developer with over 3 years
						of experience in building scalable and high-performance
						applications.
					</h3>
					<div className="w-20 h-1 bg-indigo-500 mb-6"></div>
					<p className="text-sm leading-relaxed text-gray-700 text-justify">
						In my last year as a Master’s student in Advanced Information
						Technology, I’m actively enhancing my skills in Cybersecurity and
						Cloud Computing, while continuously improving my proficiency in .NET
						and TypeScript. Alongside my studies, I write articles on these
						topics, sharing insights and reinforcing my learning.
						<br />
						<br />
						I get excited about opportunities where I can leverage my expertise
						in both frontend and backend development, particularly in
						environments that demand teamwork and innovative thinking, to
						deliver exceptional software solutions. My skills in developing
						applications are complemented by significant experience in improving
						app performance and user experience.
						<br />
						<br />
						When I’m not in front of a computer screen, I try to balance my
						passion for books and sports such as
						triathlon and surfing.
					</p>
				</motion.div>
				{/* Imagem */}
				<motion.div
					className="md:w-1/3 flex justify-center items-center"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="relative w-80 h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
						<img
							src="/photo.jpeg"
							alt="Caio"
							className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
