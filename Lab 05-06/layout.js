/* layout.js — injects sidebar + topbar into any page that includes it
   Usage: add <div id="app-layout" data-page="PAGEID" data-title="Page Title"></div>
   then <script src="layout.js"></script> before </body>
*/
(function () {
  const SIDEBAR_HTML = `
<div class="sidebar-overlay" id="sidebarOverlay"></div>
<aside class="sidebar" id="sidebar">
  <div class="sidebar-brand"><div class="brand-icon">🛍</div><div class="brand-name">Shop<span>Zone</span></div></div>
  <div class="sidebar-section">
    <div class="sidebar-section-label">Main</div>
    <a href="index.html" class="sidebar-link" data-id="index"><span class="s-icon">🏠</span> Overview</a>
    <a href="task09.html" class="sidebar-link" data-id="task09"><span class="s-icon">📊</span> Dashboard</a>
    <a href="task08.html" class="sidebar-link" data-id="task08"><span class="s-icon">🛒</span> Shop <span class="s-badge">New</span></a>
    <a href="task11.html" class="sidebar-link" data-id="task11"><span class="s-icon">📰</span> Magazine</a>
    <a href="task14.html" class="sidebar-link" data-id="task14"><span class="s-icon">📋</span> Orders</a>
    <a href="task12.html" class="sidebar-link" data-id="task12"><span class="s-icon">📝</span> Registration</a>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-label">Content</div>
    <a href="task06.html" class="sidebar-link" data-id="task06"><span class="s-icon">🖼</span> Gallery</a>
    <a href="task13.html" class="sidebar-link" data-id="task13"><span class="s-icon">💼</span> Portfolio</a>
    <a href="projects.html" class="sidebar-link" data-id="projects"><span class="s-icon">🚀</span> Projects</a>
    <a href="about.html" class="sidebar-link" data-id="about"><span class="s-icon">ℹ️</span> About</a>
    <a href="task02.html" class="sidebar-link" data-id="task02"><span class="s-icon">📰</span> Magazine</a>
    <a href="task15.html" class="sidebar-link" data-id="task15"><span class="s-icon">🚀</span> Landing Page</a>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-label">System</div>
    <a href="task18.html" class="sidebar-link" data-id="task18"><span class="s-icon">🌙</span> Dark Mode</a>
    <a href="task17.html" class="sidebar-link" data-id="task17"><span class="s-icon">🧩</span> Utilities</a>
    <a href="task16.html" class="sidebar-link" data-id="task16"><span class="s-icon">📐</span> Breakpoints</a>
    <a href="task10.html" class="sidebar-link" data-id="task10"><span class="s-icon">📱</span> Media Queries</a>
    <a href="task01.html" class="sidebar-link" data-id="task01"><span class="s-icon">🎨</span> Display Props</a>
    <a href="task03.html" class="sidebar-link" data-id="task03"><span class="s-icon">📌</span> Positioning</a>
    <a href="task04.html" class="sidebar-link" data-id="task04"><span class="s-icon">🧭</span> Navigation</a>
    <a href="task05.html" class="sidebar-link" data-id="task05"><span class="s-icon">🃏</span> Cards</a>
    <a href="task07.html" class="sidebar-link" data-id="task07"><span class="s-icon">⚙</span> Holy Grail</a>
  </div>
  <div class="sidebar-footer">ShopZone v2.0 · UET Peshawar</div>
</aside>`;

  document.addEventListener('DOMContentLoaded', function () {
    // inject sidebar before body content
    const meta = document.getElementById('app-layout');
    if (!meta) return;
    const pageId = meta.getAttribute('data-page') || '';
    const title  = meta.getAttribute('data-title') || 'Page';

    // insert sidebar
    meta.insertAdjacentHTML('beforebegin', SIDEBAR_HTML);

    // mark active
    document.querySelectorAll('.sidebar-link[data-id]').forEach(function (l) {
      if (l.getAttribute('data-id') === pageId) l.classList.add('active');
    });

    // topbar
    const topbar = document.getElementById('topbar');
    if (topbar) {
      document.querySelector('.topbar-title') && (document.querySelector('.topbar-title').textContent = title);
    }

    // sidebar toggle
    const sidebar  = document.getElementById('sidebar');
    const overlay  = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburger');
    hamburger && hamburger.addEventListener('click', function () { sidebar.classList.add('open'); overlay.classList.add('open'); });
    overlay   && overlay.addEventListener('click', function () { sidebar.classList.remove('open'); overlay.classList.remove('open'); });
  });
})();
