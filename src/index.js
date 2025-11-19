import cart from './modules/cart.js';
import search from './modules/search.js';
import catalog from './modules/catalog.js';
import getData from './modules/getData.js';
import renderGoods from './modules/renderGoods.js';
import price from './modules/price.js';
import sale from './modules/sale.js';

getData().then((data) => {
    const goods = data;
    cart(goods);
    renderGoods(goods);
    search(goods);
    catalog(goods);
    price(goods);
    sale(goods);
});
