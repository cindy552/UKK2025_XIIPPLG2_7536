// Data pengguna
const users = []; // Simpan daftar pengguna
let currentUser = null; // Simpan sesi pengguna saat ini

// Elemen DOM
const authContainer = document.getElementById('authContainer');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const libraryContainer = document.getElementById('libraryContainer');
const adminRegisterForm = document.getElementById('adminRegisterForm');
const adminLoginForm = document.getElementById('adminLoginForm');
const logoutButton = document.getElementById('logoutButton');

// Navigasi antara login dan registrasi
document.getElementById('toRegister').addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

document.getElementById('toLogin').addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Registrasi
adminRegisterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    // Periksa jika username sudah ada
    if (users.some(user => user.username === username)) {
        alert('Username sudah terdaftar!');
        return;
    }

    // Tambahkan pengguna baru
    users.push({ username, password });
    alert('Registrasi berhasil! Silakan login.');
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Login
adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value.trim();

    // Periksa kredensial
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        currentUser = user;
        alert(`Selamat datang, ${username}!`);
        authContainer.style.display = 'none';
        libraryContainer.style.display = 'block';
    } else {
        alert('Username atau password salah!');
    }
});

// Logout
logoutButton.addEventListener('click', () => {
    currentUser = null;
    libraryContainer.style.display = 'none';
    authContainer.style.display = 'block';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});
