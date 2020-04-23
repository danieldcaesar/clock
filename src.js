const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();

    console.log(seconds);
}
setInterval(setTime, 1000);