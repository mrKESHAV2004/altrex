import logo from '/altrex_logo.png'

export const assets = {
  logo
}

export const projects = [
  {
    id: 1,
    title: "Eco-Friendly Water Bottle",
    image: "https://m.media-amazon.com/images/I/71S5Ob6DhBL._AC_UL320_.jpg",
    description: "Revolutionary water bottle made from biodegradable materials that helps reduce plastic waste while maintaining perfect temperature control. Our innovative design combines sustainability with cutting-edge technology.",
    goal: 4000000, // ₹40,00,000 (Approx. $50,000)
    raised: 2560000, // ₹25,60,000
    daysLeft: 15,
    backers: 324,
    comments: 89,
    currency: "Ethereum",
    features: [
      "100% biodegradable materials",
      "24-hour temperature retention",
      "Built-in water filter",
      "Smart temperature display",
      "Dishwasher safe"
    ],
    updates: [
      {
        date: "2025-02-15",
        content: "We've successfully completed the first production run of prototype bottles!"
      },
      {
        date: "2025-02-10",
        content: "New partnership secured with eco-friendly materials supplier."
      }
    ],
    tiers: [
      {
        name: "Early Bird",
        amount: 2900, // ₹2,900
        description: "Get one Eco-Friendly Water Bottle at 30% off retail price. Includes free shipping."
      },
      {
        name: "Double Pack",
        amount: 5400, // ₹5,400
        description: "Two bottles at an exclusive backer price. Save 35% off retail."
      },
      {
        name: "Family Pack",
        amount: 10000, // ₹10,000
        description: "Four bottles plus exclusive carrying case. Best value!"
      }
    ]
  },
  {
    id: 2,
    title: "Smart Home Security System",
    image: "https://rukminim2.flixcart.com/image/416/416/l4vnbm80/home-security-camera/u/a/e/3-bhr5003in-indoor-outdoor-security-camera-xiaomi-original-imagfzf2gvkeftwn.jpeg?q=70&crop=false",
    description: "An AI-powered home security system with facial recognition, real-time alerts, and remote access for enhanced home safety.",
    goal: 8000000, // ₹80,00,000
    raised: 5200000, // ₹52,00,000
    daysLeft: 20,
    backers: 765,
    comments: 124,
    currency: "Bitcoin",
    features: [
      "AI facial recognition",
      "Mobile app control",
      "Cloud storage integration",
      "Motion detection alerts",
      "24/7 monitoring support"
    ],
    updates: [
      {
        date: "2025-02-12",
        content: "Beta testing phase initiated with selected backers!"
      },
      {
        date: "2025-02-08",
        content: "Production for first batch has begun."
      }
    ],
    tiers: [
      {
        name: "Starter Pack",
        amount: 7500, // ₹7,500
        description: "One security camera with basic features and 6 months of free cloud storage."
      },
      {
        name: "Advanced Pack",
        amount: 14000, // ₹14,000
        description: "Two cameras with AI facial recognition and 12 months of free cloud storage."
      },
      {
        name: "Full Home Security Kit",
        amount: 25000, // ₹25,000
        description: "Four cameras, motion sensors, and premium cloud subscription for 2 years."
      }
    ]
  },
  {
    id: 3,
    title: "Solar-Powered Smartwatch",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTibd4p5kzyH3dUAU7-GVMsaE73RYKtf7zL6OlolY8dkfd2EwAOKRZphoXa3Mrx0vBNXD8maNPzMuDc-Uo9AOY0_a-IvPTjF8MCrjsOlHg-u9S_eI71zKOqH0JF",
    description: "A smartwatch powered by solar energy, featuring health tracking, GPS, and long battery life for outdoor enthusiasts.",
    goal: 6000000, // ₹60,00,000
    raised: 3100000, // ₹31,00,000
    daysLeft: 25,
    backers: 458,
    comments: 98,
    currency: "Solana",
    features: [
      "Solar charging technology",
      "Heart rate & fitness tracking",
      "Built-in GPS",
      "Water-resistant design",
      "Customizable watch faces"
    ],
    updates: [
      {
        date: "2025-02-14",
        content: "Prototype successfully tested in real-world conditions!"
      },
      {
        date: "2025-02-09",
        content: "Finalizing design adjustments based on user feedback."
      }
    ],
    tiers: [
      {
        name: "Basic Model",
        amount: 9000, // ₹9,000
        description: "Get the smartwatch at an exclusive early bird price."
      },
      {
        name: "Sports Edition",
        amount: 13000, // ₹13,000
        description: "Smartwatch with additional sports tracking features and premium straps."
      },
      {
        name: "Ultimate Bundle",
        amount: 20000, // ₹20,000
        description: "Smartwatch, wireless charging dock, and a 3-year extended warranty."
      }
    ]
  }
];
