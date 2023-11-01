export const createMailLink = (data) => {

    const array = data.message.split(' ');
    const message = array.join('%20');
    console.log(message);
    const result = `mailto:${data.mail}?subject=${data.subject}&body=${message}`;
    return result;
}