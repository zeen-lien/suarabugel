/* ===== SUARA BUGEL – script.js ===== */
'use strict';

/* ---------- NAVBAR ---------- */
const navbar    = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  backToTop.classList.toggle('visible', y > 400);
}, { passive: true });

/* ---------- HAMBURGER ---------- */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
const navBackdrop = document.getElementById('navBackdrop');

let scrollPos = 0;

function openMenu() {
  scrollPos = window.scrollY;
  navLinks.classList.add('open');
  navBackdrop.classList.add('open');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  // Lock body scroll tanpa loncat ke atas
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPos}px`;
  document.body.style.width = '100%';
}

function closeMenu() {
  navLinks.classList.remove('open');
  navBackdrop.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  // Restore scroll
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPos);
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});
navBackdrop.addEventListener('click', closeMenu);
navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeMenu));

/* ---------- PARALLAX ---------- */
const heroBg       = document.querySelector('.hero-bg');
const visiParallax = document.getElementById('visiParallax');

function onScroll() {
  const y = window.scrollY;

  if (heroBg) {
    heroBg.style.transform = `translateY(${y * 0.28}px)`;
  }

  if (visiParallax) {
    const rect   = visiParallax.parentElement.getBoundingClientRect();
    const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.18;
    visiParallax.style.transform = `translateY(${offset}px)`;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- FLOATING PARTICLES ---------- */
function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = window.innerWidth < 768 ? 12 : 22;

  for (let i = 0; i < count; i++) {
    const p   = document.createElement('div');
    const size = Math.random() * 5 + 2; // 2–7px

    p.className = 'particle';
    p.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${Math.random() * 100}%;
      animation-duration:  ${Math.random() * 12 + 8}s;
      animation-delay:    -${Math.random() * 15}s;
      opacity: ${Math.random() * 0.5 + 0.2};
      background: ${Math.random() > .5 ? 'rgba(249,115,22,.45)' : 'rgba(255,255,255,.15)'};
    `;
    container.appendChild(p);
  }
}
spawnParticles();

/* ---------- AOS (custom lightweight) ---------- */
const aosEls = document.querySelectorAll('[data-aos]');
const aosObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const delay = parseInt(e.target.dataset.aosDelay || 0, 10);
    setTimeout(() => e.target.classList.add('aos-animate'), delay);
    aosObs.unobserve(e.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
aosEls.forEach(el => aosObs.observe(el));

/* ---------- FAQ ACCORDION ---------- */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    // open current
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

/* ---------- BACK TO TOP ---------- */
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- ACTIVE NAV ON SCROLL ---------- */
const sections = document.querySelectorAll('section[id], footer[id]');
const navItems = document.querySelectorAll('.nav-links .nav-link:not(.nav-cta)');
const secObs   = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.getAttribute('id');
    navItems.forEach(item => item.classList.toggle('active-link', item.getAttribute('href') === `#${id}`));
  });
}, { threshold: 0.35 });
sections.forEach(s => secObs.observe(s));

/* ---------- SMOOTH SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---------- FORM BUTTON PLACEHOLDER ---------- */
const formBtn = document.getElementById('formBtn');
if (formBtn) {
  formBtn.addEventListener('click', e => {
    if (!formBtn.href || formBtn.getAttribute('href') === '#') {
      e.preventDefault();
      showToast('Link Google Form akan segera tersedia. Gunakan WhatsApp untuk sementara.');
    }
  });
}

/* ---------- TOAST ---------- */
function showToast(msg) {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  t.style.cssText = `
    position:fixed; bottom:5rem; left:50%;
    transform:translateX(-50%) translateY(10px);
    background:#0f172a; color:#fff;
    padding:.75rem 1.5rem; border-radius:50px;
    font-size:.82rem; font-family:'Poppins',sans-serif;
    box-shadow:0 8px 24px rgba(0,0,0,.25); z-index:9999;
    opacity:0; transition:all .3s ease;
    max-width:90vw; text-align:center;
    border-left:3px solid #f97316;
  `;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => t.remove(), 300);
  }, 3500);
}
