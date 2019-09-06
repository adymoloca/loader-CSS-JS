// Declare UI variables
const loader = document.querySelector('#loader');
const container = document.querySelector('#container');

const showPage = () => {
    loader.style.display = 'none';
    container.style.display = 'block';
}

const loading = () => {
    setTimeout(showPage, 5000);
}

document.addEventListener('DOMContentLoaded', loading);