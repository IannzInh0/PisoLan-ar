document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const viewFotosBtn = document.getElementById('viewFotos');
    const viewVideosBtn = document.getElementById('viewVideos');
    const fotosContainer = document.getElementById('fotosContainer');
    const videosContainer = document.getElementById('videosContainer');

    viewFotosBtn.addEventListener('click', function () {
        fotosContainer.style.display = 'flex';
        videosContainer.style.display = 'none';
        viewFotosBtn.classList.add('active');
        viewVideosBtn.classList.remove('active');
    });

    viewVideosBtn.addEventListener('click', function () {
        fotosContainer.style.display = 'none';
        videosContainer.style.display = 'flex';
        viewFotosBtn.classList.remove('active');
        viewVideosBtn.classList.add('active');
    });

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

    const videoElements = document.querySelectorAll('.clickable-video');
    let currentVideoIndex = 0;

    videoElements.forEach((video, index) => {
        video.addEventListener('click', () => {
            currentVideoIndex = index;
            showVideoLightbox();
        });
    });

    function showVideoLightbox() {
        lightbox.innerHTML = `
            <div class="lightbox-controls">
                <span id="prevVideo">&lt;</span>
                <span id="nextVideo">&gt;</span>
            </div>
            <video src="${videoElements[currentVideoIndex].src}" controls autoplay></video>
        `;
        lightbox.classList.add('active');

        document.getElementById('prevVideo').addEventListener('click', showPreviousVideo);
        document.getElementById('nextVideo').addEventListener('click', showNextVideo);
    }

    function showPreviousVideo() {
        currentVideoIndex = (currentVideoIndex > 0) ? currentVideoIndex - 1 : videoElements.length - 1;
        updateVideoLightbox();
    }

    function showNextVideo() {
        currentVideoIndex = (currentVideoIndex < videoElements.length - 1) ? currentVideoIndex + 1 : 0;
        updateVideoLightbox();
    }

    function updateVideoLightbox() {
        const lightboxVideo = lightbox.querySelector('video');
        lightboxVideo.src = videoElements[currentVideoIndex].src;
        lightboxVideo.play();
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const lightboxProcesso = document.createElement('div');
    lightboxProcesso.id = 'lightbox-processo';
    lightboxProcesso.classList.add('lightbox-processo');
    document.body.appendChild(lightboxProcesso);

    const viewFotosProcessoBtn = document.getElementById('viewFotosProcesso');
    const viewVideosProcessoBtn = document.getElementById('viewVideosProcesso');
    const fotosProcessoContainer = document.getElementById('fotosProcessoContainer');
    const videosProcessoContainer = document.getElementById('videosProcessoContainer');

    viewFotosProcessoBtn.addEventListener('click', function () {
        fotosProcessoContainer.style.display = 'flex';
        videosProcessoContainer.style.display = 'none';
        viewFotosProcessoBtn.classList.add('active');
        viewVideosProcessoBtn.classList.remove('active');
    });

    viewVideosProcessoBtn.addEventListener('click', function () {
        fotosProcessoContainer.style.display = 'none';
        videosProcessoContainer.style.display = 'flex';
        viewFotosProcessoBtn.classList.remove('active');
        viewVideosProcessoBtn.classList.add('active');
    });

    const imgProcessoElements = document.querySelectorAll('.clickable-processo');
    let currentProcessoIndex = 0;

    imgProcessoElements.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentProcessoIndex = index;
            showProcessoLightbox();
        });
    });

    function showProcessoLightbox() {
        lightboxProcesso.innerHTML = `
            <div class="lightbox-controls">
                <span id="prevProcesso">&lt;</span>
                <span id="nextProcesso">&gt;</span>
            </div>
            <img src="${imgProcessoElements[currentProcessoIndex].src}" alt="${imgProcessoElements[currentProcessoIndex].alt}">
        `;
        lightboxProcesso.classList.add('active');

        document.getElementById('prevProcesso').addEventListener('click', showPreviousProcessoImage);
        document.getElementById('nextProcesso').addEventListener('click', showNextProcessoImage);
    }

    function showPreviousProcessoImage() {
        currentProcessoIndex = (currentProcessoIndex > 0) ? currentProcessoIndex - 1 : imgProcessoElements.length - 1;
        updateProcessoLightbox();
    }

    function showNextProcessoImage() {
        currentProcessoIndex = (currentProcessoIndex < imgProcessoElements.length - 1) ? currentProcessoIndex + 1 : 0;
        updateProcessoLightbox();
    }

    function updateProcessoLightbox() {
        const lightboxProcessoImg = lightboxProcesso.querySelector('img');
        lightboxProcessoImg.src = imgProcessoElements[currentProcessoIndex].src;
        lightboxProcessoImg.alt = imgProcessoElements[currentProcessoIndex].alt;
    }

    lightboxProcesso.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightboxProcesso.classList.remove('active');
    });

    const videoProcessoElements = document.querySelectorAll('.clickable-processo-video');
    let currentProcessoVideoIndex = 0;

    videoProcessoElements.forEach((video, index) => {
        video.addEventListener('click', () => {
            currentProcessoVideoIndex = index;
            showProcessoVideoLightbox();
        });
    });

    function showProcessoVideoLightbox() {
        lightboxProcesso.innerHTML = `
            <div class="lightbox-controls">
                <span id="prevProcessoVideo">&lt;</span>
                <span id="nextProcessoVideo">&gt;</span>
            </div>
            <video src="${videoProcessoElements[currentProcessoVideoIndex].src}" controls autoplay></video>
        `;
        lightboxProcesso.classList.add('active');

        document.getElementById('prevProcessoVideo').addEventListener('click', showPreviousProcessoVideo);
        document.getElementById('nextProcessoVideo').addEventListener('click', showNextProcessoVideo);
    }

    function showPreviousProcessoVideo() {
        currentProcessoVideoIndex = (currentProcessoVideoIndex > 0) ? currentProcessoVideoIndex - 1 : videoProcessoElements.length - 1;
        updateProcessoVideoLightbox();
    }

    function showNextProcessoVideo() {
        currentProcessoVideoIndex = (currentProcessoVideoIndex < videoProcessoElements.length - 1) ? currentProcessoVideoIndex + 1 : 0;
        updateProcessoVideoLightbox();
    }

    function updateProcessoVideoLightbox() {
        const lightboxProcessoVideo = lightboxProcesso.querySelector('video');
        lightboxProcessoVideo.src = videoProcessoElements[currentProcessoVideoIndex].src;
        lightboxProcessoVideo.play();
    }

    lightboxProcesso.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightboxProcesso.classList.remove('active');
    });
});

