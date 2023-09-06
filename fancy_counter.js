// Button
const increaseBtn = document.querySelector(".fancy-counter__button-increase");
const decreaseBtn = document.querySelector(".fancy-counter__button-discrease");
const resetBtn = document.querySelector(".fancy-counter__button--riset");

// if the value more than 5
let messages = `limit! Buy <br> PRO FOR >5`;

// Text
const displayNumber = document.querySelector(".fancy-counter__number--display");
const title = document.querySelector(".fancy-counter__title");

let holdValue = 0;

// DOM
const changeDisplayNumber = (value) => {
  displayNumber.textContent = holdValue;
};

const increaseClicked = () => {
  if (holdValue < 5) {
    holdValue = holdValue + 1;
  } else {
    title.innerHTML = messages;
  }
  changeDisplayNumber(holdValue);
};
const decreaseClicked = () => {
  if (holdValue > 0) {
    holdValue = holdValue - 1;
  }
  changeDisplayNumber(holdValue);
};

const resetBtnClicked = () => {
  holdValue = 0;
  title.innerHTML = `fancy <br> Counter`;
  changeDisplayNumber(holdValue);
};

// event handler
increaseBtn.addEventListener("click", increaseClicked);
decreaseBtn.addEventListener("click", decreaseClicked);
resetBtn.addEventListener("click", resetBtnClicked);
