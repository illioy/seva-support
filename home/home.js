document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open'); // Animate burger icon
            sidebar.classList.toggle('open');    // Show/hide sidebar
        });
    }

    // Login redirection
    const loginBtn = document.getElementById("openLogin");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            console.log("Navigating to login page");
            window.location.href = "../login/register.html";
        });
    }

    // Language selector with flag icon
    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.getElementById('lang-options');

    const setLang = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(el => {
            el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
        });

        if (langToggle) {
            langToggle.textContent = lang === 'en' ? '🇬🇧' : '🇫🇷';
        }

        localStorage.setItem('lang', lang);
        if (langOptions) langOptions.classList.add('hidden');
    };

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            langOptions?.classList.toggle('hidden');
        });
    }

    document.querySelectorAll('[data-lang-select]').forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang-select');
            setLang(selectedLang);
        });
    });

    // Initial language load
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
});
