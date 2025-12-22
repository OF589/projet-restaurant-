// Fonction de connexion
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === "admin" && password === "admin") {
    // Redirection vers le dashboard
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Identifiant ou mot de passe incorrect";
  }
}

// Fonction de déconnexion
function logout() {
  window.location.href = "index.html";
}
