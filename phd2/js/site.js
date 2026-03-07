// ARIES site helpers: reveal-on-scroll + module-nav scrollspy
(function () {
  // Reveal animations
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }

  // Scrollspy for module nav (if present)
  const moduleNav = document.querySelector('.module-nav');
  const moduleLinks = moduleNav ? Array.from(moduleNav.querySelectorAll('a[href^="#"]')) : [];
  if (moduleLinks.length) {
    const targets = moduleLinks
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const setActive = (id) => {
      moduleLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href === '#' + id) a.classList.add('active');
        else a.classList.remove('active');
      });
    };

    // Add a small active style via inline class hook (CSS not required, but nice)
    const style = document.createElement('style');
    style.textContent = `.module-nav-link.active{ color: var(--ink); background: rgba(14,13,11,0.06); }`;
    document.head.appendChild(style);

    const spy = new IntersectionObserver((entries) => {
      // choose the most visible intersecting section
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => (b.intersectionRatio - a.intersectionRatio));
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-30% 0px -60% 0px', threshold: [0.15, 0.25, 0.35] });

    targets.forEach(t => spy.observe(t));

    // set initial
    const hash = (location.hash || '').replace('#','');
    if (hash) setActive(hash);
    else if (targets[0]) setActive(targets[0].id);
  }

  // Mobile menu toggle
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    const closeMenu = () => {
      mobileNav.classList.remove('open');
      toggle.classList.remove('open');
    };
    closeMenu(); // Ensure menu is closed on load
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    // Close menu when clicking a link
    const links = mobileNav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });
  }
})();