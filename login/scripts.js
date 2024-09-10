function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'mag12710') {
        sessionStorage.setItem('role', 'admin');
        window.location.href = 'admin/index.html';
        return false;
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos';
        return false;
    }
}
