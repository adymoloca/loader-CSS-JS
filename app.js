// Declare UI variables
const loader = document.querySelector('#loader');
const container = document.querySelector('#container');

// Create the show page function
const showPage = () => {
    loader.style.display = 'none';
    container.style.display = 'block';
}

// Create the loading function and set the time for loader
const loading = () => {
    setTimeout(showPage, 5000);
}

// Call the loading function when document is loading
document.addEventListener('DOMContentLoaded', loading);