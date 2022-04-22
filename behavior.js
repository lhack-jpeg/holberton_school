document.addEventListener('DOMContentLoaded', function (event) {
    const thumbnailElement = document.getElementById('smart_thumbnail');
    console.dir(thumbnailElement);
    thumbnailElement.addEventListener('click', function () {
        if (thumbnailElement.classList == '') {
            thumbnailElement.classList = 'small';
        } else {
            thumbnailElement.classList = '';
        }
    });
});
