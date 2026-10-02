/* shared.js — sidebar toggle + dark/light theme */

(function () {
  /* ---- THEME ---- */
  let saved = 'light';
  try { saved = localStorage.getItem('theme') || 'light'; } catch { /* Use the default theme when storage is disabled. */ }
  document.documentElement.setAttribute('data-theme', saved);

  function updateThemeBtn() {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;
    btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }

  window.toggleTheme = function () {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch { /* The selected theme still applies for this page. */ }
    updateThemeBtn();
  };

  window.addEventListener('message', function (event) {
    if (event.source !== window.parent || event.data?.channel !== 'shopzone:theme') return;
    const theme = event.data.theme;
    if (theme !== 'light' && theme !== 'dark') return;
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (error) { /* Keep the page theme even when storage is unavailable. */ }
    updateThemeBtn();
  });

  document.addEventListener('DOMContentLoaded', function () {
    updateThemeBtn();

    /* ---- SIDEBAR TOGGLE ---- */
    const sidebar  = document.getElementById('sidebar');
    const overlay  = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburger');

    function openSidebar()  { sidebar && sidebar.classList.add('open'); overlay && overlay.classList.add('open'); }
    function closeSidebar() { sidebar && sidebar.classList.remove('open'); overlay && overlay.classList.remove('open'); }

    hamburger && hamburger.addEventListener('click', openSidebar);
    overlay   && overlay.addEventListener('click', closeSidebar);

    /* ---- ACTIVE LINK ---- */
    const links = document.querySelectorAll('.sidebar-link');
    const page  = location.pathname.split('/').pop();
    links.forEach(function (l) {
      if (l.getAttribute('href') === page) l.classList.add('active');
    });
  });
})();
