const main = document.querySelector(".main");
const time = document.querySelector(".time");

main.addEventListener("click", (e) => {
  e.target.className === "time"
    ? setInterval(() => shortFormat(time))
    : setInterval(() => fullFormat(time));
});

const fullFormat = (out) => {
  let date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  if (second < 10) second = "0" + second;

  out.innerText = `${hour}:${minutes}:${second}`;
};
setInterval(() => fullFormat(time), 250);

const shortFormat = (out) => {
  let date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;

  out.innerText = `${hour}:${minutes}`;
};
