import React from "react";

const About = () => {
	return (
		<section
			id="about"
			className="w-full min-h-screen flex items-center justify-center bg-gray-50"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:space-x-12">
				<div className="md:w-2/3 text-center md:text-left">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Hey, I’m Caio.
					</h2>
					<h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
						I’m an Innovative Fullstack and Mobile Developer with over 3 years
						of experience in building scalable and high-performance
						applications.
					</h3>
					<div className="w-20 h-0.5 bg-gray-300 mx-auto md:mx-0 mb-6"></div>{" "}
					<p className="text-lg leading-relaxed text-gray-600 text-justify">
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
						deliver exceptional software solutions. My skills in development
						applications are complemented by significant experience in improving
						app performance and user experience.
						<br />
						<br />
						When I’m not in front of a computer screen, I try to balance my
						passion for books, of all categories, or practice sports, such as
						triathlon and surf.
					</p>
				</div>
				<div className="md:w-1/3 flex justify-center items-center">
					<div className="w-80 h-80 md:w-90 md:h-96 rounded-full overflow-hidden shadow-lg">
						<img
							src="/photo.jpeg"
							alt="Caio"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
