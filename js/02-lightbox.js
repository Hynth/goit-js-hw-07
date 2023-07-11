import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
let listItem;
let link;
let img;

galleryItems.map( (item) => {
    listItem = document.createElement("li");
    link = document.createElement("a");
    img = document.createElement("img");

    img.src = item.preview;
    img.alt = item.description;

    link.href = item.original;

    link.classList.add("gallery__link")
    img.classList.add("gallery__image");
    listItem.classList.add("gallery__item");

    link.append(img);
    listItem.append(link);
    list.append(listItem);
}
);

list.addEventListener("click", (event) => event.preventDefault());

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});