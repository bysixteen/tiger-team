/* ══════════════════════════════════════════════════
   Project Squad Framework — Layout Injection
   layout.js v3.0.0

   Unified sidebar for all page types. No context
   switcher — visible groups populated from sprints.json.

   Sprint 002 decision: research showed version switchers
   are the wrong pattern for content navigation. Replaced
   with persistent sidebar groups.

   Attributes:
     data-layout      "docs" | "sprint" | "spike"
     data-active-nav  ID of the active nav item
     data-root        Relative path to site root (e.g. "." or "../..")
     data-sprint      Sprint number (for sprint layout)
     data-spike       Spike number (for spike layout)
   ══════════════════════════════════════════════════ */

(function () {
  'use strict';

  var body = document.body;
  var layout = body.getAttribute('data-layout') || 'docs';
  var activeNav = body.getAttribute('data-active-nav') || '';
  var root = body.getAttribute('data-root') || '.';

  if (root.length > 1 && root.charAt(root.length - 1) === '/') {
    root = root.slice(0, -1);
  }

  function href(path) {
    return root + '/' + path;
  }

  // ── STATIC NAV DEFINITION ──

  var staticNav = [
    {
      label: 'Portal',
      items: [
        { id: 'home', text: 'Home', path: 'index.html' },
        { id: 'gallery', text: 'Gallery', path: 'gallery.html' }
      ]
    },
    {
      label: 'Guides',
      collapsible: true,
      defaultOpen: true,
      items: [
        { id: 'decision-guide', text: 'Decision Guide', path: 'decision-guide.html' }
      ]
    }
  ];

  // ── BUILD HEADER ──

  var header = document.createElement('header');
  header.className = 'site-header';

  var logoLink = document.createElement('a');
  logoLink.className = 'logo';
  logoLink.href = href('index.html');
  logoLink.textContent = 'Project Squad Framework';

  var version = document.createElement('div');
  version.className = 'version';
  version.textContent = 'v1.2.1';

  header.appendChild(logoLink);
  header.appendChild(version);

  // ── BUILD SIDEBAR ──

  var sidebar = document.createElement('nav');
  sidebar.className = 'sidebar';

  // Static groups — render immediately (no flash)
  buildGroups(staticNav, sidebar);

  // On-page sections — always last
  addOnPageGroup(sidebar);

  // Dynamic groups — fetch sprints.json, insert before On This Page
  fetch(href('sprints.json'))
    .then(function (r) { return r.json(); })
    .then(function (data) { buildDynamicGroups(data, sidebar); })
    .catch(function () { /* sidebar works without dynamic groups */ });

  // ── INJECT INTO PAGE ──

  var wrapper = document.querySelector('.page-wrapper');
  if (wrapper) {
    body.insertBefore(header, wrapper);
    wrapper.insertBefore(sidebar, wrapper.firstChild);
  }

  // ── SCROLL SPY ──

  setupScrollSpy();

  // ── HELPER: BUILD GROUPS ──

  function buildGroups(groups, container) {
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var groupEl = document.createElement('div');
      groupEl.className = 'sidebar-group';

      if (group.collapsible) {
        groupEl.setAttribute('data-state', group.defaultOpen ? 'open' : 'closed');
      }

      // Group label
      var labelEl = document.createElement('div');
      labelEl.className = 'sidebar-group-label';
      labelEl.textContent = group.label;

      if (group.collapsible) {
        labelEl.setAttribute('data-collapsible', '');
        var chevron = document.createElement('span');
        chevron.className = 'chevron';
        labelEl.appendChild(chevron);

        labelEl.addEventListener('click', (function (el) {
          return function () {
            var state = el.getAttribute('data-state');
            el.setAttribute('data-state', state === 'open' ? 'closed' : 'open');
          };
        })(groupEl));
      }

      groupEl.appendChild(labelEl);

      // Group content
      var contentEl = document.createElement('div');
      contentEl.className = 'sidebar-group-content';

      var menuEl = document.createElement('div');
      menuEl.className = 'sidebar-menu';

      for (var j = 0; j < group.items.length; j++) {
        var item = group.items[j];
        var link = document.createElement('a');
        link.className = 'sidebar-menu-item';
        link.href = href(item.path);
        link.textContent = item.text;

        if (item.back) {
          link.classList.add('back-link');
        }
        if (item.id && item.id === activeNav) {
          link.classList.add('active');
        }

        menuEl.appendChild(link);
      }

      contentEl.appendChild(menuEl);
      groupEl.appendChild(contentEl);
      container.appendChild(groupEl);
    }
  }

  // ── HELPER: DYNAMIC GROUPS FROM sprints.json ──

  function buildDynamicGroups(data, container) {
    var types = ['sprint', 'spike', 'workshop'];
    var labels = { sprint: 'Sprints', spike: 'Spikes', workshop: 'Workshops' };
    var currentUrl = window.location.href.replace(/\/$/, '');

    // Find where to insert (before On This Page group, or at end)
    var onPageGroup = null;
    var groups = container.querySelectorAll('.sidebar-group');
    for (var g = 0; g < groups.length; g++) {
      var label = groups[g].querySelector('.sidebar-group-label');
      if (label && label.textContent.indexOf('On This Page') !== -1) {
        onPageGroup = groups[g];
        break;
      }
    }

    for (var t = 0; t < types.length; t++) {
      var type = types[t];
      var items = [];

      for (var i = 0; i < data.length; i++) {
        if (data[i].type === type) {
          items.push(data[i]);
        }
      }

      if (items.length === 0) continue;

      // Build group
      var groupEl = document.createElement('div');
      groupEl.className = 'sidebar-group';
      groupEl.setAttribute('data-state', 'open');

      var labelEl = document.createElement('div');
      labelEl.className = 'sidebar-group-label';
      labelEl.setAttribute('data-collapsible', '');
      labelEl.textContent = labels[type];

      var chevron = document.createElement('span');
      chevron.className = 'chevron';
      labelEl.appendChild(chevron);

      labelEl.addEventListener('click', (function (el) {
        return function () {
          var state = el.getAttribute('data-state');
          el.setAttribute('data-state', state === 'open' ? 'closed' : 'open');
        };
      })(groupEl));

      groupEl.appendChild(labelEl);

      var contentEl = document.createElement('div');
      contentEl.className = 'sidebar-group-content';

      var menuEl = document.createElement('div');
      menuEl.className = 'sidebar-menu';

      for (var j = 0; j < items.length; j++) {
        var entry = items[j];
        var link = document.createElement('a');
        link.className = 'sidebar-menu-item';
        link.href = href(entry.href);
        link.textContent = entry.topic;

        // Active state: compare resolved URL
        var resolvedUrl = link.href.replace(/\/$/, '');
        if (resolvedUrl === currentUrl) {
          link.classList.add('active');
        }

        menuEl.appendChild(link);
      }

      contentEl.appendChild(menuEl);
      groupEl.appendChild(contentEl);

      // Insert before On This Page, or append at end
      if (onPageGroup) {
        container.insertBefore(groupEl, onPageGroup);
      } else {
        container.appendChild(groupEl);
      }
    }
  }

  // ── HELPER: ON-PAGE GROUP ──

  function addOnPageGroup(container) {
    var main = document.querySelector('.main');
    if (!main) return;

    var headings = main.querySelectorAll('[id]');
    if (headings.length === 0) return;

    var items = [];
    for (var i = 0; i < headings.length; i++) {
      var el = headings[i];
      var id = el.id;
      var text = '';
      var h2 = el.querySelector('h2');
      var h1 = el.querySelector('h1');
      if (h2) {
        text = h2.textContent;
      } else if (h1) {
        text = h1.textContent;
      } else if (el.tagName === 'H2' || el.tagName === 'H1') {
        text = el.textContent;
      } else {
        continue;
      }
      if (text) {
        items.push({ id: id, text: text });
      }
    }

    if (items.length === 0) return;

    var groupEl = document.createElement('div');
    groupEl.className = 'sidebar-group';
    groupEl.setAttribute('data-state', 'open');

    var labelEl = document.createElement('div');
    labelEl.className = 'sidebar-group-label';
    labelEl.setAttribute('data-collapsible', '');
    labelEl.textContent = 'On This Page';

    var chevron = document.createElement('span');
    chevron.className = 'chevron';
    labelEl.appendChild(chevron);

    labelEl.addEventListener('click', function () {
      var state = groupEl.getAttribute('data-state');
      groupEl.setAttribute('data-state', state === 'open' ? 'closed' : 'open');
    });

    groupEl.appendChild(labelEl);

    var contentEl = document.createElement('div');
    contentEl.className = 'sidebar-group-content';

    var menuEl = document.createElement('div');
    menuEl.className = 'sidebar-menu';

    for (var j = 0; j < items.length; j++) {
      var link = document.createElement('a');
      link.className = 'sidebar-menu-item';
      link.href = '#' + items[j].id;
      link.textContent = items[j].text;
      link.setAttribute('data-section-id', items[j].id);
      menuEl.appendChild(link);
    }

    contentEl.appendChild(menuEl);
    groupEl.appendChild(contentEl);
    container.appendChild(groupEl);
  }

  // ── SCROLL SPY ──

  function setupScrollSpy() {
    if (!('IntersectionObserver' in window)) return;

    var sectionLinks = sidebar.querySelectorAll('[data-section-id]');
    if (sectionLinks.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          for (var i = 0; i < sectionLinks.length; i++) {
            var linkEl = sectionLinks[i];
            var group = linkEl.closest('.sidebar-group');
            var isOpen = !group || group.getAttribute('data-state') !== 'closed';
            var isMatch = linkEl.getAttribute('data-section-id') === id;

            if (isMatch && isOpen) {
              linkEl.classList.add('active');
            } else {
              linkEl.classList.remove('active');
            }
          }
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    var ids = [];
    for (var i = 0; i < sectionLinks.length; i++) {
      ids.push(sectionLinks[i].getAttribute('data-section-id'));
    }

    for (var j = 0; j < ids.length; j++) {
      var el = document.getElementById(ids[j]);
      if (el) observer.observe(el);
    }
  }
})();
