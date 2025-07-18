import React from 'react';
import Header from './components/Header';
import Terminal from './components/Terminal';
import ProblemSolutionFlow from './components/ProblemSolutionFlow';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import { ArrowRight, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Complex layered background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-purple-950/20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Subtle animated gradient overlay */}
      <div className="fixed inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <main className="container mx-auto px-6 pt-20 pb-24">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white">
              Secure Your Containers{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">
                with
              </span>{' '}
              Intelligence.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Open-source vulnerability scanner and policy engine — aware, adaptive, and built for production.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a className="group px-8 py-4 bg-black/60 border border-gray-700/50 rounded-full text-white hover:bg-black/80 hover:border-gray-600/50 transition-all duration-300 flex items-center backdrop-blur-sm">
                Contribute to our Scanner
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/deep-poharkar/scanco" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600/10 border border-blue-500/30 rounded-full text-blue-300 hover:bg-blue-600/20 hover:border-blue-400/40 transition-all duration-300 flex items-center backdrop-blur-sm">
                <Github className="mr-2 w-5 h-5" />
                Fork our Scanner
              </a>
            </div>
            
            <Terminal />
          </div>
        </main>

        {/* Problem-Solution Flow */}
        <ProblemSolutionFlow />

        {/* Use Cases Section */}
        <UseCases />

        {/* CTA Section */}
        <section className="relative">
          {/* CTA background with security theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-950/40 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>
          
          <div className="relative container mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to secure your container workflow?
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Join engineers who are already using ScanCo to protect their deployments.
            </p>
            <a href="https://github.com/deep-poharkar/scanco" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-transparent border border-gray-600/50 rounded-full text-white hover:border-gray-400/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              Get Started on GitHub
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;