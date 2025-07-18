import React from 'react';
import { CheckCircle } from 'lucide-react';

const KeyBenefits = () => {
  const benefits = [
    {
      title: "Reduce Security Incidents",
      description: "Block 95% of vulnerable deployments before they reach production",
      metric: "95%"
    },
    {
      title: "Accelerate Development", 
      description: "Developers get instant feedback with actionable fix suggestions",
      metric: "3x"
    },
    {
      title: "Maintain Compliance",
      description: "Automated policy enforcement ensures consistent security standards", 
      metric: "100%"
    },
    {
      title: "Save Engineering Time",
      description: "Smart caching and incremental scanning minimize CI/CD overhead",
      metric: "60%"
    }
  ];

  return (
    <section className="relative py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/40 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-purple-950/10"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Measurable Impact</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Real outcomes that matter to your business and engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-full flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                    <span className="text-2xl font-bold text-green-400">{benefit.metric}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;