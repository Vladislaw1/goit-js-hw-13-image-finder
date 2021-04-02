import refs from "./refs.js";

export default class Gallery {
    constructor() {
        this.searchQuery = "";
        this.page = 1;
        this.KEY = "20951749-54c856bea8aa31576335fc08f";
        this.URL = "https://pixabay.com/api";
    }

    fetchPhoto() {
        return fetch(`${this.URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.KEY}`)
            .then(res => res.json())
            .then(result => result.hits)
            .catch(error => error)
    }

    resetPage() {
        this.page = 1;
    }

    incrementPage() {
        this.page += 1
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        console.log(newQuery);
        this.searchQuery = newQuery;
    }
    

}


// export default async function onSearch(tags, number = 1) {
//     return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${tags}&page=${number}&per_page=12&key=${KEY}`)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error("Error")
//             }
//             return res.json();
//         }).then(result => {
//             const photo = result.hits;
//             const createCard = createCards(photo);
//             refs.gallery.innerHTML = createCard;
//         }).catch(error => error)
// }
