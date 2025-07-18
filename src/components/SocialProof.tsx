import React from 'react';
import { Star, Download, Users } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="relative py-16">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/20 to-black"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Trusted by platform teams at:</h2>
          <p className="text-gray-400">Join the growing community securing containers worldwide</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {/* GitHub Stars */}
          <div className="flex items-center space-x-3 bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-lg px-6 py-3">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">2.1k</span>
            <span className="text-gray-400">GitHub Stars</span>
          </div>

          {/* Docker Pulls */}
          <div className="flex items-center space-x-3 bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-lg px-6 py-3">
            <Download className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold">50k+</span>
            <span className="text-gray-400">Docker Pulls</span>
          </div>

          {/* Contributors */}
          <div className="flex items-center space-x-3 bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-lg px-6 py-3">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">45</span>
            <span className="text-gray-400">Contributors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;