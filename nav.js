/* Mobile / tablet hamburger menu
   Shared by every page. Add <script src="nav.js"></script> inside <head>. */

// Mark the page as JS-enabled right away so the menu never flashes open on phones.
// (If JavaScript is off, the CSS leaves the menu visible as a simple list.)
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-nav');
  if (!toggle || !menu) return;

  var BREAKPOINT = 900; // keep in sync with the 900px media query in style.css

  function setOpen(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close after choosing a link
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Close with the Escape key (and return focus to the button)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when tapping outside the header
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar')) setOpen(false);
  });

  // Reset if the window is resized up to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth > BREAKPOINT) setOpen(false);
  });
});
