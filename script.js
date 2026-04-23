// Мобильное меню
const toggleBtn = document.getElementById('mobileToggle');
const navMenu = document.querySelector('.nav');
const phoneBlock = document.querySelector('.header-phone');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
            if(phoneBlock) phoneBlock.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '80px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            navMenu.style.gap = '15px';
            if(phoneBlock) {
                phoneBlock.style.display = 'block';
                phoneBlock.style.position = 'absolute';
                phoneBlock.style.top = '220px';
                phoneBlock.style.left = '20px';
            }
        }
    });
}

// Плавный скролл для навигации
document.querySelectorAll('.nav a, .hero-buttons .btn-outline').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Закрываем мобильное меню, если открыто
                if(window.innerWidth <= 900 && navMenu.style.display === 'flex') {
                    navMenu.style.display = 'none';
                    if(phoneBlock) phoneBlock.style.display = 'none';
                }
            }
        }
    });
});

// Обработка формы
const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
}

// Кнопки "Рассчитать стоимость" и "Наши проекты"
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(btn.innerText.includes('Рассчитать')) {
            document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
        }
        if(btn.innerText.includes('проекты')) {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    });
});