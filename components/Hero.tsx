
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/1043/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Ganesh <span className="text-amber-400">Studio</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200 drop-shadow-md">
          Event Manager & Wedding / Event Filmers
        </p>
        <a
          href="#portfolio"
          className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
