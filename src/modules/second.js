import getData from './getData.js';
import postData from './postData.js';

const second = () => {
    const cartBtn = document.getElementById('cart');

    cartBtn.addEventListener('click', () => {
        postData().then((data) => {
            console.log(data);

            getData().then((data) => console.log(data));
        });
    });
};

export default second;
