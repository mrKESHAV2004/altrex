import React, { useState } from "react";

const CampaignForm = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-6">
      <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-7xl border border-gray-700/50">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Launch Your Campaign</h2>
        
        <form className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="title">Campaign Title</label>
              <input type="text" id="title" className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Enter campaign title" required />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="description">Description</label>
              <textarea id="description" className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Describe your campaign" rows="4" required ></textarea>
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="goal">Funding Goal ($)</label>
              <input type="number" id="goal" className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Enter funding goal" required />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="image">Upload Image</label>
              <div className="relative">
                <input type="file" id="image" accept="image/*" className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-400" onChange={handleImageChange} />
              </div>
              {image && (
                <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                  <img src={image} alt="Campaign Preview" className="w-full h-48 object-cover" />
                </div>
              )}
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="crypto">Select Cryptocurrency</label>
              <select id="crypto" className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200" required>
                <option value="bitcoin">Bitcoin (BTC)</option>
                <option value="ethereum">Ethereum (ETH)</option>
                <option value="bnb">Binance Coin (BNB)</option>
                <option value="solana">Solana (SOL)</option>
                <option value="cardano">Cardano (ADA)</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Special Rewards</h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50">
                <label className="block mb-3 font-medium text-purple-300">Starter Pack</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input type="number" className="flex-1 p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Investment amount" required />
                  <input type="text" className="flex-1 p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Reward description" required />
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50">
                <label className="block mb-3 font-medium text-blue-300">Advanced Pack</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input type="number" className="flex-1 p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Investment amount" />
                  <input type="text" className="flex-1 p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Reward description" />
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50">
                <label className="block mb-3 font-medium text-indigo-300">Premium Pack</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input type="number" className="flex-1 p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Investment amount" />
                  <input type="text" className="flex-1 p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400" placeholder="Reward description" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98]">
              Launch Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;