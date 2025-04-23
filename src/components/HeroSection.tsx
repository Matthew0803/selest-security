import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Secure Your Digital Future
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto">
            Comprehensive security solutions to protect your business from modern threats
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 