const postData = async (cart) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return res.json();
};

export default postData;
