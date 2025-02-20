import React, { useState } from 'react';
import { projects } from '../assets/assets';
import AnimatedCard from '../components/AnimatedCard';


const CrowdfundingPlatform = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-200 mb-4">Discover Innovation</h1>
        <p className="text-xl text-gray-600">Fund the next big idea</p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <AnimatedCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrowdfundingPlatform;
