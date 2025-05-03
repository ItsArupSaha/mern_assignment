function add(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            num += 5;

            resolve(num);
        }, 1000);
    }) 
}

function multiply(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            num *= 3;

            resolve(num);
        }, 1000);
    }) 
}
function subt(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            num -= 2;

            resolve(num);
        }, 1000);
    }) 
}

add(5)
    .then(result => {
        return multiply(result);
    })
    .then(result => {
        return subt(result);
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));