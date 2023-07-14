import { galleryItems } from './gallery-items.js';
import { galleryItems2 } from './gallery-items2.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

// galleryContainer.innerHTML = galleryItems2.map(({preview, original, description}) => 
galleryContainer.innerHTML = galleryItems.map(({preview, original, description}) => 
        `<li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a></li>`).join("");

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
