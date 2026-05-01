
/**
 * SWATI DESHPANDE DESIGNS — MAIN SCRIPT
 * Reads from config.js and renders dynamic content across all pages.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Inject global elements ──────────────────────────────────
  injectNav();
  injectFloatingButtons();
  injectFooter();
  setActiveNav();

  // ── Page-specific rendering ─────────────────────────────────
  const page = document.body.dataset.page;
  if (page === 'home')    renderHome();
  if (page === 'about')   renderAbout();
  if (page === 'services') renderServices();
  if (page === 'projects') renderProjects();
  if (page === 'contact') renderContact();

  // ── Scroll effects ──────────────────────────────────────────
  initScrollEffects();
  initNav();
  initHamburger();
});

/* ============================================================
   NAV
   ============================================================ */
function injectNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav__inner">
      <a href="index.html" class="nav__logo">${SITE.name.split(' ')[0]} <span>${SITE.name.split(' ')[1]}</span></a>
      <ul class="nav__links" id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav__hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </div>
    </div>`;
}

function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('site-nav')?.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  btn?.addEventListener('click', () => links?.classList.toggle('open'));
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

/* ============================================================
   FLOATING BUTTONS
   ============================================================ */
function injectFloatingButtons() {
  const el = document.getElementById('float-social');
  if (!el) return;
  el.innerHTML = `
    <a class="float-btn float-whatsapp" href="https://wa.me/918320941691" target="_blank" rel="noopener" title="WhatsApp">
      <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.537 4.055 1.475 5.765L.057 23.882l6.284-1.645A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.614-.5-5.143-1.372l-.369-.218-3.728.977.995-3.637-.24-.374A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
    </a>
    <a class="float-btn float-instagram" href="https://instagram.com/${SITE.contact.instagram}" target="_blank" rel="noopener" title="Instagram">
      <svg viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>`;
}

/* ============================================================
   FOOTER
   ============================================================ */
function injectFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer__logo">${SITE.name.split(' ')[0]} <span>${SITE.name.split(' ')[1]}</span></div>
      <p class="footer__tagline">${SITE.tagline}</p>
      <nav class="footer__nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
      </nav>
      <p class="footer__copy">© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
    </div>`;
}

/* ============================================================
   HOME PAGE
   ============================================================ */
function renderHome() {
  const h = SITE.home;

  // Hero
  document.getElementById('hero-eyebrow').textContent  = 'Interior & Architecture';
  document.getElementById('hero-title').innerHTML = h.headline.replace(/(Pune)/, '<em>$1</em>');
  document.getElementById('hero-sub').textContent = h.subheadline;
  document.getElementById('hero-intro').textContent = h.intro;

  const actions = document.getElementById('hero-actions');
  actions.innerHTML = `
    <a href="${h.cta_primary.href}" class="btn btn-primary">${h.cta_primary.text}</a>
    <a href="${h.cta_secondary.href}" class="btn btn-outline">${h.cta_secondary.text}</a>`;

  const stats = document.getElementById('hero-stats');
  stats.innerHTML = h.stats.map(s => `
    <div class="stat">
      <div class="stat__number">${s.number}</div>
      <div class="stat__label">${s.label}</div>
    </div>`).join('');

  // Featured projects (first 3)
  const grid = document.getElementById('featured-projects');
  if (grid) {
    grid.innerHTML = SITE.projects.slice(0, 3).map(p => projectCard(p)).join('');
  }

  // Featured services (first 4)
  const svc = document.getElementById('featured-services');
  if (svc) {
    svc.innerHTML = SITE.services.slice(0, 4).map(s => `
      <div class="service-card reveal">
        <span class="service-card__icon">${s.icon}</span>
        <div class="service-card__title">${s.title}</div>
        <p class="service-card__desc">${s.description}</p>
      </div>`).join('');
  }
}

/* ============================================================
   ABOUT PAGE
   ============================================================ */
