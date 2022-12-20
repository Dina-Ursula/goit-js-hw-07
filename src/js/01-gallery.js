import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
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

let instance;
function openModal(evt) {
  window.addEventListener("keydown", onEscKeyPress);
  const originalImg = evt.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
  `);
  instance.show();
}
function closeModal() {
  instance.close();
  window.removeEventListener("keydown", onEscKeyPress);
}
function onEscKeyPress(evt) {
  const ESC_KEY_CODE = "Escape";
  const isEsc = evt.code === ESC_KEY_CODE;

  if (isEsc) {
    closeModal();
  }
}
