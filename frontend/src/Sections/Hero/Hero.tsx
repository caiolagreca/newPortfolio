import React from "react";

const Hero = () => {
	return (
		<section className="h-screen flex flex-col justify-center items-center bg-white text-center px-4 md:px-0">
			<div className="max-w-2xl">
				<h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
					Olá, eu sou Caio Lagreca
				</h1>
				<p className="text-lg md:text-xl text-gray-700 mb-8">
					Desenvolvedor Full-Stack focado em criar experiências digitais que são
					intuitivas, elegantes e eficientes.
				</p>
				<div>
					<a
						href="#projects"
						className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-200"
					>
						Ver Projetos
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
