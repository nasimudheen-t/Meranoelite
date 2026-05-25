import {
  Lightbulb,
  Zap,
  Home,
  Building,
  Wrench,
  Sun,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export const COMPANY_STATS = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Installations", value: 5000, suffix: "+" },
  { label: "Commercial Projects", value: 100, suffix: "+" },
  { label: "Energy Efficiency", value: 98, suffix: "%" },
];

export const SERVICES = [
  {
    title: "Smart LED Bulbs",
    description: "App-controlled color-changing and dimmable smart bulbs for everyday use.",
    icon: Lightbulb,
  },
  {
    title: "Commercial Lighting",
    description: "High-efficiency panel lights and troffers for modern office spaces.",
    icon: Building,
  },
  {
    title: "Smart Home Integration",
    description: "Seamless integration with voice assistants and automated routines.",
    icon: Home,
  },
  {
    title: "Industrial Lighting",
    description: "Durable high-bay LED fixtures for warehouses and factories.",
    icon: Wrench,
  },
  {
    title: "Decorative Lights",
    description: "Premium aesthetic lighting fixtures for luxury interiors.",
    icon: Sun,
  },
  {
    title: "Outdoor & Flood Lights",
    description: "Weather-resistant powerful illumination for exteriors and facades.",
    icon: ShieldCheck,
  },
  {
    title: "Energy Management",
    description: "Intelligent systems to monitor and optimize your power consumption.",
    icon: Zap,
  },
  {
    title: "Custom IoT Solutions",
    description: "Tailored lighting networks with advanced sensor-based automation.",
    icon: Cpu,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Neon Nexus Workspace",
    category: "Smart Office",
    location: "Dubai Silicon Oasis",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Aura Luxury Villa",
    category: "Residential",
    location: "Palm Jumeirah",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cyber Mall Illumination",
    category: "Commercial",
    location: "Downtown Boulevard",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Horizon Tech Park",
    category: "Architectural",
    location: "Innovation Hub",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Mercer",
    role: "CTO",
    company: "NextGen Tech",
    quote: "Lumira transformed our headquarters. The automated smart lighting responds perfectly to our working hours and has reduced our energy costs by 40%.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Lead Designer",
    company: "Luxe Interiors",
    quote: "The ambient lighting quality is unmatched. We specify Lumira products for all our high-end residential projects because of their reliability and stunning color accuracy.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Facility Manager",
    company: "Global Logistics",
    quote: "Upgrading to Lumira's industrial LED solutions was the best decision for our warehouse. Incredible visibility and zero maintenance issues in two years.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

export const CLIENT_LOGOS = [
  "Tesla",
  "Samsung",
  "Philips",
  "Siemens",
  "Osram",
  "Google",
  "Amazon",
  "Cisco",
];


export const PRODUCTS = [
  {
    title: "Aura Smart Panel",
    category: "Smart Lighting",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=1200&auto=format&fit=crop",
    short: "Minimal architectural LED panel",
    description:
      "Elegant ultra-slim smart LED panel designed for luxury interiors, premium office spaces, and modern architectural environments with intelligent brightness control.",
    features: [
      "Smart Control",
      "Warm White",
      "Energy Saving",
    ],
  },

  {
    title: "Nova Ceiling Light",
    category: "Interior LED",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1565538810844-1e119de16f2d?q=80&w=1200&auto=format&fit=crop",
    short: "Luxury ambient ceiling lighting",
    description:
      "Premium designer ceiling light crafted with soft ambient illumination for villas, hotels, lounges, and contemporary living spaces.",
    features: [
      "Ambient Glow",
      "Premium Finish",
      "Modern Design",
    ],
  },

  {
    title: "Lumen Track System",
    category: "Architectural",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1200&auto=format&fit=crop",
    short: "Professional track lighting system",
    description:
      "Advanced modular LED track lighting engineered for galleries, showrooms, luxury retail stores, and high-end architectural projects.",
    features: [
      "Adjustable Focus",
      "High Brightness",
      "Architectural",
    ],
  },

  {
    title: "Zen Pendant Lamp",
    category: "Decorative",
    price: "₹5,499",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1200&auto=format&fit=crop",
    short: "Elegant hanging pendant light",
    description:
      "Contemporary hanging pendant lamp featuring premium materials and warm lighting aesthetics for dining rooms and modern interiors.",
    features: [
      "Luxury Style",
      "Warm Lighting",
      "Decorative",
    ],
  },

  {
    title: "Edge Wall Light",
    category: "Wall Lighting",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop",
    short: "Minimal modern wall illumination",
    description:
      "Sophisticated wall-mounted LED fixture delivering smooth indirect lighting with elegant architectural styling.",
    features: [
      "Soft Glow",
      "Minimal Design",
      "Indoor LED",
    ],
  },

  {
    title: "Orbit Smart Bulb",
    category: "Smart Bulb",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=1200&auto=format&fit=crop",
    short: "Voice-controlled smart LED bulb",
    description:
      "Next-generation smart LED bulb with mobile app integration, voice assistant support, and customizable lighting modes.",
    features: [
      "WiFi Enabled",
      "Voice Control",
      "RGB Modes",
    ],
  },
];