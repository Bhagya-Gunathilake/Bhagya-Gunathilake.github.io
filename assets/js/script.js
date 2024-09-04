const themeToggle = document.getElementById('theme-toggle');
const themeToggleBanner = document.getElementById('theme-toggle-banner');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('harmony-theme');
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleBanner.addEventListener('click', toggleTheme);
