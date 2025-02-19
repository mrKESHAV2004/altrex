import React, { useState, useEffect } from 'react';
import { Home, Users, Settings, HelpCircle, Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Dashboard', icon: Home, link:"/dashboard" },
    { title: 'Users', icon: Users,link:"/users" },
    { title: 'Settings', icon: Settings,link:"/settings" },
    { title: 'Help', icon: HelpCircle,link:"/help" },
  ];

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Sidebar
  const Sidebar = () => (
    <div  className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className={`fixed top-0 left-0 h-screen text-gray-300 transition-all duration-300 ease-in-out z-40 bg-black/50 backdrop-blur-sm ${
        isOpen ? 'w-64' : 'w-16'
      }`}>
        
        <Link to={'/'}>
          <div className="flex items-center px-4 py-3 cursor-pointer transition-colors">    
            <img src={assets.logo} alt="Logo" className={`transition-all duration-300 ${isOpen ? 'w-12 h-12' : 'w-12 h-12'}`}/>
            {isOpen && <span className="ml-4 text-xl">ALTREX</span>}
          </div>
        </Link>

        <nav className="mt-8">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} >
                <Link to={item.link} className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 transition-colors hover:text-white">
                  <Icon size={20} />
                  {isOpen && <span className="ml-4">{item.title}</span>}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );

  // Mobile Navbar
  const MobileNav = () => (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-200 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to={'/'}>
          <div className="flex items-center">
            <img src={assets.logo} alt="Logo" className="w-10 h-8" />
            <span className="ml-2 text-xl">ALTREX</span>
          </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-200 shadow-lg">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} onClick={() => setMobileMenuOpen(false)}>
                <Link to={item.link} className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 transition-colors hover:text-white">
                  <Icon size={20} />
                  <span className="ml-4">{item.title}</span>
                </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-14"></div>
    </div>
  );

  return isMobile ? <MobileNav /> : <Sidebar />;
};

export default ResponsiveNav;