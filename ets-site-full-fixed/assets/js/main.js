
// /assets/js/main.js  — minimal site JS (menu + reveal)
(function () {
  // Mobile menu toggle (if present)
  window.toggleMenu = function () {
    var m = document.querySelector('.menu');
    if (m) m.classList.toggle('open');
  };

  // Mark that JS is active so reveal CSS can animate
  document.documentElement.classList.add('reveal-ready');

  // Reveal-on-scroll with IntersectionObserver
  var els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    // Old browsers: just show everything
    els.forEach(function (el) { el.classList.add('revealed'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { root: null, threshold: 0.12 });

  els.forEach(function (el) { io.observe(el); });
})();
