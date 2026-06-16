/**
 * ============================================================
 *  SWATI DESHPANDE DESIGNS — SITE CONFIGURATION
 *  ============================================================
 *  Edit this file to update ALL content across the website.
 *  No need to touch any HTML files.
 *
 *  HOW TO ADD IMAGES TO A PROJECT:
 *  1. Put your image files inside the project's folder under images/projects/<folder-name>/
 *     e.g.  images/projects/4bhk-bungalow-ahmedabad/living-room.jpg
 *  2. In the project entry below, add the filename to the "images" array:
 *     images: ["living-room.jpg", "kitchen.jpg", "bedroom.jpg"]
 *  3. The first image is used as the tile cover. All images open in the lightbox gallery.
 *
 *  FOLDER NAMES (place your images here):
 *    Residential:
 *      images/projects/4bhk-bungalow-ahmedabad/
 *      images/projects/chandur-renders-3bhk/
 *      images/projects/renders/
 *      images/projects/surya-emerald-teakwood/
 *      images/projects/satish-luxury-4bhk/
 *    Architecture:
 *      images/projects/bijapur-veterinary/
 *      images/projects/bungalow-exteriors/
 *      images/projects/mdpu-school-college/
 *    Commercial:
 *      images/projects/cloth-shop/
 *      images/projects/japanese-office/
 *      images/projects/logistics-office/
 * ============================================================
 */

