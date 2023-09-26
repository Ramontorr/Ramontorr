// script.js
const searchInput = document.getElementById('search');
const images = document.querySelectorAll('.image');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    images.forEach(image => {
        const title = image.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});
