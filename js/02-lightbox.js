import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.style.justifyItems = 'center';

function createMarkup(arr) {
    return arr.map(({ preview, original, description }, index) => 
        `<li data-id='${index}' class="gallery_item">
            <a class="gallery_link" href="${original}">
                <img 
                    class="gallery_image" 
                    src="${preview}" 
                    alt="${description}" 
                    style="width: 100%; height: 100%;"
                />
            </a>
        </li>
    `).join('');
};

let gallery = new SimpleLightbox('.gallery_item a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.5
});

gallery.next()

// container.addEventListener('click', handleClick);

// function handleClick(event) {
//     event.preventDefault();

//     if(event.target === event.currentTarget) {
//         return;
//     };

//     const currentImage = event.target.closest ('.gallery_item');
//     const imageId = +currentImage.dataset.id;

//     let gallery = new SimpleLightbox('.gallery_item a', {
//         captionsData: 'alt',
//         captionDelay: 250,
//         overlayOpacity: 0.5
//     });

//     gallery.on('show.simplelightbox', function () {
//         `
//             <img src='${galleryItems[imageId].original}' alt='${galleryItems[imageId].description}'>
//         `
//     })

    // const lightbox = document.createElement('div');
    // lightbox.id = 'lightbox';
    // document.body.appendChild(lightbox);

    // const images = document.querySelectorAll('img');
    // images.forEach(image => {
    //     image.addEventListener('click', event => {
    //         lightbox.classList.add('active')
    //         const img = document.querySelector('img')
    //         img.src = image.src
    //         while (lightbox.firstChild) {
    //             lightbox.removeChild(lightbox.firstChild)
    //         }
    //         lightbox.appendChild(img)
    //     });
    // });

    // lightbox.addEventListener('click',event => {
    //     if( event.targe !== event.currentTarget) {
    //         return;
    //     };
    //     lightbox.classList.remove('active')
    // })
    
    // const currentImage = event.target.closest ('.gallery_item');
    // const imageId = +currentImage.dataset.id;

    //     <div class="gallery">
    //         <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    //         <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
    //     </div>

    // const instance = basicLightbox.create(`
    // <div class='modal'>
    //     <img src='${galleryItems[imageId].original}' alt='${galleryItems[imageId].description}'>
    // </div>
    // `);

    // instance.show();
// };


// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll('img');
// images.forEach(image => {
//     image.addEventListener('click', event => {
//         lightbox.classList.add('active')
//         const img = document.querySelector('img')
//         img.src = image.src
//         while (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild)
//         }
//         lightbox.appendChild(img)
//     });
// });

// lightbox.addEventListener('click',event => {
//     if( event.targe !== event.currentTarget) {
//         return;
//     };
//     lightbox.classList.remove('active')
// })

//     const lightbox = document.createElement('div');
//     lightbox.id = 'lightbox';
//     document.body.appendChild(lightbox);

//     const images = document.querySelectorAll('img');
//     images.forEach(image => {
//         image.addEventListener('click', event => {
//             lightbox.classList.add('active')
//             const img = document.querySelector('img')
//             img.src = image.src
//             while (lightbox.firstChild) {
//                 lightbox.removeChild(lightbox.firstChild)
//             }
//             lightbox.appendChild(img)
//         });
//     });

//     lightbox.addEventListener('click',event => {
//         if( event.targe !== event.currentTarget) {
//             return;
//         };
//         lightbox.classList.remove('active')
//     })