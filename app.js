const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')

const newYearTime = new Date("january 1, 2024 :00:00:00").getTime();



function updateCountDown() {
    const Now = new Date().getTime();
    // console.log(Now, NewYearDate)
    const gap = newYearTime - Now
    // console.log(gap)
    const secnd = 1000;
    const minute = secnd * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / secnd)

    dayEl.innerText = d;
    hourEl.innerText = h; 
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountDown,  1000)
    

 }
 updateCountDown()
