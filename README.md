# Swati Deshpande Designs — Website

Free hosting via GitHub Pages | Contact form via Formspree

---

## 📁 File Structure

```
swati-designs/
│
├── index.html
├── about.html
├── services.html
├── projects.html       ← Project grid + lightbox gallery
├── contact.html
│
├── css/style.css       ← All styling + color variables
│
├── js/
│   ├── config.js       ← ⭐ ALL EDITABLE CONTENT IS HERE
│   └── main.js         ← Rendering logic (don't edit)
│
└── images/
    ├── hero.jpg                    ← Home page hero photo
    ├── swati-portrait.jpg          ← About page photo
    │
    └── projects/                   ← ⭐ PROJECT IMAGES GO HERE
        │
        ├── 4bhk-bungalow-ahmedabad/    ← Residential: 4 BHK Bungalow Ahmedabad
        ├── chandur-renders-3bhk/       ← Residential: 3 BHK Flat Interior
        ├── renders/                    ← Residential: Renders
        ├── surya-emerald-teakwood/     ← Residential: Surya Emerald Teakwood
        ├── satish-luxury-4bhk/         ← Residential: Luxury 4BHK
        │
        ├── bijapur-veterinary/         ← Architecture: Veterinary Polyclinic
        ├── bungalow-exteriors/         ← Architecture: Bungalow Exteriors
        ├── mdpu-school-college/        ← Architecture: School & PU College
        │
        ├── cloth-shop/                 ← Commercial: Cloth Shop
        ├── japanese-office/            ← Commercial: Japanese Office
        └── logistics-office/           ← Commercial: Logistics Office
```

---

## 🖼️ HOW TO ADD IMAGES TO A PROJECT

### Step 1 — Drop your images into the right folder
Each project has its own folder under `images/projects/`. For example, for the
4 BHK Bungalow project, put your photos here:
```
images/projects/4bhk-bungalow-ahmedabad/living-room.jpg
images/projects/4bhk-bungalow-ahmedabad/kitchen.jpg
images/projects/4bhk-bungalow-ahmedabad/master-bedroom.jpg
```

### Step 2 — Update the images list in config.js
Open `js/config.js`, find the project, and add your filenames to the `images` array:
```js
{
  title:  "4 BHK Residence Bungalow in Ahmedabad",
  folder: "4bhk-bungalow-ahmedabad",
  images: ["living-room.jpg", "kitchen.jpg", "master-bedroom.jpg"],
  // ↑ First image = tile cover. All images open in the gallery lightbox.
  ...
}
```

That's it. The first image in the array becomes the project tile cover.
All images appear in the lightbox when someone clicks the tile.

### Image tips
- Recommended size: 1200×800px (landscape works best for the gallery)
- Compress before uploading: https://squoosh.app (target < 300KB per image)
- Supported formats: JPG, PNG, WebP

---

## ✏️ HOW TO EDIT PROJECT CONTENT

All project content is in `js/config.js` under `projects: [...]`

### Add a new project
1. Create a new folder: `images/projects/my-new-project/`
2. Copy any project block in config.js, update all fields:
```js
{
  title:       "My New Project Name",
  category:    "Residential",        // Residential | Architecture | Commercial
  description: "Description here.",
  folder:      "my-new-project",     // must match your folder name exactly
  images:      ["photo1.jpg"],
  tags:        ["Tag1", "Tag2"],
},
```

### Change a project description or tags
Find the project in config.js and edit the `description` or `tags` fields directly.

### Remove a project
Delete the entire `{ ... }` block for that project in config.js.

---

## 📬 CONTACT FORM SETUP (Formspree — Free)

1. Go to https://formspree.io → create free account
2. New Form → copy the form ID (e.g. `xpzgnqab`)
3. In config.js update:
```js
form_endpoint: "https://formspree.io/f/xpzgnqab",
```

---

## 🚀 DEPLOYING TO GITHUB PAGES

1. Create a GitHub account at github.com
2. New repository → name it anything → set to Public
3. Upload all files (keep the folder structure)
4. Settings → Pages → Source: main branch → Save
5. Add your custom domain in Pages settings

Connect your GoDaddy domain:
- Add 4 A records pointing to: 185.199.108.153 / .109 / .110 / .111
- Add CNAME record: www → yourusername.github.io

---

## 🆓 Monthly Cost: ₹0
