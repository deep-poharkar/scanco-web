import React from 'react';
import { Code, Shield, Settings } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      title: "For DevOps Teams",
      icon: <Code className="w-8 h-8" />,
      benefits: [
        "Integrate security scanning into existing CI/CD pipelines",
        "Automate policy enforcement across dev/staging/prod environments", 
        "Reduce false positives with contextual vulnerability analysis"
      ]
    },
    {
      title: "For Security Teams",
      icon: <Shield className="w-8 h-8" />,
      benefits: [
        "Centralized policy management with inheritance and overrides",
        "Real-time blocking of policy violations in Kubernetes",
        "Comprehensive audit trails and compliance reporting"
      ]
    },
    {
      title: "For Platform Engineers", 
      icon: <Settings className="w-8 h-8" />,
      benefits: [
        "Lightweight admission controller with minimal cluster overhead",
        "Extensible architecture for custom vulnerability sources",
        "Performance-optimized scanning with intelligent caching"
      ]
    }
  ];

  return (
    <section className="relative py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/30 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/5 via-transparent to-blue-950/5"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Every Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            ScanCo adapts to your workflow, whether you're shipping code, securing infrastructure, or managing platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{useCase.title}</h3>
              <ul className="space-y-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;