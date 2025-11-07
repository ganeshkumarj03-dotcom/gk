
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-400 mb-2">About Us</h2>
            <p className="text-lg text-gray-400 italic">SRI AMMACHAR AMMAN THUNAI</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/225/800/600" 
              alt="Ganesh Studio Team" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-300">
            <h3 className="text-3xl font-semibold mb-4 text-white">Capturing Moments, Creating Memories</h3>
            <p className="mb-4">
              Ganesh Studio is a passionate team of creative professionals dedicated to preserving your most precious moments. With years of experience in event management and film-making, we bring a unique blend of artistry and professionalism to every project.
            </p>
            <p className="mb-6">
              Based in Chennai & Gingee, we specialize in a wide range of events, ensuring that the essence of your celebration is captured beautifully. Our goal is to tell your story through stunning visuals that you can cherish for a lifetime.
            </p>
            <div className="border-l-4 border-amber-400 pl-4">
              <p className="font-semibold text-white">M. JAYAKUMAR & J. DHINESHKUMAR</p>
              <p className="text-gray-400">Founders & Lead Creatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
