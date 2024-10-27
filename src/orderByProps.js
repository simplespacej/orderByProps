export function orderByProps(obj, order) {
    const result = [];
    const sortedKeys = Object.keys(obj).sort();

    for (const key of order) {
        if (key in obj) {
            result.push({ key, value: obj[key] });
        }
    }

    for (const key of sortedKeys) {
        if (!order.includes(key)) {
            result.push({ key, value: obj[key] });
        }
    }

    return result;
}
