const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper');
    cartWrapper.innerHTML = '';

    if (goods.length) {
        goods.forEach((item) => {
            cartWrapper.insertAdjacentHTML(
                'beforeend',
                `
                <div class="card" data-goodid="${item.id}">
                    ${
                        item.sale
                            ? '<div class="card-sale">🔥Hot Sale🔥</div>'
                            : ''
                    }
                    <div class="card-img-wrapper">
                        <span class="card-img-top" style="background-image: url('${
                            item.img
                        }')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${item.price} ₽</div>
                        <h5 class="card-title">${item.title}</h5>
                        <button class="btn btn-primary">Удалить</button>
                    </div>
                </div>
                
            `
            );
        });
    } else {
        cartWrapper.insertAdjacentHTML(
            'afterbegin',
            '<div id="cart-empty">Ваша корзина пока пуста</div>'
        );
    }
};

export default renderCart;
