document.getElementById('learnMoreBtn').addEventListener('click', function () {
    // Скрыть блок hero
    document.querySelector('.hero').style.display = 'none';
    // Показать остальные секции
    document.getElementById('about').classList.remove('hidden');
    document.getElementById('products').classList.remove('hidden');
    document.getElementById('reviews').classList.remove('hidden');
    document.getElementById('contacts').classList.remove('hidden');
    // Показать футер
    document.querySelector('footer').classList.remove('hidden');
});
