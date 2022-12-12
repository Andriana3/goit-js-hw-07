import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");


function createGalleryMarkup() {
    
//     const galleryItemsList = galleryItems.reduce((acc, { preview, original, description }) => {
//         acc += `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//         return acc
//     }, "");
    
    const galleryItemsList = galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join(''); 
    galleryContainer.insertAdjacentHTML('beforeend', galleryItemsList);
    console.log(galleryItemsList);
}
createGalleryMarkup();

galleryContainer.addEventListener('click', onClickImage);

function onClickImage(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') return;
    console.log(event.target)
    const item = event.target;
    onClickImageShow(item.dataset.source, item.alt);
}

function onClickImageShow(imgSrc, imgAlt) {
    const modal = basicLightbox.create(
        `<img src="${imgSrc}" alt="${imgAlt}">`,
        {
        showImg:() => window.addEventListener('keydown', true),
},
{
    closeImg: () => window.removeEventListener('keydown', true),
}
    
    );

    modal.show();
    console.log(modal)
}
