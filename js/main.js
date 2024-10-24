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

document.addEventListener('DOMContentLoaded', function () {
    // Отключаем скролл при загрузке страницы
    document.body.style.overflow = 'hidden';

    const sections = document.querySelectorAll('.section-to-animate');
    const appearElements = document.querySelectorAll('.appear-from-right');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.55 });

    sections.forEach(section => {
        observer.observe(section);
    });

    appearElements.forEach((element, index) => {
        observer.observe(element);
        element.style.transitionDelay = `${index * 0.2}s`; // Задержка появления элементов
    });

    // Прокрутить страницу на самый верх при загрузке
    window.scrollTo(0, 0);
});


