import React from 'react';

export const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-selest-navy text-selest-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Secure Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Do not wait until it is too late. Our team of security experts is ready to help you protect your digital assets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-white text-selest-navy px-8 py-3 rounded-lg font-semibold hover:selest-navy transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="#learn-more"
            className="inline-block border-2 border-white text-selest-navy px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}; 