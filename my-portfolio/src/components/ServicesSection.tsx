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

const ServicesSection = () => {
  // Step 1: Define your services data
  const services = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "I create responsive, modern websites using the latest technologies. From simple landing pages to complex web applications.",
      additionalInfo: "Specializing in React, Next.js, and modern JavaScript frameworks."
    },
    {
      id: 2,
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Interactive and dynamic user interfaces built with modern frameworks and smooth animations.",
      additionalInfo: "Advanced skills in React, Vue.js, Angular, and modern CSS frameworks."
    },
    {
      id: 3,
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions and API development for scalable backend systems.",
      additionalInfo: "Experience with Node.js, Python, PostgreSQL, and cloud services."
    },
    {
      id: 4,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment processing and inventory management.",
      additionalInfo: "Shopify, WooCommerce, and custom e-commerce platforms."
    }
  ];

  return (
    // main section container
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* the header section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Services I'm Providing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            I offer comprehensive digital solutions to help businesses thrive in the modern world
          </p>
          {/* Decorative orange line */}
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>
        </div>

        {/* services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-orange-200"
            >
              {/* icon container */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* The content */}
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

              {/*"Learn More" button */}
              <div className="flex items-center text-orange-600 font-semibold cursor-pointer group-hover:text-orange-700 transition-colors">
                <span className="mr-2">Learn More</span>
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 flex items-center justify-center group-hover:border-orange-700 group-hover:bg-orange-600 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;