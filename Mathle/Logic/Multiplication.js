function goHome() {
  document.location.href = "/index.html";
}

let mult1;
let mult2;

function displayNewEquation() {
  mult1 = Math.floor(Math.random() * 10);
  mult2 = Math.floor(Math.random() * 10);
  document.getElementById(
    "equation"
  ).innerHTML = `<p> ${mult1} * ${mult2} = </p>`;
}

window.onload = () => {
  displayNewEquation();
};

function checkEquation() {
  var input = parseInt(document.getElementById("solution").value);
  if (input == mult1 * mult2) {
    displayNewEquation();
    document.getElementById("solution").value = "";
  } else {
    document.getElementById("solution").style.borderColor = "crimson";
  }
}

function makeFieldNormal() {
  document.getElementById("solution").style.borderColor =
    "rgba(128, 128, 128, 0.5)";
  console.log("asad");
}
