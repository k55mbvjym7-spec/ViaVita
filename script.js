// =============================
// МОБИЛЬНОЕ МЕНЮ
// =============================

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    menuToggle.textContent = menu.classList.contains('active')
        ? '×'
        : '☰';
});

// Закрываем меню после перехода по ссылке

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});


// =============================
// СТРЕЛКА ВОЗВРАТА НАВЕРХ
// =============================

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// =============================
// ОТПРАВКА ЗАЯВОК VIA VITA
// =============================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', () => {
        const formMessage = document.getElementById('form-message');

        if (formMessage) {
            formMessage.textContent = 'Отправляем вашу заявку...';
        }
    });
}
