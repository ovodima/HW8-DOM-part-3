// Task 1
const rangeNum = (a, b) => {
  if (a < b) {
    console.log(a);
    a++;
    rangeNum(a, b);
  } else if (a > b) {
    console.log(a);
    a--;
    rangeNum(a, b);
  } else {
    console.log(a);
  }
};
rangeNum(5, 10);

//Task 2
const button = document.querySelector(".format-button");
const span = document.querySelectorAll("span");

const setClock = () => {
  let date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  if (second < 10) second = "0" + second;

  span[0].innerText = `${hour} :`;
  span[1].innerText = `${minutes}:`;
  span[2].innerText = `${second}`;
};

setInterval(() => setClock(), 250);

button.addEventListener("click", (e) => {
  span[2].classList.toggle("none");

  let target = e.target;
  target.innerText === "Short"
    ? (target.innerText = "Full")
    : (target.innerText = "short");
});
