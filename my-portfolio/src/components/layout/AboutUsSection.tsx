import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ABOUT US
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Orange underline */}
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Developing With a Passion While Exploring The World.
              </h3>
              <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 text-center leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <p className="text-gray-600 text-center leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <p className="text-gray-600 text-center leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <p className="text-gray-600 text-center leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contact me
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-80 h-96 bg-orange-500 rounded-3xl z-0"></div>
              
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <Image
                  src="/about-workspace.jpg" 
                  alt="Workspace with laptop and phone"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
