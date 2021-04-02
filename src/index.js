import './styles.css';

import refs from './script/refs';

import Fetch from "./script/fetchPhoto.js"
import createCards from "./templates/createCard.hbs";

import "./script/lightBox.js";
// import "./script/renderCard.js";

const fetchPh = new Fetch();

refs.formSearch.addEventListener('submit', onSearch)
refs.loadMore.addEventListener('click', onLoaderMore)

refs.loadMore.classList.add('is-hidden')

async function onSearch(e) {
    try {
         e.preventDefault();
        refs.gallery.innerHTML = "";

        fetchPh.query = e.currentTarget.elements.query.value;
        fetchPh.resetPage();
        await fetchPh.fetchPhoto().then(renderPageCard);
        refs.loadMore.classList.add('is-visible')
    } catch (error) {
        console.log("ERROR");
     }
}

function onLoaderMore() {
    if (refs.input.value !== "") {
        fetchPh.incrementPage();
        fetchPh.fetchPhoto().then(result => {
            const lastVisibilityCard = refs.gallery.querySelector('.gallery-items:last-child')
            renderPageCard(result)
            if (lastVisibilityCard) {

                const scrollValue = lastVisibilityCard.offsetTop + lastVisibilityCard.clientHeight + 20;
        
                window.scrollTo({
                    top: scrollValue,
                    behavior: 'smooth'
                });
            }
        })
    }
}

function renderPageCard(photo) {
    const card = createCards(photo);
    refs.gallery.insertAdjacentHTML('beforeend', card);
}