document.addEventListener('DOMContentLoaded', function () {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
});

document.getElementById('learnMoreBtn').addEventListener('click', function () {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('about').classList.remove('hidden');
    document.getElementById('slider').classList.remove('hidden');
    document.getElementById('images').classList.remove('hidden');
    document.getElementById('reviews').classList.remove('hidden');
    document.getElementById('contacts').classList.remove('hidden');
    document.querySelector('footer').classList.remove('hidden');

    // Включение скролла
    document.body.style.overflow = 'auto';
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
    }, { threshold: 0.45 });

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
    }, { threshold: 0.30 });

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


