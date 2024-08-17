document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const imgElements = document.querySelectorAll('.clickable');
    let currentIndex = 0;

    imgElements.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showLightbox();
        });
    });

    function showLightbox() {
        lightbox.innerHTML = `
            <div class="lightbox-controls">
                <span id="prev">&lt;</span>
                <span id="next">&gt;</span>
            </div>
            <img src="${imgElements[currentIndex].src}" alt="${imgElements[currentIndex].alt}">
        `;
        lightbox.classList.add('active');

        // Adiciona os event listeners aos botões de navegação após a criação
        document.getElementById('prev').addEventListener('click', showPreviousImage);
        document.getElementById('next').addEventListener('click', showNextImage);
    }

    function showPreviousImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imgElements.length - 1;
        updateLightbox();
    }

    function showNextImage() {
        currentIndex = (currentIndex < imgElements.length - 1) ? currentIndex + 1 : 0;
        updateLightbox();
    }

    function updateLightbox() {
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.src = imgElements[currentIndex].src;
        lightboxImg.alt = imgElements[currentIndex].alt;
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
});
