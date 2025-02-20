import React, { useState } from 'react';
import { Clock, Users } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('invested');

  const user = {
    profileImage: '/altrex_logo.png',
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Investor',
    joinedDate: 'January 2023',
    bio: 'Passionate about blockchain and AI-driven innovations.',
    skills: ['Blockchain', 'AI', 'Investment Analysis'],
    totalInvested: '$150,000',
    totalProjects: 5
  };

  const investedProjects = [
    {
      id: 1,
      title: 'Decentralized Art Platform',
      description: 'A blockchain-based platform for digital artists.',
      daysLeft: 12,
      backers: 120,
      raised: 50000,
      goal: 100000
    },
    {
      id: 2,
      title: 'AI-Powered Research Assistant',
      description: 'A tool to help researchers analyze papers efficiently.',
      daysLeft: 25,
      backers: 85,
      raised: 75000,
      goal: 150000
    }
  ];

  const createdProjects = [
    {
      id: 3,
      title: 'Smart Traffic Management System',
      description: 'AI-driven traffic management for urban areas.',
      daysLeft: 18,
      backers: 200,
      raised: 125000,
      goal: 200000
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 flex flex-col lg:flex-row gap-6">
      {/* User Profile Section */}
      <div className="w-full lg:w-1/3 bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-purple-500"
        />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-300">{user.email}</p>
          <p className="text-sm text-gray-400">Role: {user.role}</p>
          <p className="text-sm text-gray-400">Joined: {user.joinedDate}</p>
          <p className="text-sm text-gray-400 mt-2">{user.bio}</p>
          <div className="mt-3">
            <h3 className="text-lg text-left font-semibold">Skills</h3>
            <ul className="list-disc text-left list-inside text-gray-300">
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold text-green-400">Total Invested: {user.totalInvested}</p>
            <p className="text-lg font-semibold text-blue-400">Total Projects: {user.totalProjects}</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full lg:w-2/3">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('invested')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'invested' ? 'bg-purple-600' : 'bg-gray-700'
            }`}
          >
            Invested Projects
          </button>
          <button
            onClick={() => setActiveTab('created')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'created' ? 'bg-purple-600' : 'bg-gray-700'
            }`}
          >
            Created Projects
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {activeTab === 'invested' && investedProjects.length === 0 && (
            <p className="text-center text-gray-400">No invested projects yet.</p>
          )}
          {activeTab === 'created' && createdProjects.length === 0 && (
            <p className="text-center text-gray-400">No created projects yet.</p>
          )}

          {(activeTab === 'invested' ? investedProjects : createdProjects).map(
            (project) => (
              <AnimatedCard key={project.id} project={project} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;