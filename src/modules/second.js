import getData from './getData.js';

const second = () => {
    getData().then((data) => console.log(data));
};

export default second;
