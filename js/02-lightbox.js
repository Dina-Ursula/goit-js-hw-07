import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
           <img class="gallery__image" 
           src="${preview}" 
           alt="${description}" />
         </a>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", markup);
console.log(markup);
galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  openModal(evt);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionSelector: "img",
  captionDelay: 250,
});
function openModal(evt) {
  lightbox.open();
}
