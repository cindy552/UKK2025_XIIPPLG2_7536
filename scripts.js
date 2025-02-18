// Data pengguna dan sesi
const users = [];
let currentUser = null;

// Elemen DOM
const authContainer = document.getElementById('authContainer');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const libraryContainer = document.getElementById('libraryContainer');
const adminRegisterForm = document.getElementById('adminRegisterForm');
const adminLoginForm = document.getElementById('adminLoginForm');
const logoutButton = document.getElementById('logoutButton');

const bookForm = document.getElementById('bookForm');
const bookTitleInput = document.getElementById('bookTitle');
const bookList = document.getElementById('bookList');

const reviewForm = document.getElementById('reviewForm');
const reviewTextInput = document.getElementById('reviewText');
const reviewList = document.getElementById('reviewList');

// Navigasi antara formulir login dan registrasi
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

    if (users.some(user => user.username === username)) {
        alert('Username sudah terdaftar!');
        return;
    }

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

// Tambah buku
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = bookTitleInput.value.trim();

    if (title) {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const bookTitle = document.createElement('span');
        bookTitle.className = 'book-title';
        bookTitle.textContent = title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = () => bookDiv.remove();

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(deleteButton);
        bookList.appendChild(bookDiv);

        bookTitleInput.value = '';
    }
});

// Kirim ulasan
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const reviewText = reviewTextInput.value.trim();

    if (reviewText) {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';

        const reviewContent = document.createElement('p');
        reviewContent.textContent = reviewText;

        reviewDiv.appendChild(reviewContent);
        reviewList.appendChild(reviewDiv);

        reviewTextInput.value = '';
    }
});

