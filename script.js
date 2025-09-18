// Dark/Light theme toggle
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click', () => {
    const curr = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', curr);
    localStorage.setItem('theme', curr);
  });
})();

// Intersection-based reveal animations
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

// Contact form handler (no backend, just simulates send and opens mailto link)
function handleContact(ev) {
  ev.preventDefault();
  const form = ev.currentTarget;
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const status = document.getElementById('formStatus');
  status.textContent = 'Preparing email…';

  const mailto = `mailto:2200032411cseh@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} <${email}>
\n${message}`)}`;
  setTimeout(() => {
    status.textContent = 'Opening your email client…';
    window.location.href = mailto;
  }, 400);
}

// Year in footer
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
