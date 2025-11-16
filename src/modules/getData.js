const getData = async () => {
    const res = await fetch(
        'https://ozon-intensive-default-rtdb.asia-southeast1.firebasedatabase.app/goods.json'
    );
    return res.json();
};

export default getData;
