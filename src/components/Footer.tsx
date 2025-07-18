import React from 'react';
import { Terminal, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-800/30">
      {/* Footer background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-purple-950/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px' 
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Terminal className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">ScanCo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Open-source vulnerability scanner and policy engine — aware, adaptive, and built for production.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/deep_poharkar" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/deep-poharkar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://github.com/deep-poharkar" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/deep-poharkar/scanco/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://github.com/deep-poharkar/scanco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Scanner CLI</a></li>
              <li><a href="mailto:deeppoharkar21@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/deep-poharkar/scanco/blob/master/README.md#features" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="https://github.com/deep-poharkar/scanco/blob/master/README.md#getting-started" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="https://github.com/deep-poharkar/scanco/blob/master/README.md#contributing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Contributing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800/30 mt-12 pt-8">
          <p className="text-gray-500 text-sm">2025 ScanCo.dev. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;