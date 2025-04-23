import React from 'react';

const services = [
  {
    title: 'Threat Detection',
    description: 'Advanced monitoring and detection systems to identify potential security threats in real-time.',
    icon: '🛡️'
  },
  {
    title: 'Vulnerability Assessment',
    description: 'Comprehensive analysis of your systems to identify and address security vulnerabilities.',
    icon: '🔍'
  },
  {
    title: 'Incident Response',
    description: 'Rapid response team ready to handle security incidents and minimize potential damage.',
    icon: '🚨'
  },
  {
    title: 'Security Training',
    description: 'Employee training programs to enhance security awareness and prevent human errors.',
    icon: '🎓'
  }
];

export const ServiceHighlights = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Security Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 