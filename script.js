document.addEventListener('DOMContentLoaded', () => {
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

    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
});
