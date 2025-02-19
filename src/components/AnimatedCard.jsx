import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, ChevronRight } from 'lucide-react';

const AnimatedCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBackProject = (e) => {
    e.preventDefault();
    navigate(`/product/${project.id}`);
  };

  const progressPercentage = (project.raised / project.goal) * 100;

  // Desktop Card Component
  const DesktopCard = () => (
    <div 
      className="relative w-[300px] h-[450px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-in hover:-translate-y-2 hover:shadow-xl">
        {/* Main Card Content */}
        <div className="absolute w-full h-full bg-white flex flex-col">
          {/* Image Container */}
          <div className="relative h-[200px] overflow-hidden">
            <div className="relative h-full w-full transform transition-transform duration-700 ease-in group-hover:scale-105">
              <img  src={project.image}  alt={project.title}  className="w-full h-full object-contain transition-transform duration-700 ease-in brightness-95 group-hover:brightness-100"  loading="lazy"
              />
            </div>
          </div>

          {/* Floating Info from Right */}
          <div className={`absolute top-4 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-l-full transition-all duration-700 ease-in
            ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
            shadow-sm flex flex-col items-end space-y-2
          `}>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                {project.daysLeft} days left
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">
                {project.backers} backers
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
            
            {/* Progress Section */}
            <div className="space-y-3 mb-4">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-1000 ease-in"
                  style={{ 
                    width: `${progressPercentage}%`,
                    transform: `scaleX(${isHovered ? 1 : 0.98})`,
                    transformOrigin: 'left center'
                  }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-gray-700">
                  ${project.raised.toLocaleString()}
                </span>
                <span className="text-gray-500">
                  of ${project.goal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Button - Now part of main content */}
            <div className="mt-auto">
              <button 
                onClick={handleBackProject}
                className="w-full bg-blue-600 text-white py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label={`Back project ${project.title}`}
              >
                Back this project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile Card Component
  const MobileCard = () => (
    <div  className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden h-[600px]" role="article"aria-label={`Project: ${project.title}`}>
      {/* Image and Progress Overlay */}
      <div className="relative h-80">
        <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-700 ease-in hover:scale-105" loading="lazy"/>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-1000 ease-in"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 flex flex-col h-[calc(600px-320px)]">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 flex-1">{project.title}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{project.daysLeft}d left</span>
          </div>
        </div>

        <p className="text-gray-600 text-base line-clamp-3">{project.description}</p>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-gray-800">
              ${project.raised.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              of ${project.goal.toLocaleString()}
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Users className="w-5 h-5" />
            <span className="text-lg font-semibold">{project.backers}</span>
          </div>
        </div>

        <button 
          onClick={handleBackProject}
          className="w-full bg-blue-600 text-white py-4 rounded-lg flex items-center justify-center space-x-2 active:scale-98 transition-all duration-300 ease-in hover:bg-blue-700 mt-auto"
        >
          <span className="text-lg">Back this project</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return isMobile ? <MobileCard /> : <DesktopCard />;
};

export default AnimatedCard;