const SITE = {

  // ── BRAND ──────────────────────────────────────────────────
  name:    "Swati Deshpande Designs",
  tagline: "Practical design with a focus on functionality and execution.",
  logo:    "SD",

  // ── SOCIAL & CONTACT ───────────────────────────────────────
  contact: {
    phone:     "8320941691",
    email:     "swatideshpande264@gmail.com",
    location:  "PCMC / Pune, Maharashtra",
    whatsapp:  "918320941691",
    instagram: "swatideshpande264",
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
    image: "images/swati-portrait.jpg",
    paragraphs: [
      "I am an Architectural and Interior Designer with over 12 years of experience in residential and commercial design projects. I have worked on planning, designing, and executing multiple projects across Pune, Ahmedabad, and Bangalore — in Government, private residential, commercial, and educational sectors.",
      "My strength lies in understanding client requirements deeply, creating functional layouts, and ensuring smooth coordination during execution. I believe good design is not just about aesthetics — it is about usability, long-term practicality, and spaces that truly reflect the people who live in them.",
      "I explore different textures and materials and find that unexpected combinations can result in spaces that are more exciting and memorable. I like to incorporate elements of art and fine craftsmanship such as bespoke joinery wherever possible.",
      "Currently open to freelance projects and collaborations with architects, designers, and firms.",
    ],
    quote: "I try to understand my clients and what they are uniquely looking for, and I enjoy injecting aspects of their personality and stories into the design.",
    expertise: [
      "Residential Design", "Corporate Design", "Institutional Design",
      "Hospitality & Healthcare", "Architecture", "Landscape Design",
      "Space Planning", "Turnkey Projects",
    ],
  },

  // ── SERVICES PAGE ──────────────────────────────────────────
  services: [
    { icon: "⬜", title: "Residential Interior Design", description: "Complete interior design solutions for homes — from concept and mood boards to detailed layouts, material selection, and final execution." },
    { icon: "🏢", title: "Corporate & Office Design",   description: "Functional, brand-aligned workspaces that boost productivity. We handle offices, co-working spaces, and corporate interiors end-to-end." },
    { icon: "📐", title: "Architecture",                description: "Architectural design for residential and commercial buildings — from initial concept drawings to working drawings and site supervision." },
    { icon: "📏", title: "Space Planning",              description: "Efficient layout planning to optimise space, circulation, and functionality — especially for compact apartments and renovation projects." },
    { icon: "📋", title: "Working Drawings",            description: "Detailed technical drawings for execution: furniture layouts, electrical plans, plumbing, false ceiling, and elevation drawings." },
    { icon: "🏗️", title: "Site Coordination",          description: "On-site coordination with contractors, vendors, and artisans to ensure the design vision is executed with precision and quality." },
    { icon: "🌿", title: "Landscape Design",            description: "Outdoor spaces, terrace gardens, and landscape concepts that complement the built environment and create a seamless indoor-outdoor flow." },
    { icon: "🔑", title: "Turnkey Projects",            description: "End-to-end project management — from design concept to handing over the keys. One point of contact for the entire project lifecycle." },
  ],

  // ── PROJECTS PAGE ──────────────────────────────────────────
  //
  // HOW TO ADD/EDIT PROJECTS:
  // ─────────────────────────
  // Each project has:
  //   folder   → subfolder name inside images/projects/ where you place your photos
  //   images   → array of filenames inside that folder (first = tile cover image)
  //   category → "Residential" | "Architecture" | "Commercial"
  //   tags     → short labels shown on the tile
  //
  // To add a new image to an existing project:
  //   1. Drop the file into   images/projects/<folder>/yourphoto.jpg
  //   2. Add "yourphoto.jpg"  to the images array below
  //
  // To add a new project:
  //   1. Create a new folder: images/projects/my-new-project/
  //   2. Copy one project block below and update all fields
  //
  projects: [

    // ── RESIDENTIAL ──────────────────────────────────────────
    {
      title:       "4 BHK Residence Bungalow in Ahmedabad",
      category:    "Residential",
      description: "A spacious 4 BHK bungalow interior designed for a family in Ahmedabad. The project integrates warm material palettes, custom joinery, and a seamless flow between living, dining, and entertainment zones. Each room balances comfort with elegance, reflecting the family's lifestyle and aspirations.",
      folder:      "4bhk-bungalow-ahmedabad",
      images:      ["placeholder.jpg"],
      // ↑ Add more: ["placeholder.jpg", "living-room.jpg", "master-bedroom.jpg"]
      tags:        ["4 BHK", "Bungalow", "Ahmedabad", "Residential"],
    },
    {
      title:       "3 BHK Flat Interior",
      category:    "Residential",
      description: "Contemporary 3 BHK apartment interior featuring clean lines, space-efficient furniture, and a cohesive colour palette. The design focuses on maximising natural light, optimising storage in each room, and creating a modern yet livable home for an urban family.",
      folder:      "chandur-renders-3bhk",
      images:      ["placeholder.jpg"],
      tags:        ["3 BHK", "Flat", "Interior Design", "Contemporary"],
    },
    {
      title:       "Renders",
      category:    "Residential",
      description: "A collection of detailed 3D visualisation renders showcasing conceptual residential interior designs. These renders serve as precise pre-execution previews — capturing material finishes, spatial volumes, lighting conditions, and furniture arrangements before a single wall is touched.",
      folder:      "renders",
      images:      ["placeholder.jpg"],
      tags:        ["3D Renders", "Visualisation", "Concept Design"],
    },
    {
      title:       "3BHK Flat Premium Interiors – Teakwood Interiors",
      category:    "Residential",
      description: "Premium 3 BHK flat interiors at Surya Emerald featuring rich teakwood panelling, custom-crafted cabinetry, and high-end material finishes. The design exudes warmth and luxury with bespoke teak furniture, statement lighting, and a curated colour palette of warm browns, off-whites, and gold accents.",
      folder:      "surya-emerald-teakwood",
      images:      ["placeholder.jpg"],
      tags:        ["3 BHK", "Teakwood", "Premium", "Surya Emerald"],
    },
    {
      title:       "Luxury 4BHK Flat Premium Interiors",
      category:    "Residential",
      description: "An opulent 4 BHK luxury apartment interior crafted with the finest materials and bespoke detailing. The design language blends contemporary architecture with classic luxury — featuring marble flooring, velvet upholstery, backlit wall panels, and custom crafted wardrobes. Every room is a statement of refined living.",
      folder:      "satish-luxury-4bhk",
      images:      ["placeholder.jpg"],
      tags:        ["4 BHK", "Luxury", "Premium Interiors", "Bespoke"],
    },

    // ── ARCHITECTURE ─────────────────────────────────────────
    {
      title:       "Veterinary Polyclinic Hospital – Bijapur",
      category:    "Architecture",
      description: "Architectural design and renders for a Veterinary Polyclinic Hospital in Bijapur. The project encompasses functional layout planning for OPD, examination rooms, surgical suites, and animal wards — designed to meet both clinical efficiency and animal welfare standards while presenting a clean, professional exterior.",
      folder:      "bijapur-veterinary",
      images:      ["placeholder.jpg"],
      tags:        ["Hospital", "Institutional", "Bijapur", "Architecture"],
    },
    {
      title:       "Bungalow Exteriors",
      category:    "Architecture",
      description: "Exterior architecture and façade design for private residential bungalows. The work encompasses massing, material selection, fenestration design, landscape integration, and exterior lighting — creating homes that are visually distinctive, contextually sensitive, and built to stand the test of time.",
      folder:      "bungalow-exteriors",
      images:      ["placeholder.jpg"],
      tags:        ["Exterior", "Bungalow", "Façade", "Architecture"],
    },
    {
      title:       "Residential School and PU College",
      category:    "Architecture",
      description: "Architectural design for a combined Residential School and Pre-University College campus. The project addresses complex multi-use programming — classrooms, dormitories, sports facilities, administrative blocks, and open courtyards — all within a cohesive campus master plan that promotes learning, community, and well-being.",
      folder:      "mdpu-school-college",
      images:      ["placeholder.jpg"],
      tags:        ["Institutional", "School", "PU College", "Campus"],
    },

    // ── COMMERCIAL ───────────────────────────────────────────
    {
      title:       "Cloth Shop Interiors",
      category:    "Commercial",
      description: "Retail interior design for a cloth and textile showroom. The layout prioritises an inviting browsing experience with well-organised fabric display racks, warm accent lighting to bring out textile colours, and a clean yet rich aesthetic that communicates quality and craftsmanship to every customer who walks in.",
      folder:      "cloth-shop",
      images:      ["placeholder.jpg"],
      tags:        ["Retail", "Cloth Shop", "Commercial", "Showroom"],
    },
    {
      title:       "Japanese Commercial Office Space Interiors",
      category:    "Commercial",
      description: "A commercial office interior inspired by Japanese design philosophy — minimalist, calm, and deeply functional. The design incorporates natural materials like bamboo, light wood, and stone textures, with clean spatial planning that encourages focused work. Shoji-inspired partition screens, controlled natural light, and a neutral palette create a serene yet professional environment.",
      folder:      "japanese-office",
      images:      ["placeholder.jpg"],
      tags:        ["Japanese", "Office", "Minimalist", "Commercial"],
    },
    {
      title:       "Logistics Commercial Office Interior",
      category:    "Commercial",
      description: "Interior design for a logistics and operations company's commercial office. The layout supports high-footfall workflows with dedicated client reception, open operational floor, private management cabins, and a conference zone. Durable materials, efficient lighting, and a professional colour scheme project brand confidence and support day-to-day operational efficiency.",
      folder:      "logistics-office",
      images:      ["placeholder.jpg"],
      tags:        ["Logistics", "Office", "Commercial", "Operations"],
    },
  ],

  // ── CONTACT PAGE ───────────────────────────────────────────
  contact_page: {
    title:    "Let's Work Together",
    subtitle: "I am available for freelance projects, collaborations, and design consultations. Reach out to discuss your project.",
    form_endpoint: "https://formspree.io/f/YOUR_FORM_ID",
  },

};
