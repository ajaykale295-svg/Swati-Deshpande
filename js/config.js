/**
 * ============================================================
 *  SWATI DESHPANDE DESIGNS — SITE CONFIGURATION
 *  ============================================================
 *  Edit this file to update ALL content across the website.
 *  No need to touch any HTML files.
 *
 *  HOW TO:
 *  - Change text    → edit the string values below
 *  - Add a project  → copy one object in PROJECTS array, paste below it
 *  - Add a service  → copy one object in SERVICES array, paste below it
 *  - Change images  → replace the src path with your image filename
 *                     (put images in the /images/ folder)
 *  - Change contact → update CONTACT section
 *  - Change colors  → update CSS variables in css/style.css (top of file)
 * ============================================================
 */

const SITE = {

  // ── BRAND ──────────────────────────────────────────────────
  name:    "Swati Deshpande Designs",
  tagline: "Practical design with a focus on functionality and execution.",
  logo:    "SD", // initials shown if no logo image

  // ── SOCIAL & CONTACT ───────────────────────────────────────
  contact: {
    phone:     "8320941691",
    email:     "swatideshpande264@gmail.com",
    location:  "PCMC / Pune, Maharashtra",
    whatsapp:  "+918320941691",          // country code + number, no +
    instagram: "swatideshpande264",     // handle only, no @
  },

  // ── HOME PAGE ──────────────────────────────────────────────
  home: {
    headline:    "Architectural & Interior Designer in Pune",
    subheadline: "Designing functional, practical and aesthetically pleasing spaces with 12+ years of experience.",
    intro:       "Hi, I'm Swati Deshpande — an Architectural and Interior Designer based in PCMC/Pune. I specialize in residential interiors, space planning, and execution support, creating spaces that balance functionality with timeless aesthetics.",
    cta_primary:   { text: "View My Work",  href: "projects.html" },
    cta_secondary: { text: "Contact Me",    href: "contact.html"  },
    stats: [
      { number: "12+", label: "Years Experience" },
      { number: "80+", label: "Projects Completed" },
      { number: "100%", label: "Client Satisfaction" },
    ],
  },

  // ── ABOUT PAGE ─────────────────────────────────────────────
  about: {
    title: "About Me",
    image: "images/swati-portrait.jpg",  // replace with actual photo
    paragraphs: [
      "I am an Architectural and Interior Designer with over 12 years of experience in residential and commercial design projects. I have worked on planning, designing, and executing multiple projects across Pune, Ahmedabad, and Bangalore — in Government, private residential, commercial, and educational sectors.",
      "My strength lies in understanding client requirements deeply, creating functional layouts, and ensuring smooth coordination during execution. I believe good design is not just about aesthetics — it is about usability, long-term practicality, and spaces that truly reflect the people who live in them.",
      "I explore different textures and materials and find that unexpected combinations can result in spaces that are more exciting and memorable. I like to incorporate elements of art and fine craftsmanship such as bespoke joinery wherever possible.",
      "Currently open to freelance projects and collaborations with architects, designers, and firms.",
    ],
    quote: "I try to understand my clients and what they are uniquely looking for, and I enjoy injecting aspects of their personality and stories into the design.",
    expertise: [
      "Residential Design",
      "Corporate Design",
      "Institutional Design",
      "Hospitality & Healthcare",
      "Architecture",
      "Landscape Design",
      "Space Planning",
      "Turnkey Projects",
    ],
  },

  // ── SERVICES PAGE ──────────────────────────────────────────
  // To add a new service: copy one block below, paste after the last },
  services: [
    {
      icon: "⬜",
      title: "Residential Interior Design",
      description: "Complete interior design solutions for homes — from concept and mood boards to detailed layouts, material selection, and final execution.",
    },
    {
      icon: "🏢",
      title: "Corporate & Office Design",
      description: "Functional, brand-aligned workspaces that boost productivity. We handle offices, co-working spaces, and corporate interiors end-to-end.",
    },
    {
      icon: "📐",
      title: "Architecture",
      description: "Architectural design for residential and commercial buildings — from initial concept drawings to working drawings and site supervision.",
    },
    {
      icon: "📏",
      title: "Space Planning",
      description: "Efficient layout planning to optimise space, circulation, and functionality — especially for compact apartments and renovation projects.",
    },
    {
      icon: "📋",
      title: "Working Drawings",
      description: "Detailed technical drawings for execution: furniture layouts, electrical plans, plumbing, false ceiling, and elevation drawings.",
    },
    {
      icon: "🏗️",
      title: "Site Coordination",
      description: "On-site coordination with contractors, vendors, and artisans to ensure the design vision is executed with precision and quality.",
    },
    {
      icon: "🌿",
      title: "Landscape Design",
      description: "Outdoor spaces, terrace gardens, and landscape concepts that complement the built environment and create a seamless indoor-outdoor flow.",
    },
    {
      icon: "🔑",
      title: "Turnkey Projects",
      description: "End-to-end project management — from design concept to handing over the keys. One point of contact for the entire project lifecycle.",
    },
  ],

  // ── PROJECTS PAGE ──────────────────────────────────────────
  // To add a new project: copy one block, paste after the last },
  // category options: "Residential" | "Commercial" | "Architecture" | "Renovation"
  projects: [
    {
      title: "2BHK Residential Interior – Pune",
      category: "Residential",
      description: "Complete interior design including living room, bedroom, and modular kitchen. Focus on functional planning, storage optimisation, and modern aesthetics.",
      image: "images/project-1.jpg",   // replace with your image
      tags: ["Interior Design", "Space Planning", "Modular Furniture"],
    },
    {
      title: "Bedroom Interior Design",
      category: "Residential",
      description: "A comfortable, space-efficient bedroom with customised storage, warm lighting, and clean contemporary finishes.",
      image: "images/project-2.jpg",
      tags: ["Bedroom", "Storage Design", "Lighting"],
    },
    {
      title: "Modular Kitchen Design",
      category: "Residential",
      description: "A modular kitchen designed for efficient workflow, maximum storage, and a modern aesthetic that makes cooking a pleasure.",
      image: "images/project-3.jpg",
      tags: ["Kitchen", "Modular", "Storage"],
    },
    {
      title: "Corporate Office Interior",
      category: "Commercial",
      description: "Open-plan office redesign focusing on collaborative zones, private cabins, and a brand-aligned colour palette.",
      image: "images/project-4.jpg",
      tags: ["Office", "Corporate", "Open Plan"],
    },
    {
      title: "3BHK Bungalow – PCMC",
      category: "Architecture",
      description: "Full architectural and interior design for a private bungalow — from structural drawings to final furnishing and landscaping.",
      image: "images/project-5.jpg",
      tags: ["Bungalow", "Architecture", "Turnkey"],
    },
    {
      title: "Retail Store Renovation",
      category: "Renovation",
      description: "Renovation of an existing retail space into a modern, customer-friendly showroom with improved lighting and product display zones.",
      image: "images/project-6.jpg",
      tags: ["Renovation", "Retail", "Commercial"],
    },
  ],

  // ── CONTACT PAGE ───────────────────────────────────────────
  contact_page: {
    title: "Let's Work Together",
    subtitle: "I am available for freelance projects, collaborations, and design consultations. Reach out to discuss your project.",
    form_endpoint: "https://formspree.io/f/YOUR_FORM_ID",  // ← replace with your Formspree ID
  },

};
