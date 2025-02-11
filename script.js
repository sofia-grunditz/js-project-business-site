document.querySelectorAll('.clickable-img').forEach(image => {
    image.addEventListener('click', function() {
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('lightbox-img').src = this.src;
    });
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});
