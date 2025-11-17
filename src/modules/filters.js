export const searchFilter = (goods, value) => {
    return goods.filter((i) =>
        i.title.toLowerCase().includes(value.toLowerCase())
    );
};

export const categoryFilter = (goods, value) => {
    return goods.filter((i) =>
        i.category.toLowerCase().includes(value.toLowerCase())
    );
};

export const priceFilter = (goods, min, max) => {
    if (min && !max) {
        return goods.filter((i) => parseInt(i.price) >= parseInt(min));
    } else if (!min && max) {
        return goods.filter((i) => parseInt(i.price) <= parseInt(max));
    } else if (min && max) {
        return goods.filter(
            (i) =>
                parseInt(i.price) >= parseInt(min) &&
                parseInt(i.price) <= parseInt(max)
        );
    }
    return goods;
};

export const saleFilter = (goods) => {
    return goods.filter((i) => i.sale);
};
