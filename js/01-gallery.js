import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('gallery');

container.addEventListener('click', handleClick);

function handleClick(event) {
    console.log('currentTarget', event.currentTarget);
    console.log('target', event.target);
}

console.log(galleryItems);