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
  thankYouMessage.style.display = "none";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//////////////////////////////////////////////////////////////
// Array targeting the different text-control 
const inputBoxes = document.querySelectorAll(".text-control");
// array targeting the different checkboxes for the locations 
const locations = document.querySelectorAll(".location");


// DOM elements corresponding to the different entries 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const agreeCheckbox = document.getElementById("checkbox1");
const newsletterAgree = document.getElementById("checkbox2");


// DOM button in the form
const closeBtn = document.querySelector(".btn--close");
const submitBtn = document.querySelector(".btn--submit");


// target the content of the modal to change the height if necessary 
const content = document.querySelector(".content");
const modalBody = document.querySelector(".modal-body");
const form = document.getElementById("form-section");

// initialize height of the content of the form 
let contentHeight = 850;

// console.log();

// validate function to validate the form when submitted 
function validate(event) {
  let errorMessages = [];
  event.preventDefault();

  inputBoxes.forEach(inputBox => {
    console.log(inputBox.id + "pouet");
    if (checkIfInputValid(inputBox) === false) {
      console.log("not valid");
      errorMessages.push(inputBox.id + " not valid");
    }
  });

  if (checkLocation2() === false) {
    console.log(city);
    errorMessages.push("location not valid");
  }

  if(checkIfInputValid(agreeCheckbox) === false){
    errorMessages.push("agreeCheckbox not valid")
  }

  if (errorMessages.length === 0) {
    inputValidatedDisplay();
  }
}// validate()



let city = "";

// check if user has selected a location or not 
function checkLocation2() {
  let selectedLocation = document.querySelector('input[name="location"]:checked');
  const errorMessage = document.querySelector("#location-entry ~ .error");

  if (selectedLocation != null) {
    contentHeight -= 13;
    content.style.height = contentHeight+"px";
    errorMessage.style.display = "none";
    return city = selectedLocation.value;
  } else {
    errorMessage.style.display = "inline";
    return false
  }
}//checkLocation2()


// function to check if every input is valid 
function checkIfInputValid(element) {
  // pattern to check email 
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const elementId = element.id;
  const elementValue = element.value;
  const targetElement = document.getElementById(elementId);

  // target the error message corresponding to the element 
  const errorMessage = document.querySelector("#" + elementId + "~ .error");
  

  // if element valid, remove error 
  function elementValidDisplay() {
    if (targetElement.classList.contains("danger")) {
      contentHeight -= 13;
    } else {
      contentHeight = contentHeight;
    }
    targetElement.classList.remove("danger");
    errorMessage.style.display = "none";
    content.style.height = contentHeight + "px";
  }

  // if element not valid, display error 
  function elementNotValidDisplay() {
    if (targetElement.classList.contains("danger")) {
      contentHeight = contentHeight;
    } else {
      contentHeight += 13;
    }
    targetElement.classList.add("danger");
    errorMessage.style.display = "inline";
    content.style.height = contentHeight + "px";
  }

  switch (elementId) {
    case "first":
      if (elementValue.length > 2) {
        elementValidDisplay();
      } else {
        elementNotValidDisplay();
        return false;
      }
      break;
    case "last":
      if (elementValue.length > 2) {
        elementValidDisplay();
      } else {
        elementNotValidDisplay();
        return false;
      }
      break;
    case "email":
      if (elementValue.match(pattern)) {
        elementValidDisplay();
      } else {
        elementNotValidDisplay();
        return false;
      }
      break;
    case "birthdate":
      if (elementValue) {
        elementValidDisplay();
      } else {
        elementNotValidDisplay();
        return false;
      }
      break;
    case "quantity":
      if (elementValue) {
        elementValidDisplay();
      } else {
        elementNotValidDisplay();
        return false;
      }
      break;
      case "checkbox1":
        if(element.checked){
          elementValidDisplay();
        } else{
          elementNotValidDisplay();
          return false;
        }
    default:
      break;
  }
}// checkIfInputValid()

// EVENT LISTENER FOR THE DIFFERENT ENTRIES 

inputBoxes.forEach(inputBox => {
  // check if input valid when input box is not focus anymore
  inputBox.addEventListener("blur", (event) => {
    const element = event.target;
    checkIfInputValid(element);
  });

  // check where there is a modification in the input if input is valid or not 
  inputBox.addEventListener("input", (event) => {
    const element = event.target;
    checkIfInputValid(element);
  });
}); //inputBoxes.forEach

// event listener for the checkbox of "conditions d'utilisation"
agreeCheckbox.addEventListener("click", ()=>{
  checkIfInputValid(agreeCheckbox);
});

// event listener for the locations if one of them is clicked the error message disapears 
locations.forEach(location => {
  location.addEventListener("click", ()=>{
    checkLocation2();
  })
});





// constructor for a new user 
class NewUser {
  constructor(firstName, lastName, email, birthdate, quantity, city, agreementAgree, newsletterAgree) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.quantity = quantity;
    this.city = city;
    this.agreementAgree = agreementAgree;
    this.newsletterAgree = newsletterAgree;
  }
}

// DOM element to display the thank you message 
const thankYouMessage = document.querySelector(".thank-you-message");

// Everies entry valid, when Promise is resovled, display this: 
function inputValidatedDisplay() {
  const user = new NewUser(
    firstName.value,
    lastName.value,
    email.value,
    birthdate.value,
    quantity.value,
    city,
    agreeCheckbox.checked,
    newsletterAgree.checked);
  console.log(user);

  //reset the parameters 
  inputBoxes.forEach(inputBox => {
    inputBox.value = "";
  });
  document.querySelector("input[name='location']:checked").checked = false;

  // display thank you message instead of the form 
  modalBody.style.display = "none";
  thankYouMessage.style.display = "flex";
}

/////////////////////////////////////////////////////////

// set the current year in the footer 
const currentYear = new Date().getFullYear();

document.getElementById("this-year").innerHTML = currentYear;