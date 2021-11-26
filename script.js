// Task 1

const rangeNum = (a,b) => {
    if(a < b) {
        console.log(a)
        a++ 
        rangeNum(a,b)
    } else if(a > b) {
        console.log(a)
        a--
        rangeNum(a,b)
    } else {
        console.log(a)
    }
}
rangeNum(5,10)

//Task 2
const out = document.querySelector('.out')
const button = document.querySelector('.format-button')
const setStateClock = () => {
    let date = new Date()
 
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    if(hour < 10) hour = '0' + hour
    if(minutes < 10) minutes = '0' + minutes
    if(second < 10) second = '0' + second

    out.innerText = `${hour}:${minutes}:${second}`
}
setStateClock()
setInterval(setStateClock, 1000)
