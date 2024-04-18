let searchBox = document.querySelector('.search-box');

let searchIcon = document.querySelector('#search-icon');

// Define a CSS class name to toggle
let activeClassName = 'active';

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle(activeClassName);
});