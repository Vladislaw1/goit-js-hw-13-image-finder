import refs from "./refs.js";


import 'basiclightbox/dist/basiclightbox.min.css';
const basicLightbox = require('basiclightbox');

refs.gallery.addEventListener('click', onlightBox);


export default function onlightBox(e) {
    if (e.target !== e.currentTarget) {
        const url = e.target.dataset.source;
        if (url) {
            const instance = basicLightbox.create(`
            <img src="${url}" width="800" height="600">
        `);
        
            instance.show()
        }
    }
}