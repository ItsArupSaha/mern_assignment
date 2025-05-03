const clock = () => setInterval(() => {
    let date = new Date();

    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    console.clear();
    console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}, 1000);

clock();