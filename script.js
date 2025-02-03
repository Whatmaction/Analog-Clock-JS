const hourHand = document.querySelector('#hour')
const minuteHand = document.querySelector('#minute')
const secondHand = document.querySelector('#second')

function updateclock(){
    let date = new Date()
    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourdeg = (hours * 30) + (minutes * 0.5);
    let minutedeg = (minutes * 6) + (seconds * 0.1);
    let seconddeg = (seconds * 6);

    hourHand.style.transform = `translateX(-50%) rotate(${hourdeg}deg)`
    minuteHand.style.transform = `translateX(-50%) rotate(${minutedeg}deg)`
    secondHand.style.transform = `translateX(-50%) rotate(${seconddeg}deg)`
}

setInterval(updateclock, 1000);

updateclock();