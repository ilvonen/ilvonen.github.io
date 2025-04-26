// Simple Counter App
let count = 0;

function increaseCounter() {
    count++;
    document.getElementById('counter').innerText = `You clicked ${count} times.`;
}