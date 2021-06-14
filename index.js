let x = document.createElement("h1");
x.classList.add("title");
x.innerHTML = `hello simret`;

document.querySelector("body").append(x);
console.log(x);
let c = document.createElement("p");
c.classList.add("title-text");
document.querySelector(".title").append(c);
c.innerHTML = `you got this`;
function itsWindy(speed, unit) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}
let speed = prompt("what is the wind speed");
let unit = prompt("what is the unit metric or imperal?");
if (itsWindy(speed, unit)) {
  alert("it is windy");
} else {
  document.querySelector(".title").style.borderColor = "red";
  document.querySelector(".title").style.color = "yellow";
  document.querySelector(".title-text").style.color = "red";
  document.querySelector(".title-text").style.borderColor = "green";
}
