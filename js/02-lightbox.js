import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

createGalleryMarkup();


 new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
});

function createGalleryMarkup() {
    const galleryItemsList = galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join(''); 
    galleryContainer.insertAdjacentHTML('beforeend', galleryItemsList);
    console.log(galleryItemsList);
}



