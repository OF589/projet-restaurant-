document.getElementById('loginBtn').addEventListener('click', ()=>{
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if(username === 'admin' && password === 'admin'){
        window.location.href = 'dashboard.html';
    } else {
        errorMsg.textContent = "Nom d'utilisateur ou mot de passe incorrect";
    }
});// Fonction de connexion
