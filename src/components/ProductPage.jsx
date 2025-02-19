import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../assets/assets";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-center text-gray-700 py-10">Project not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation */}
        <button onClick={() => navigate("/explore")} className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image & Details */}
          <div className="md:col-span-2">
            <div className="relative h-[400px] md:h-[500px]">
              <img src={project.image} alt={project.title} className="w-full h-full object-contain rounded-t-2xl"
              />
            </div>

            <div className="p-6 space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>

              {/* Features Section */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Updates Section */}
              {project.updates.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Updates</h2>
                  <div className="space-y-4">
                    {project.updates.map((update, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <p className="text-sm text-gray-500 mb-1">{update.date}</p>
                        <p className="text-gray-700">{update.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Funding Sidebar */}
          <div className="bg-gray-50 rounded-xl p-6 sticky top-8 h-fit md:col-span-1">
            <div className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-800">
                    ${project.raised.toLocaleString()}
                  </span>
                  <span className="text-gray-500">of ${project.goal.toLocaleString()}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-1000"
                    style={{ width: `${(project.raised / project.goal) * 100}%` }}
                  />
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{project.backers}</p>
                  <p className="text-sm text-gray-600">Backers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{project.daysLeft}</p>
                  <p className="text-sm text-gray-600">Days Left</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{project.comments}</p>
                  <p className="text-sm text-gray-600">Comments</p>
                </div>
              </div>

              {/* Pledge Tiers */}
              <div className="space-y-4">
                {project.tiers.map((tier, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{tier.name}</h3>
                      <span className="text-blue-600 font-bold">${tier.amount}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Back this tier
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
