let x = document.createElement("h1");
x.classList.add("title");
x.innerHTML = `hello simret`;

document.querySelector("body").append(x);
console.log(x);
let c = document.createElement("p");
c.classList.add("title-text");
document.querySelector(".title").append(c);
c.innerHTML = `you got this`;
let btn = document.createElement("button");
btn.setAttribute("id", "button");
btn.innerHTML = `click me`;
document.querySelector(".title").append(btn);
let ul = document.createElement("ul");
ul.classList.add("list");
document.querySelector(".title").append(ul);
let li = document.createElement("li");
li.classList.add("list__item");
li.innerHTML = `bravo`;
document.querySelector(".list").appendChild(li);

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
  document.querySelector(".title").style.borderColor = "blue";
  document.querySelector(".title").style.color = "papayawhip";
  document.querySelector(".title").style.backgroundColor = "lightgreen";
  document.querySelector(".title-text").style.color = "black";
  document.querySelector(".title-text").style.backgroundColor = "lightblue";
}

document.getElementById("button").addEventListener("click", (e) => {
  let newli = document.createElement("li");
  newli.innerHTML = `bravo simret!!`;
  document.querySelector(".list").appendChild(newli);
});