function renderAbout() {
  const a = SITE.about;
  const imgEl = document.getElementById('about-image');
  if (imgEl) {
    imgEl.onerror = function() { this.replaceWith(makePlaceholder('about-image-placeholder', 'SD')); };
    imgEl.src = a.image;
    imgEl.alt = 'Swati Deshpande – Interior Designer';
    imgEl.className = 'about-image-main';
  }

  document.getElementById('about-quote').textContent = `"${a.quote}"`;
  document.getElementById('about-paras').innerHTML = a.paragraphs.map(p => `<p>${p}</p>`).join('');
  document.getElementById('expertise-list').innerHTML = a.expertise.map(e =>
    `<div class="expertise-item reveal">${e}</div>`).join('');
}

/* ============================================================
   SERVICES PAGE
   ============================================================ */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = SITE.services.map(s => `
    <div class="service-card reveal">
      <span class="service-card__icon">${s.icon}</span>
      <div class="service-card__title">${s.title}</div>
      <p class="service-card__desc">${s.description}</p>
    </div>`).join('');
}

/* ============================================================
   PROJECTS PAGE
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const bar  = document.getElementById('filter-bar');
  if (!grid) return;

  const categories = ['All', ...new Set(SITE.projects.map(p => p.category))];

  bar.innerHTML = categories.map((c, i) =>
    `<button class="filter-btn${i===0?' active':''}" data-cat="${c}">${c}</button>`).join('');

  const render = (cat) => {
    const items = cat === 'All' ? SITE.projects : SITE.projects.filter(p => p.category === cat);
    grid.innerHTML = items.map(p => projectCard(p)).join('');
    initScrollEffects();
  };

  render('All');

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.cat);
  });
}

/* ============================================================
   CONTACT PAGE
   ============================================================ */
function renderContact() {
  const c  = SITE.contact;
  const cp = SITE.contact_page;

  document.getElementById('contact-subtitle').textContent = cp.subtitle;

  const details = document.getElementById('contact-details');
  details.innerHTML = `
    <div class="contact-detail reveal">
      <div class="contact-detail__icon">📍</div>
      <div>
        <div class="contact-detail__label">Location</div>
        <div class="contact-detail__value">${c.location}</div>
      </div>
    </div>
    <div class="contact-detail reveal">
      <div class="contact-detail__icon">📞</div>
      <div>
        <div class="contact-detail__label">Phone</div>
        <div class="contact-detail__value"><a href="tel:${c.phone}">+91 ${c.phone}</a></div>
      </div>
    </div>
    <div class="contact-detail reveal">
      <div class="contact-detail__icon">✉️</div>
      <div>
        <div class="contact-detail__label">Email</div>
        <div class="contact-detail__value"><a href="mailto:${c.email}">${c.email}</a></div>
      </div>
    </div>
    <div class="contact-detail reveal">
      <div class="contact-detail__icon">📸</div>
      <div>
        <div class="contact-detail__label">Instagram</div>
        <div class="contact-detail__value"><a href="https://instagram.com/${c.instagram}" target="_blank">@${c.instagram}</a></div>
      </div>
    </div>`;

  const form = document.getElementById('contact-form');
  form.action = cp.form_endpoint;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(cp.form_endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        document.getElementById('form-success').classList.add('show');
      } else {
        alert('Something went wrong. Please try again or email directly.');
      }
    } catch {
      alert('Could not send. Please email directly at ' + SITE.contact.email);
    } finally {
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }
  });
}

/* ============================================================
   HELPERS
   ============================================================ */
function projectCard(p) {
  const img = p.image
    ? `<img class="project-card__img" src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.style.background='#f2ede6';this.style.minHeight='260px';this.removeAttribute('src');">`
    : `<div class="project-card__img" style="background:linear-gradient(135deg,#f2ede6,#ddd5c8);min-height:260px;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:1rem;color:#b8860b;letter-spacing:.12em;">PROJECT IMAGE</div>`;
  return `
    <div class="project-card reveal">
      <div class="project-card__img-wrap">
        ${img}
        <span class="project-card__category">${p.category}</span>
      </div>
      <div class="project-card__body">
        <div class="project-card__title">${p.title}</div>
        <p class="project-card__desc">${p.description}</p>
        <div class="project-card__tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>`;
}

function makePlaceholder(className, text) {
  const d = document.createElement('div');
  d.className = className;
  d.textContent = text;
  return d;
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}
