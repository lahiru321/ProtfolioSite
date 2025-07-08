import React from 'react';
import { Github, Instagram, Twitter, Send } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex justify-center items-center py-6 px-4">
        <div className="flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
            About us
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact us
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Social Icons */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white hover:bg-teal-800 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white hover:bg-teal-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white hover:bg-teal-800 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white hover:bg-teal-800 transition-colors">
                <Send size={20} />
              </a>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-teal-800 leading-tight">
                I'm Web Developer
                <br />
                <span className="text-teal-700">Natalie E. Watson</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar dapibus leo llcorper, 
                lorem ipsum.
              </p>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange decorative background */}
              <div className="absolute inset-0 bg-orange-500 rounded-full transform scale-110 -rotate-12"></div>
              <div className="absolute inset-0 bg-orange-400 rounded-full transform scale-105 rotate-6"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/profile-image.jpg" // You'll need to add this image to your public folder
                  alt="Natalie E. Watson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;