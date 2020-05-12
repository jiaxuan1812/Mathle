function goHome() {
  document.location.href = "/index.html";
}

let sub1;
let sub2;

function displayNewEquation() {
  sub1 = Math.floor(Math.random() * 100);
  sub2 = Math.floor(Math.random() * 100);
  document.getElementById(
    "equation"
  ).innerHTML = `<p> ${sub1} - ${sub2} = </p>`;
}

window.onload = () => {
  displayNewEquation();
};

function checkEquation() {
  var input = parseInt(document.getElementById("solution").value);
  if (input == sub1 - sub2) {
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
