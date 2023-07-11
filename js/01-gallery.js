import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
let listItem;
let link;
let img;
let instance;

galleryItems.map( (item) => {
    listItem = document.createElement("li");
    link = document.createElement("a");
    img = document.createElement("img");

    img.src = item.preview;
    img.alt = item.description;
    img.dataset.source = item.original;

    link.href = item.original;

    link.classList.add("gallery__link")
    img.classList.add("gallery__image");
    listItem.classList.add("gallery__item");

    link.append(img);
    listItem.append(link);
    list.append(listItem);
}
);


const galleryHandler = (event) => {
    event.preventDefault();
    instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
    instance.show();
};

const keyHandler = (event) => {
    if (event.code === "Escape") {
        instance.close();
    };
}

list.addEventListener("click", galleryHandler);
list.addEventListener("keydown", keyHandler);

