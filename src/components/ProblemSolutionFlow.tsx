import React from 'react';
import { AlertTriangle, Shield, CheckCircle, Zap, ArrowRight } from 'lucide-react';

const ProblemSolutionFlow = () => {
  const steps = [
    {
      number: "01",
      title: "Scan",
      description: "Analyze container layers for vulnerabilities across all major distros",
      icon: <Shield className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "Enforce",
      description: "Apply intelligent policies that learn from your environment",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Protect", 
      description: "Block insecure deployments at the Kubernetes admission layer",
      icon: <Shield className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Improve",
      description: "Get actionable remediation with context-aware suggestions", 
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="relative py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/5 via-transparent to-purple-950/5"></div>
      
      <div className="relative container mx-auto px-6">
        {/* The Challenge */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vulnerable containers slip through CI/CD pipelines, security policies are inconsistent across environments, and manual scanning creates bottlenecks.
          </p>
        </div>

        {/* How We Solve It - Flowchart */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">How We Solve It</h2>
          
          {/* Desktop Flowchart */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-blue-400" />
                      </div>
                    )}
                    
                    {/* Step Card */}
                    <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 h-full">
                      {/* Step Circle */}
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 mx-auto">
                        {step.icon}
                      </div>
                      
                      {/* Step Number */}
                      <div className="text-sm font-mono text-blue-400 mb-2">{step.number}</div>
                      
                      {/* Step Title */}
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      
                      {/* Step Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Flowchart */}
          <div className="lg:hidden max-w-md mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/30 to-blue-500/10"></div>
                    </div>
                  )}
                  
                  {/* Step Card */}
                  <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      {/* Step Circle */}
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex-shrink-0">
                        {step.icon}
                      </div>
                      
                      <div className="flex-1">
                        {/* Step Number and Title */}
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-mono text-blue-400">{step.number}</span>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                        
                        {/* Step Description */}
                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionFlow;