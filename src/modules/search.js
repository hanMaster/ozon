import { searchFilter } from './filters.js';
import renderGoods from './renderGoods.js';

const search = (goods) => {
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        const filtered = searchFilter(goods, value);
        renderGoods(filtered);
    });
};

export default search;
