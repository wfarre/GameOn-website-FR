// responsive navbar when mobile size
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn--modal");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "flex";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}



/////////////////////////////////////////////////////////

// set the current year in the footer 
const currentYear = new Date().getFullYear();

document.getElementById("this-year").innerHTML = currentYear;