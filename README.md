# Swati Deshpande Designs — Website

A free, elegant website for an interior designer/architect.
**Hosting: GitHub Pages (free) | Contact form: Formspree (free)**

---

## 📁 File Structure

```
swati-designs/
│
├── index.html          ← Home page
├── about.html          ← About page
├── services.html       ← Services page
├── projects.html       ← Projects page (with filter)
├── contact.html        ← Contact page with form
│
├── css/
│   └── style.css       ← All styling + color variables
│
├── js/
│   ├── config.js       ← ⭐ ALL EDITABLE CONTENT IS HERE
│   └── main.js         ← Rendering logic (don't edit)
│
└── images/             ← Put all your photos here
    ├── hero.jpg
    ├── swati-portrait.jpg
    ├── project-1.jpg
    ├── project-2.jpg
    └── ...
```

---

## ✏️ HOW TO EDIT CONTENT

**Open `js/config.js` — this is the only file you need to edit for most changes.**

### Change name, phone, email, social handles
```js
contact: {
  phone:     "8320941691",
  email:     "swatideshpande264@gmail.com",
  whatsapp:  "918320941691",   // 91 = India country code
  instagram: "swatideshpande264",
},
```

### Add a new project
Find the `projects:` array in `config.js` and add a new block:
```js
{
  title: "My New Project – Pune",
  category: "Residential",       // Residential | Commercial | Architecture | Renovation
  description: "Short description of this project.",
  image: "images/new-project.jpg",  // place this image in the /images/ folder
  tags: ["Tag1", "Tag2", "Tag3"],
},
```

### Add a new service
Find the `services:` array and add:
```js
{
  icon: "🏠",
  title: "New Service Name",
  description: "What this service includes.",
},
```

### Change the hero stats (e.g. update years)
```js
stats: [
  { number: "14+", label: "Years Experience" },
  ...
]
```

### Change colors (site-wide)
Open `css/style.css` and edit the top `:root` section:
```css
:root {
  --color-bg:     #FAF8F5;   /* page background */
  --color-accent: #B8860B;   /* gold highlights — change this! */
  --color-dark:   #1A1714;   /* dark text / footer */
}
```

---

## 🖼️ HOW TO ADD IMAGES

1. Name your image files (e.g. `project-living-room.jpg`)
2. Place them in the `/images/` folder
3. In `config.js`, set the `image:` path:
   ```js
   image: "images/project-living-room.jpg",
   ```
4. **Recommended sizes:**
   - Hero photo: 900×1100px
   - Portrait (about page): 600×800px
   - Project photos: 800×600px (landscape)
5. **Compress your images** at https://squoosh.app before uploading to keep the site fast.

---

## 📬 SETTING UP THE CONTACT FORM (Formspree — Free)

1. Go to https://formspree.io and create a free account
2. Click **New Form**, name it "Website Contact"
3. Copy the form ID (looks like `xpzgnqab`)
4. In `config.js`, update:
   ```js
   form_endpoint: "https://formspree.io/f/xpzgnqab",
   ```
5. Done! Form submissions will arrive in your email.

---

## 🚀 DEPLOYING TO GITHUB PAGES (Free Hosting)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
- Click the **+** icon → **New repository**
- Name it: `swati-deshpande-designs` (or anything)
- Set to **Public**
- Click **Create repository**

### Step 3 — Upload files
- Click **uploading an existing file**
- Drag and drop ALL your website files (keep folder structure)
- Click **Commit changes**

### Step 4 — Enable GitHub Pages
- Go to **Settings** → **Pages**
- Under **Source**, select **Deploy from a branch**
- Branch: `main`, Folder: `/ (root)`
- Click **Save**

Your site will be live at:
`https://yourusername.github.io/swati-deshpande-designs/`

### Step 5 — Connect your custom domain
1. In GitHub Pages settings, enter your domain in **Custom domain** (e.g. `www.swatideshpandedesigns.com`)
2. Log into your domain registrar (GoDaddy/Namecheap/BigRock etc.)
3. Add a **CNAME record**: `www` → `yourusername.github.io`
4. Add **A records** pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
5. Wait 10–30 minutes. Your site will be live at your domain with free HTTPS.

---

## 🆓 Monthly Cost Breakdown

| Item | Cost |
|------|------|
| GitHub Pages hosting | ₹0 |
| Formspree contact form | ₹0 (up to 50 submissions/month) |
| Domain (already purchased) | ₹0 |
| **Total** | **₹0/month** |

---

## 🙋 Need Help?

For any issues, feel free to reach out. Changes to content only require editing `config.js`.
