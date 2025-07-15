"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I'm Available for Freelance Projects
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Feel free to initiate a project and let's explore how we can collaborate.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              LET'S CONNECT
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('your-email@example.com');
                alert('Email copied to clipboard!');
              }}
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              COPY EMAIL
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
            >
              About us
            </Link>
            <Link 
              href="/portfolio" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;