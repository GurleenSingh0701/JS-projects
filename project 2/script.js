const decreasebtn = document.querySelector(".decrease-btn");
const resetbtn = document.querySelector(".reset-btn");
const increasebtn = document.querySelector(".increase-btn");
let counterbtn = document.querySelector(".counter-value");
let counter = 0;

decreasebtn.addEventListener("click", () => {
  counter = counter - 1;

  counterbtn.innerHTML = counter;
  if (counterbtn.innerHTML < 0) {
    counterbtn.style.color = "red";
  } else if (counterbtn.innerHTML == 0) {
    counterbtn.style.color = "black";
  } else {
    counterbtn.style.color = "green";
  }
});
resetbtn.addEventListener("click", () => {
  counter = 0;

  counterbtn.innerHTML = counter;
  if (counterbtn.innerHTML < 0) {
    counterbtn.style.color = "red";
  } else if (counterbtn.innerHTML == 0) {
    counterbtn.style.color = "black";
  } else {
    counterbtn.style.color = "green";
  }
});
increasebtn.addEventListener("click", () => {
  counter = counter + 1;

  counterbtn.innerHTML = counter;
  if (counterbtn.innerHTML < 0) {
    counterbtn.style.color = "red";
  } else if (counterbtn.innerHTML == 0) {
    counterbtn.style.color = "black";
  } else {
    counterbtn.style.color = "green";
  }
});
