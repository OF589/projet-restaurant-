function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    // Identifiants simples (exemple)
    if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Nom d'utilisateur ou mot de passe incorrect";
    }
}
