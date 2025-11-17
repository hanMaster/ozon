import { priceFilter } from './filters.js';
import renderGoods from './renderGoods.js';

const applyPriceFilter = (goods) => {
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');

    const filtered = priceFilter(goods, min.value, max.value);
    renderGoods(filtered);
};

const price = (goods) => {
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');

    min.addEventListener('input', () => applyPriceFilter(goods));
    max.addEventListener('input', () => applyPriceFilter(goods));
};

export default price;
