const body = document.querySelector("body")
let color = document.querySelector("body").style.backgroundColor;
const textMain = document.querySelector("h1")
;

function changer () {
  let randomizedColor = Math.floor(Math.random()*16777215).toString(16)
  body.style.backgroundColor = "#" + randomizedColor;
  textMain.innerText = "This color is #" + randomizedColor;
  document.querySelector("h2").style.display = "block";
}

window.addEventListener("click", changer);
