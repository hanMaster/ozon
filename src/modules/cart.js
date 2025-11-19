import renderCart from './renderCart.js';
import postData from './postData.js';

const cart = (goods) => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const goodsContainer = document.querySelector('.goods');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const cartWrapper = cartModal.querySelector('.cart-wrapper');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');

    const loadCart = () => {
        return localStorage.getItem('cart') !== null
            ? JSON.parse(localStorage.getItem('cart'))
            : [];
    };

    const saveCart = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const openCart = () => {
        const cart = loadCart();
        cartTotal.textContent = cart.reduce((acc, item) => acc + item.price, 0);
        renderCart(cart);
        cartModal.style.display = 'flex';
    };

    const closeCart = () => {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    goodsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const goodId = e.target.closest('.card').dataset.goodid;
            const good = goods.find((g) => g.id === goodId);
            const cart = loadCart();
            cart.push(good);
            saveCart(cart);
        }
    });

    cartWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const goodId = e.target.closest('.card').dataset.goodid;
            const cart = loadCart();
            const newCart = cart.filter((good) => good.id !== goodId);
            saveCart(newCart);
            renderCart(newCart);
        }
    });

    cartSendBtn.addEventListener('click', () => {
        const cart = loadCart();
        postData(cart).then(() => {
            localStorage.removeItem('cart');
            cartTotal.textContent = 0;
            renderCart([]);
        });
    });
};

export default cart;
