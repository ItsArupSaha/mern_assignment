## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

## Solution

let count = 0;

const counter = () => {
setTimeout(() => {
console.clear();
console.log(count++);

        counter();

    }, 1000);

};

counter();
