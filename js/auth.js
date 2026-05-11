// ============================================================
// auth.js — Shared authentication helpers
// ============================================================

// Redirect to login if not authenticated or not admin
function requireAdmin(callback) {
  auth.onAuthStateChanged(function (user) {
    if (!user) {
      window.location.href = "login.html";
      return;
    }
    // Check role in database
    db.ref("users/" + user.uid + "/role").once("value", function (snap) {
      if (snap.val() === "admin") {
        if (callback) callback(user);
      } else {
        alert("Access denied. Admins only.");
        auth.signOut().then(function () {
          window.location.href = "login.html";
        });
      }
    });
  });
}

// Logout
function logout() {
  auth.signOut().then(function () {
    window.location.href = "login.html";
  });
}
