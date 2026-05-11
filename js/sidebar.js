// ============================================================
// sidebar.js — Injects the sidebar HTML into any page
// Call: renderSidebar("dashboard") where the string is
//       the active nav item key.
// ============================================================

function renderSidebar(activePage) {
  const navItems = [
    { key: "dashboard", href: "dashboard.html", icon: "", label: "Dashboard" },
    { key: "users", href: "users.html", icon: "", label: "Users" },
    { key: "listings", href: "listings.html", icon: "", label: "Car Listings" },
    { key: "reports", href: "reports.html", icon: "", label: "Reports" },
    { key: "inquiries", href: "inquiries.html", icon: "", label: "Inquiries" },
  ];

  const navHTML = navItems
    .map(function (item) {
      const cls = item.key === activePage ? " active" : "";
      return `<a href="${item.href}" class="${cls}">
      <span class="nav-icon">${item.icon}</span> ${item.label}
    </a>`;
    })
    .join("");

  const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">🚗</div>
        <div class="brand">CarAdmin <span>Admin Panel</span></div>
      </div>
      <nav>${navHTML}</nav>
      <div class="sidebar-bottom">
        <div class="admin-tag" id="admin-name-tag"><strong>Admin</strong></div>
        <button class="btn-logout" onclick="logout()">Logout</button>
      </div>
    </aside>
  `;

  // Inject before the .main element
  document
    .querySelector(".layout")
    .insertAdjacentHTML("afterbegin", sidebarHTML);

  // Mobile toggle
  document
    .querySelector(".menu-toggle")
    ?.addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("open");
    });
}

// Populate admin name in sidebar after auth check
function setAdminName(user) {
  db.ref("users/" + user.uid + "/fullname").once("value", function (snap) {
    const el = document.getElementById("admin-name-tag");
    if (el && snap.val()) el.innerHTML = `<strong>${snap.val()}</strong>`;
  });
}
