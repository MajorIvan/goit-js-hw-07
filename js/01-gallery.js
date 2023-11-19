import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
container.style.justifyItems = 'center';

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
function createMarkup(arr) {
    return arr.map(({ preview, original, description }, index) => 
        `<li data-id='${index}' class="gallery_item">
            <a class="gallery_link" href="${original}">
                <img
                    class="gallery_image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    style="max-width: 100%; max-height: 100%;"
                />
            </a>
        </li>
    `).join('');
};

container.addEventListener('click', handleClick);
function handleClick(event) {
    event.preventDefault();

    if(event.target === event.currentTarget) {
        return;
    };
    
    const currentImage = event.target.closest ('.gallery_item');
    const imageId = +currentImage.dataset.id;

    const instance = basicLightbox.create(`
        <img src='${galleryItems[imageId].original}' alt='${galleryItems[imageId].description}'>
    `);
    instance.show();

    // onShow: (instance) => {},

	// onClose: (instance) => {}

    container.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(event) {
        if (event.code === 'Escape') {
            instance.close();
        };
    };
};