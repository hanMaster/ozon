import { saleFilter } from './filters.js';
import renderGoods from './renderGoods.js';

const sale = (goods) => {
    const saleCheckBox = document.querySelector('#discount-checkbox');
    const mark = document.querySelector('.filter-check_checkmark');

    saleCheckBox.addEventListener('change', (e) => {
        if (e.target.checked) {
            mark.classList.add('checked');
            return renderGoods(saleFilter(goods));
        }
        mark.classList.remove('checked');
        renderGoods(goods);
    });
};

export default sale;
