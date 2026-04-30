// Desk Work Dan - shared site script
// Keep this file tiny. No frameworks, no trackers.
(function () {
  // Mobile nav toggle
  var btn = document.getElementById('navToggle');
  var menu = document.getElementById('mobileNav');
  var iconOpen = document.getElementById('iconOpen');
  var iconClose = document.getElementById('iconClose');

  if (btn && menu) {
    btn.addEventListener('click', function () {
      var isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
      }
    });

    // Close mobile menu when a link inside it is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (!menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
          if (iconOpen && iconClose) {
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
          }
        }
      });
    });
  }

  // Auto-update copyright year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
