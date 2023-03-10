const counter = document.getElementById("counter");
const startBtn = document.getElementById("btn-start");
const pauseBtn = document.getElementById("btn-pause");
const resetBtn = document.getElementById("btn-reset");
let count = 0;
let intervalId;
//
startBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    const countTimer = ++count;
    counter.innerHTML = countTimer;
  }, 1000);
  return intervalId;
});

//
pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});

//
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  count = 0;
  counter.innerHTML = "0";
});
