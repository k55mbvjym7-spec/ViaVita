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


const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        formMessage.textContent = 'Отправляем вашу заявку...';

        const formData = {
            name: contactForm.querySelector('#name').value,
            email: contactForm.querySelector('#email').value,
            message: contactForm.querySelector('#message').value,
            _subject: 'Новая заявка ViaVita'
        };

        try {
            const response = await fetch(
                'https://formsubmit.co/d0f4da3bfff9ca8544cfd1566cedf3f5',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                formMessage.textContent =
                    'Спасибо! Ваша заявка успешно отправлена';

                contactForm.reset();
            } else {
                formMessage.textContent =
                    'Не удалось отправить заявку. Попробуйте ещё раз.';
            }

        } catch (error) {
            formMessage.textContent =
                'Ошибка соединения. Попробуйте немного позже.';
        }
    });
}
