import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle, Send } from 'lucide-react';

const HelpPage = () => {
  const [openQuestions, setOpenQuestions] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What is blockchain crowdfunding?",
          a: "Blockchain crowdfunding is a decentralized way to raise funds for projects using cryptocurrency. It offers transparency, security, and direct peer-to-peer transactions without traditional intermediaries."
        },
        {
          q: "How do I create my first campaign?",
          a: "To create a campaign, connect your crypto wallet, click 'Launch Campaign', fill in your project details including funding goal, timeline, and rewards. Then submit for review and launch."
        },
        {
          q: "What cryptocurrencies are supported?",
          a: "We currently support multiple cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Solana (SOL), and Cardano (ADA)."
        },
        {
          q: "What information do I need to start a campaign?",
          a: "You'll need: A connected crypto wallet, project description, funding goal, campaign duration, project images/media, reward tiers details, and your social media/website links for verification."
        }
      ]
    },
    {
      title: "Funding & Investments",
      questions: [
        {
          q: "How are funds secured?",
          a: "All funds are secured through smart contracts on the blockchain. Funds are held in escrow until project milestones are met, ensuring safety for both creators and backers."
        },
        {
          q: "What are the fees involved?",
          a: "Our platform charges a 5% fee on successfully funded projects. Additionally, there are standard blockchain network fees (gas fees) that vary by network."
        },
        {
          q: "How do refunds work?",
          a: "If a project doesn't meet its funding goal, smart contracts automatically refund all contributors. For funded projects, refund policies are set by project creators."
        },
        {
          q: "What happens if a project doesn't reach its funding goal?",
          a: "We use an 'all-or-nothing' funding model. If a project doesn't reach its goal by the deadline, all funds are automatically returned to backers through the smart contract, with no fees charged."
        },
        {
          q: "Can I invest from any country?",
          a: "Yes, our platform is globally accessible. However, you're responsible for ensuring compliance with your local regulations regarding cryptocurrency investments and crowdfunding."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          q: "How do I connect my wallet?",
          a: "Click the 'Connect Wallet' button in the top right corner. We support MetaMask, WalletConnect, and other major Web3 wallets. Follow the prompts to complete connection."
        },
        {
          q: "What if I lose access to my wallet?",
          a: "Always keep your seed phrase secure. If you lose wallet access, you'll need to restore your wallet using your seed phrase. We cannot recover lost wallet access."
        },
        {
          q: "How do I track my investments?",
          a: "All investments can be tracked in your dashboard. You can view transaction history, current project status, and rewards details. All transactions are also visible on the blockchain."
        },
        {
          q: "What should I do if a transaction fails?",
          a: "First, check if you have sufficient funds including gas fees. If the issue persists, verify the network status and your wallet connection. You can view failed transaction details in your wallet or blockchain explorer."
        }
      ]
    },
    {
      title: "Safety & Security",
      questions: [
        {
          q: "How do you verify project creators?",
          a: "We implement a thorough KYC (Know Your Customer) process for all project creators. This includes identity verification, social media verification, and project documentation review."
        },
        {
          q: "Are smart contracts audited?",
          a: "Yes, all our smart contracts undergo regular audits by reputable blockchain security firms. Audit reports are publicly available on our platform."
        },
        {
          q: "What security measures are in place?",
          a: "We employ multiple security layers including smart contract audits, creator verification, 2FA authentication, and automated fraud detection systems. All transactions are immutably recorded on the blockchain."
        }
      ]
    }
  ];

  const toggleQuestion = (sectionIndex, questionIndex) => {
    const key = `${sectionIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="text-center pt-16 pb-12 px-4">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Help Center
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Get answers to your questions about blockchain crowdfunding and find the support you need
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="text-purple-400" />
              <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            </div>

            {faqSections.map((section, sIndex) => (
              <div key={sIndex}>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((item, qIndex) => (
                    <div 
                      key={qIndex}
                      className="bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50"
                    >
                      <button
                        className="w-full px-6 py-4 flex justify-between items-center"
                        onClick={() => toggleQuestion(sIndex, qIndex)}
                      >
                        <span className="text-left font-medium text-purple-200">{item.q}</span>
                        {openQuestions[`${sIndex}-${qIndex}`] ? (
                          <Minus className="text-purple-400 flex-shrink-0" />
                        ) : (
                          <Plus className="text-purple-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openQuestions[`${sIndex}-${qIndex}`] && (
                        <div className="px-6 pb-4 text-gray-300">
                          {item.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 p-6 h-fit lg:sticky lg:top-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="text-purple-400" />
              <h2 className="text-2xl font-semibold">Contact Support</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="technical">Technical Issue</option>
                  <option value="wallet">Wallet Connection</option>
                  <option value="funds">Funds & Payments</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;