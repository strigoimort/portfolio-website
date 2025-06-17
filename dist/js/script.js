document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const toTop = document.querySelector('#to-top');
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');

  // Sticky Navbar + Scroll-to-Top
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY > header.offsetTop) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
      toTop.style.display = 'block';
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
      toTop.style.display = 'none';
    }
  });

  // Hamburger Toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });

  // Outside Click to Close Nav
  window.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });

  // Scroll to Top Button
  toTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Smooth Scroll Navigation + Close Mobile Menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = header.offsetHeight;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      }

      // Close nav on mobile
      if (!navMenu.classList.contains('hidden')) {
        navMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
      }
    });
  });
});
