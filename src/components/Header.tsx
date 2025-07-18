import React from 'react';
import { Github, Terminal } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 border-b border-gray-800/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">ScanCo</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Github className="w-5 h-5 text-gray-300" />
            <a href="https://github.com/deep-poharkar/scanco" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full text-blue-300 hover:bg-blue-600/20 hover:border-blue-400/40 transition-all duration-300 flex items-center backdrop-blur-sm text-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;