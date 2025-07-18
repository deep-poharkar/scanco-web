import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const commands = [
    './scanco nginx:latest',
    './scanco webhook --cert-file cert.pem --key-file key.pem --policy policy.yaml',
    './scanco --min-cvss 7.0 node:latest',
    './scanco --policy policy.yaml postgres:latest',
    './scanco --api-key YOUR_API_KEY nginx:latest'
  ];

  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentCommand = commands[currentCommandIndex];
    let charIndex = 0;

    const typeCommand = () => {
      if (charIndex < currentCommand.length) {
        setDisplayedText(currentCommand.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeCommand, 80);
      } else {
        // Wait 2.5 seconds then start next command
        setTimeout(() => {
          setDisplayedText('');
          setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
        }, 2500);
      }
    };

    typeCommand();
  }, [currentCommandIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-16">
      <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800/60 border-b border-gray-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm">scanco@v1.0.0</span>
          <span className="text-gray-500 text-sm">terminal</span>
        </div>
        
        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm">
          <div className="mb-2 text-gray-400"># Scan any container image</div>
          <div className="flex items-center">
            <span className="text-green-400">scan@security</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">/usr/scanco</span>
            <span className="text-gray-400">$ </span>
            <span className="text-white">{displayedText}</span>
            <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}>█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;