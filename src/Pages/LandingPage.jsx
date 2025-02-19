import React from 'react';
import { Rocket, Star, Satellite, ArrowRight, Search, ShieldCheck, Bitcoin, Zap, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../assets/assets';
import AnimatedCard from '../components/AnimatedCard';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Hero Section with Animated Stars */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 h-screen">
        <div className="absolute inset-0">
          <div className="stars absolute inset-0 bg-repeat animate-twinkle"></div>
        </div>
        <div className="container flex mx-auto px-4 py-32 relative items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center space-x-2">
              <div className="flex items-center bg-white/5 backdrop-blur-lg px-6 py-2 rounded-full text-sm border border-white/10">
                <Rocket className="w-4 h-4 mr-2 animate-pulse" />
                Launch Your Dreams Into Orbit
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Cosmic Funding
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Powered by Blockchain
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Join the next frontier of crowdfunding. Your ideas, launched into the stratosphere
              of possibility through secure blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/25">
                <span className="flex items-center">
                  Launch Campaign <Rocket className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <Link to="/explore">
                <button className="group bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  <span className="flex items-center">
                    Explore Projects <Star className="ml-2 group-hover:rotate-12 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
              <Sparkles className="mr-2" /> Resources for Your Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Documentation</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Blockchain Integration Guide</li>
                  <li>• Smart Contract Templates</li>
                  <li>• API Documentation</li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Satellite className="text-pink-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Community</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Discord Server</li>
                  <li>• Developer Forum</li>
                  <li>• Weekly Webinars</li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Support</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• 24/7 Help Center</li>
                  <li>• Security Guidelines</li>
                  <li>• Compliance Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Campaigns with Space Theme */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Star className="mr-2" /> Featured Missions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* How It Works - Space Journey */}
      <div className="bg-white/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Your Journey to the Stars</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket />,
                title: "Prepare for Launch",
                description: "Set up your blockchain wallet and mission details"
              },
              {
                icon: <Globe />,
                title: "Reach Orbit",
                description: "Share your mission with crypto communities worldwide"
              },
              {
                icon: <Bitcoin />,
                title: "Collect Stardust",
                description: "Receive crypto donations directly to your wallet"
              },
              {
                icon: <Star />,
                title: "Mission Complete",
                description: "Smart contract ensures successful mission completion"
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(step.icon, { className: "text-purple-400", size: 28 })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Launch?</h2>
          <p className="text-xl mb-8 text-blue-100">
            The cosmos of crowdfunding awaits. Start your blockchain journey today!
          </p>
          <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/25">
            <span className="flex items-center">
              Begin Your Mission <Rocket className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .stars {
          background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
          background-size: 200px 200px;
        }

        @keyframes twinkle {
          from { transform: translateY(0); }
          to { transform: translateY(-100px); }
        }

        .animate-twinkle {
          animation: twinkle 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;