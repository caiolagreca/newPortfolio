import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6 md:px-0">
      <div className="max-w-3xl">
        {/* Nome em destaque com efeito de fade */}
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight mb-6 font-serif tracking-wide transition-all duration-500 ease-in-out">
          Caio Lagreca
        </h1>
        
        {/* Subtítulo com espaçamento e tom suave */}
        <p className="text-xl md:text-3xl text-gray-600 mb-12 tracking-[0.3em] uppercase">
          Software Developer
        </p>

        {/* Botão de contato com gradiente suave e efeito hover */}
        <div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
