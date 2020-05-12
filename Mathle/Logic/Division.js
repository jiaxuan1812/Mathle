function goHome() {
  document.location.href = "/index.html";
}

let div1;
let div2;

function displayNewEquation() {
  div2 = Math.floor(Math.random() * 9) + 1;
  div1 = Math.floor(Math.random() * 10) * div2;
  document.getElementById(
    "equation"
  ).innerHTML = `<p> ${div1} : ${div2} = </p>`;
}

window.onload = () => {
  displayNewEquation();
};

function checkEquation() {
  var input = parseInt(document.getElementById("solution").value);
  if (input == div1 / div2) {
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
