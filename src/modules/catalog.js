import renderGoods from './renderGoods.js';
import { categoryFilter } from './filters.js';

const catalog = (goods) => {
    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog-list > li');

    let isOpen = false;

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;
        catalogModal.style.display = isOpen ? 'block' : '';
    });

    catalogModalItems.forEach((i) => {
        i.addEventListener('click', () => {
            isOpen = false;
            catalogModal.style.display = '';
            const filtered = categoryFilter(goods, i.textContent);
            renderGoods(filtered);
        });
    });
};

export default catalog;
