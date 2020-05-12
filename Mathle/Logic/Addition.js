function goHome() {
  document.location.href = "/index.html";
}

let add1;
let add2;

function displayNewEquation() {
  add1 = Math.floor(Math.random() * 50);
  add2 = Math.floor(Math.random() * 50);
  document.getElementById(
    "equation"
  ).innerHTML = `<p> ${add1} + ${add2} = </p>`;
}

window.onload = () => {
  displayNewEquation();
};

function checkEquation() {
  var input = parseInt(document.getElementById("solution").value);
  if (input == add1 + add2) {
    displayNewEquation();
    document.getElementById("solution").value = "";
  } else {
    document.getElementById("solution").style.borderColor = "crimson";
  }
}

function makeFieldNormal() {
  document.getElementById("solution").style.borderColor =
    "rgba(128, 128, 128, 0.5)";
}
