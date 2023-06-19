let navlinks = document.querySelector('#nav-links');
let hamburger = document.querySelector('#hamburger').addEventListener('click', () => {
    navlinks.classList.toggle("hide");
});

let card_items = document.querySelector('.card').innerText;
let card_title = document.querySelector('.card-title').innerText;
let card_price = document.querySelector('.price').innerHTML;
let cart_list = document.querySelector('.cart-list');

let cart_items = document.querySelector('.cart-item');

let shopping_cart = document.getElementById('shopping-cart').addEventListener('click', () => {
    cart_items.classList.toggle('remove');
    cart_items.style.display = "block"
});

let cart1 = document.querySelector('#cart1').addEventListener('click', () => {
    let item1 = document.querySelector('#item1');
    item1.style.display = "block"
    let no_cart_item = document.querySelector('#no-cart-item').style.display = "none"
    let remove_btn = document.querySelector('#remove-btn1').addEventListener('click', () => {
        item1.style.display = "none";
    })
});

let cart2 = document.querySelector('#cart2').addEventListener('click', () => {
    let item2 = document.querySelector('#item2');
    item2.style.display = "block"
    let no_cart_item = document.querySelector('#no-cart-item').style.display = "none"
    let remove_btn = document.querySelector('#remove-btn2').addEventListener('click', () => {
        item2.style.display = "none";
    })
});

let cart3 = document.querySelector('#cart3').addEventListener('click', () => {
    let item3 = document.querySelector('#item3');
    item3.style.display = "block"
    let no_cart_item = document.querySelector('#no-cart-item').style.display = "none"
    let remove_btn = document.querySelector('#remove-btn3').addEventListener('click', () => {
        item3.style.display = "none";
    })
});



