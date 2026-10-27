const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const products = document.querySelectorAll('#product1 .pro');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
};

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};

products.forEach((product) => {
    product.addEventListener('click', (e) => {
        // cart icon click karne pe product page pe na jaye
        if (e.target.closest('.cart')) return;
        window.location.href = 'sproduct.html';
    });
});