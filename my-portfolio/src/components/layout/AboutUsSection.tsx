import Image from 'next/image';
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code, 
  Database, 
  ShoppingCart, 
  ArrowRight
} from 'lucide-react';

const AboutUsSection = () => {

  // Define your services data with component reference instead of JSX
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Web Development",
      description: "I create responsive, modern websites using the latest technologies. From simple landing pages to complex web applications.",
      additionalInfo: "Specializing in React, Next.js, and modern JavaScript frameworks."
    },
    {
      id: 2,
      icon: Code,
      title: "Frontend Development",
      description: "Interactive and dynamic user interfaces built with modern frameworks and smooth animations.",
      additionalInfo: "Advanced skills in React, Vue.js, Angular, and modern CSS frameworks."
    },
    {
      id: 3,
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and API development for scalable backend systems.",
      additionalInfo: "Experience with Node.js, Python, PostgreSQL, and cloud services."
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment processing and inventory management.",
      additionalInfo: "Shopify, WooCommerce, and custom e-commerce platforms."
    }
  ];

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

      {/* Services header */}
<div className="text-center mb-16 mt-50"> {/* Added top margin here */}
  <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
    What Services I'm Providing
  </h2>
  <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
    I offer comprehensive digital solutions to help businesses thrive in the modern world
  </p>
  <div className="flex justify-center">
    <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
  </div>
</div>

{/* Services grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-16">
  {services.map((service) => {
    const Icon = service.icon;
    return (
      <div
        key={service.id}
        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-orange-200"
      >
        {/* Icon container */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-8 h-8" />
          </div>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            {service.description}
          </p>
          <p className="text-sm text-slate-500 italic">
            {service.additionalInfo}
          </p>
        </div>

        {/* Learn More button */}
        <div className="flex items-center text-orange-600 font-semibold cursor-pointer group-hover:text-orange-700 transition-colors">
          <span className="mr-2">Learn More</span>
          <div className="w-8 h-8 rounded-full border-2 border-orange-600 flex items-center justify-center group-hover:border-orange-700 group-hover:bg-orange-600 transition-all duration-300">
            <ArrowRight className="w-4 h-4 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    );
  })}
</div>
    
  </section>
  );
};

export default AboutUsSection;
