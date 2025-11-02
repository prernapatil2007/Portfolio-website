// Basic interactions: mobile nav toggle, smooth scroll, contact form mock behavior, update year
document.addEventListener('DOMContentLoaded', function () {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle?.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // hide mobile nav after selection
        if (window.innerWidth < 700 && nav.style.display === 'flex') nav.style.display = 'none';
      }
    });
  });

  // contact form (mock submit)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const message = document.getElementById('cmessage').value.trim();
    if (!name || !email || !message) {
      status.style.color = 'red';
      status.textContent = 'Please fill all fields.';
      return;
    }

    // Here you would integrate email sending (EmailJS, backend, or formspree)
    // For now show a friendly message and reset:
    status.style.color = 'green';
    status.textContent = 'Message sent! (This is a demo — connect a form service to send real emails.)';
    form.reset();
    setTimeout(() => status.textContent = '', 5000);
  });
});
