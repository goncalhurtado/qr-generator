export const createWpLink = (data) => {

    const array = data.message.split(' ');
    const message = array.join('%20');
    const result = `https://wa.me/${data.number}?text=${message}`

    return result;
}