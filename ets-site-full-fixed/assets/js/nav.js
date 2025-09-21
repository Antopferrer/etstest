
/* ETS Group - mobile menu toggle */
(function () {
  function onDocClick(e) {
    var btn = e.target.closest && e.target.closest('.mobile-toggle');
    if (!btn) return;
    var hdr = document.querySelector('header');
    if (!hdr) return;
    var isOpen = hdr.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  // Close menu when clicking a link inside the opened menu (optional, nicer UX)
  function onNavClick(e) {
    var link = e.target.closest && e.target.closest('a');
    if (!link) return;
    var hdr = document.querySelector('header');
    if (!hdr) return;
    if (hdr.classList.contains('open')) {
      hdr.classList.remove('open');
      var btn = document.querySelector('.mobile-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  }

  document.addEventListener('click', onDocClick);
  document.addEventListener('click', function (e) {
    var nav = e.target.closest && e.target.closest('nav.menu');
    if (nav) onNavClick(e);
  });

  // Close when pressing Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var hdr = document.querySelector('header');
      if (hdr && hdr.classList.contains('open')) {
        hdr.classList.remove('open');
        var btn = document.querySelector('.mobile-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    }
  });
})();
