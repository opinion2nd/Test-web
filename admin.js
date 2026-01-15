function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  if (u === "admin" && p === "1234") {
    localStorage.setItem("admin", "true");
    window.location.href = "admin.html";
  } else {
    msg.innerText = "❌ Wrong username or password";
  }
}

function logout() {
  localStorage.removeItem("admin");
  window.location.href = "index.html";
}

// Protect admin page
if (window.location.pathname.includes("admin.html")) {
  if (localStorage.getItem("admin") !== "true") {
    window.location.href = "admin-login.html";
  }
}
