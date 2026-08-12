export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  href: string;
  highlights: string[];
}

export interface Testimonial {
  name: string;
  projectType: string;
  quote: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const COMPANY_INFO = {
  name: "Brick Lawn Landscaping",
  tagline: "Turf & Stone. Built to Last.",
  location: "Edmonton, Alberta, Canada",
  philosophy: "We don't build landscapes that look good for one season. We build outdoor spaces properly so they continue looking great for years.",
  trustMetrics: [
    "Built for Alberta",
    "Professional Installation",
    "Quality Materials",
    "No-Surprise Pricing",
    "Workmanship Warranty"
  ],
  quoteGuarantee: "Quote delivered within 3 days",
  durationEstimate: "Most installations take 2–5 days depending on size & weather",
  trainingStats: [
    "250+ Professional Hardscape Training Videos",
    "Trade School Construction Modules",
    "Manufacturer Certifications",
    "Machine-Operation Courses",
    "Yearly Crew Refreshers",
    "Rigid Base & Drainage Standards"
  ],
  partners: [
    { name: "Barkman Concrete", logoText: "BARKMAN" },
    { name: "Belgard", logoText: "BELGARD" },
    { name: "Expocrete", logoText: "EXPOCRETE" },
    { name: "Techo-Bloc", logoText: "TECHO-BLOC" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "artificial-turf",
    title: "Artificial Turf",
    shortDesc: "Green year-round without watering, mowing, or mud. Pet-safe, low-maintenance, and designed with proper drainage.",
    fullDesc: "Enjoy a lush green lawn 365 days a year without the constant maintenance, watering, or muddy paws. Engineered specifically to drain efficiently and endure Edmonton's winter freeze-thaw cycles.",
    image: "/images/turf.png",
    href: "/services/artificial-turf",
    highlights: ["Pet-Safe & Mud-Free", "Built-In Drainage System", "No Mowing or Watering", "Alberta Climate Tested"]
  },
  {
    id: "hardscapes",
    title: "Hardscaping",
    shortDesc: "Paver patios, driveways, walkways, steps, retaining walls, and complete outdoor living spaces.",
    fullDesc: "Custom paver installations built on deep, compacted aggregate foundations. Every stone is aligned, compacted, and locked in place for long-term stability.",
    image: "/images/patio.png",
    href: "/services/hardscapes",
    highlights: ["Paver Patios & Driveways", "Retaining & Garden Walls", "Walkways & Custom Steps", "Compacted Aggregate Foundation"]
  },
  {
    id: "paver-repair",
    title: "Paver Repair & Relay",
    shortDesc: "Don't simply reset sinking pavers. Rebuild the base properly and restore the surface.",
    fullDesc: "Temporary surface patches don't solve root foundation issues. We excavate failed subgrade, rebuild the aggregate base, re-level, and lock pavers with fresh polymeric sand.",
    image: "/images/paver_repair.png",
    href: "/services/paver-repair",
    highlights: ["Complete Sub-Base Rebuild", "Paver Realignment", "Sinking Paver Correction", "Polymeric Sand Relocking"]
  },
  {
    id: "quick-curb",
    title: "Quick Curb Edging",
    shortDesc: "Smooth poured-in-place concrete curbing with customizable colours and profiles.",
    fullDesc: "Create clean, permanent separation between garden beds, turf, and walkways. Continuous poured-in-place concrete edging tailored to your landscape design.",
    image: "/images/curb.png",
    href: "/services/quick-curb",
    highlights: ["Poured-In-Place Concrete", "Customizable Profiles & Shades", "Definitive Landscape Edging", "Durable Root Barrier"]
  },
  {
    id: "outdoor-living",
    title: "Outdoor Living",
    shortDesc: "Firepits, outdoor kitchens, seating areas, poolside spaces, and custom backyard environments.",
    fullDesc: "Transform your yard into an entertaining center with built-in stone firepits, custom seating walls, barbecue enclosures, and poolside surrounds.",
    image: "/images/outdoor_living.png",
    href: "/services/outdoor-living",
    highlights: ["Custom Stone Firepits", "Patio Seating Walls", "Barbecue & Grill Enclosures", "Poolside Stone Surrounds"]
  },
  {
    id: "landscape-design",
    title: "Landscape Design & Construction",
    shortDesc: "Fences, patios, retaining walls, garden spaces, and complete outdoor transformations.",
    fullDesc: "From initial site grading and custom fence construction to full property transformations, we manage the entire outdoor build with clear communication and quality craftsmanship.",
    image: "/images/design_3d.png",
    href: "/services/landscape-design",
    highlights: ["Custom Fence Construction", "Full Property Layouts", "3D Project Visualization", "Complete Site Grading"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jessica Evans",
    projectType: "Fence & Backyard Project",
    highlight: "Appreciated being listened to without high-pressure sales.",
    quote: "I appreciated being listened to and not being pushed into unnecessary services. The crew worked efficiently, respected my property, and delivered high quality work. I specifically recommend Brick Lawn Landscaping for fence projects."
  },
  {
    name: "Michael Patel",
    projectType: "Hardscape Patio Installation",
    highlight: "Proactive communication & clear answers at every step.",
    quote: "The communication was excellent from day one. I was kept informed throughout the entire installation, all my questions were answered immediately, and the final result exceeded our expectations."
  },
  {
    name: "Ethan Davis",
    projectType: "Custom Outdoor Living Space",
    highlight: "Matched the exact vision with meticulous detail.",
    quote: "The design matched exactly what I envisioned for our yard. Their execution showed strong attention to detail, especially in the base compaction and paver alignment. Built properly from the ground up."
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "On-Site Consultation & Quote",
    subtitle: "Quote delivered within 3 days",
    description: "We inspect your property, evaluate drainage and grade conditions, understand your layout goals, and deliver a detailed, itemized quote within 3 days."
  },
  {
    number: "02",
    title: "Design & Material Selection",
    subtitle: "Layout, colors, and paver samples",
    description: "Review property layouts, paver samples from top suppliers (Barkman, Belgard, Expocrete, Techo-Bloc), border accents, and optional 3D design plans."
  },
  {
    number: "03",
    title: "Professional Construction",
    subtitle: "Excavation, base compaction, drainage & build",
    description: "Our crew executes thorough excavation, removes unstable subsoil, installs compacted aggregate base layers, manages slope grading, lays pavers/turf, installs edge restraints, and sweeps polymeric sand."
  },
  {
    number: "04",
    title: "Final Walkthrough & Warranty",
    subtitle: "Complete review & workmanship guarantee",
    description: "We walk through the completed landscape together to ensure every detail meets our strict standard and hand over your Workmanship Warranty."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long do paver installations last in Edmonton?",
    answer: "When installed properly with deep subgrade excavation, heavy compaction, and correct drainage slope, paver installations can last for decades. In Alberta's freeze-thaw climate, the foundation under the stone is what prevents shifting and sinking over time."
  },
  {
    question: "Why choose pavers over solid poured concrete in Alberta?",
    answer: "Poured concrete slabs are prone to cracking when Edmonton's ground expands and contracts during severe freeze-thaw cycles. Interlocking pavers flex naturally with soil movement and are significantly easier to repair or re-level if subgrade shifting ever occurs."
  },
  {
    question: "What is your No-Surprise Pricing Guarantee?",
    answer: "Before construction starts, we provide a detailed, itemized quote with a clearly defined project scope. The price we quote is the price you can plan around—no surprise charges mid-project."
  },
  {
    question: "How long does a typical hardscape or turf project take?",
    answer: "Most residential hardscape and artificial turf installations take approximately 2–5 days, depending on project square footage, excavation depth, site accessibility, and weather conditions."
  },
  {
    question: "How fast will I receive my project quote?",
    answer: "After our initial on-site property consultation and site evaluation, we deliver your complete itemized quote within 3 days."
  },
  {
    question: "Do you offer 3D landscape design services?",
    answer: "Yes, for larger or multi-element outdoor construction projects, we provide full 3D visual designs showing elevations, wall heights, color choices, layout, and traffic flow before breaking ground."
  },
  {
    question: "What is covered under your Workmanship Warranty?",
    answer: "We stand behind the structural integrity of our installations with a formal Workmanship Warranty provided upon final walkthrough inspection."
  },
  {
    question: "What materials and supplier brands do you use?",
    answer: "We partner with leading Canadian and North American hardscape manufacturers, including Barkman Concrete, Belgard, Expocrete, and Techo-Bloc."
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Modern Paver Patio & Firepit Area", category: "Patios", image: "/images/patio.png" },
  { id: 2, title: "Custom Paver Driveway & Border", category: "Driveways", image: "/images/driveway.png" },
  { id: 3, title: "Year-Round Pet & Drain Artificial Turf", category: "Turf", image: "/images/turf.png" },
  { id: 4, title: "Custom Poured Concrete Quick Curbing", category: "Curb Edging", image: "/images/curb.png" },
  { id: 5, title: "Outdoor Living Suite with Built-In Seating", category: "Outdoor Living", image: "/images/outdoor_living.png" },
  { id: 6, title: "3D CAD Landscape Architectural Plan", category: "Landscape Design", image: "/images/design_3d.png" },
  { id: 7, title: "Foundation Base Excavation & Compaction", category: "Hardscaping Base", image: "/images/foundation.png" },
  { id: 8, title: "Paver Repair & Sub-Base Restoration", category: "Paver Repair", image: "/images/paver_repair.jpg" }
];
