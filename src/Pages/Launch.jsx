import React, { useState } from "react";
import {Rocket} from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Launch Your Campaign</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="title">Campaign Title</label>
            <input type="text" id="title" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-500" placeholder="Enter campaign title" required />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="description">Description</label>
            <textarea id="description" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-500" placeholder="Describe your campaign" rows="4" required ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="goal">Funding Goal ($)</label>
            <input type="number" id="goal" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-500" placeholder="Enter funding goal" required />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="image">Upload Image</label>
            <input type="file" id="image" accept="image/*" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded" onChange={handleImageChange} />
            {image && <img src={image} alt="Campaign Preview" className="mt-4 w-full h-40 object-cover rounded" />}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="crypto">Select Cryptocurrency</label>
            <select id="crypto" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-500" required >
              <option value="bitcoin">Bitcoin (BTC)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="bnb">Binance Coin (BNB)</option>
              <option value="solana">Solana (SOL)</option>
              <option value="cardano">Cardano (ADA)</option>
            </select>
          </div>
          
          <div className="flex justify-center">
          <button type="submit" className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/25">
            <span className="flex items-center">
              Launch Campaign <Rocket className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;
