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
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-to-animate');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25});

    sections.forEach(section => {
        observer.observe(section);
    });
});
