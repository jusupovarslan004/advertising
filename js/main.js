document.getElementById('learnMoreBtn').addEventListener('click', function () {
    // Скрыть блок hero
    document.querySelector('.hero').style.display = 'none';

    // Показать остальные секции
    document.getElementById('about').classList.remove('hidden');
    document.getElementById('images').classList.remove('hidden');
    document.getElementById('products').classList.remove('hidden');
    document.getElementById('reviews').classList.remove('hidden');
    document.getElementById('contacts').classList.remove('hidden');

    // Показать футер
    document.querySelector('footer').classList.remove('hidden');

    // Включить скролл
    document.body.style.overflow = 'auto';

    // Прокрутить на самый верх страницы
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function () {
    // Отключаем скролл при загрузке страницы
    document.body.style.overflow = 'hidden';

    const sections = document.querySelectorAll('.section-to-animate');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Прокрутить страницу на самый верх при загрузке
    window.scrollTo(0, 0);
});



// Функция для проверки, находится ли элемент в зоне видимости
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Обработчик прокрутки
function onScroll() {
    const elements = document.querySelectorAll('.appear-from-right');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Добавляем обработчик событий прокрутки
window.addEventListener('scroll', onScroll);

// Активируем анимацию для элементов, которые уже находятся в зоне видимости при загрузке страницы
onScroll();
