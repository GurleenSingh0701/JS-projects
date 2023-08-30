const btn = document.querySelector(".btn");
let rgbvalue = "";
let backCol = document.querySelector(".back-col");

var rgb = () => {
  var min = 0;
  var max = 255;
  const randomColor1 = Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor2 = Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor3 = Math.floor(Math.random() * (max - min + 1) + min);

  rgbvalue = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
  return rgbvalue;
};

const hex = () => {
  const rc = Math.floor(Math.random() * 16777215).toString(16);
  const word = "#" + `${rc}`;
  return word;
};

const navitems = document.querySelectorAll(".nav-items");
backCol.innerHTML = ": rgb(255,255,255)";
const fun = (element) => {
  navitems.forEach((ele) => {
    if (ele.classList.contains("active") && ele.innerHTML === "RGB") {
      document.body.style.setProperty("--background-color", `${rgb()}`);
      backCol.innerHTML = `${rgb()}`;
    } else if (ele.classList.contains("active") && ele.innerHTML === "HEX") {
      document.body.style.setProperty("--background-color", `${hex()}`);
      backCol.innerHTML = `${hex()}`;
    }
  });
};
navitems.forEach((ele) => {
  ele.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    ele.classList.add("active");
    fun(ele);
  });
});

btn.addEventListener("click", (ele) => fun(ele));
