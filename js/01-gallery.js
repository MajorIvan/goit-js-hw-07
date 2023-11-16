import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.style.justifyItems = 'center';
// container.style. = '';

function createMarkup(arr) {
    return arr.map(({ preview, description }, index) => 
        `<li data-id='${index}' class='item gallery-item'>
            <img src='${preview}' alt='${description}' width='350'>
    `).join('');
};

container.addEventListener('click', handleClick);

function handleClick(event) {
    if(event.target === event.currentTarget) {
        return;
    };
    
    const currentImage = event.target.closest ('.gallery-item');
    const imageId = +currentImage.dataset.id;

    const instance = basicLightbox.create(`
    <div class='modal'>
        <img src='${galleryItems[imageId].original}' alt='${galleryItems[imageId].description}'>
    </div>
    `);

    instance.show();
};


// isModalOpen = true;

// // Додаємо прослуховування клавіатури тільки після відкриття модального вікна
// window.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
//   // Перевірка, чи натискана клавіша Escape
//   if (event.code === 'Escape' && isModalOpen) {
//     // Закриття модального вікна
//     instance.close();
//     isModalOpen = false;
//     // Видалення прослуховування клавіатури після закриття модального вікна
//     window.removeEventListener('keydown', handleKeyDown);
//   }
// }
// }