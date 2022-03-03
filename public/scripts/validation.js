//////////////////////////////////////////////////////////////
/* inputBoxes is an Array targeting the different text-control   */
const inputBoxes = document.querySelectorAll(".text-control");
/* locations is an array targeting the different checkboxes for the locations  */
const locations = document.querySelectorAll(".location");


/* DOM elements corresponding to the different entries */
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const agreeCheckbox = document.getElementById("checkbox1");
const newsletterAgree = document.getElementById("checkbox2");


/* DOM button in the form */
const closeBtn = document.querySelector(".btn--close");
const submitBtn = document.querySelector(".btn--submit");


// target the content of the modal to change the height if necessary 
const content = document.querySelector(".content");
const modalBody = document.querySelector(".modal-body");
const form = document.getElementById("form-section");

// initialize height of the content of the form 
let contentHeight = 847;

console.log(contentHeight);

/* validate():  validate the form when submitted */
function validate(event) {
  let errorMessages = [];
  event.preventDefault();

  inputBoxes.forEach(inputBox => {
    if (checkIfInputValid(inputBox) === false) {
      errorMessages.push(inputBox.id + " not valid");
    }
  });

  if (checkLocation() === false) {
    errorMessages.push("location not valid");
  }

  if (checkIfInputValid(agreeCheckbox) === false) {
    errorMessages.push("agreeCheckbox not valid")
  }

  if (errorMessages.length === 0) {
    inputValidatedDisplay();
  }
} // validate()



let city = "";

/* checkLocation() : check if user has selected a location or not  */ 
function checkLocation() {
  let selectedLocation = document.querySelector('input[name="location"]:checked');
  const errorMessage = document.querySelector("#location-entry ~ .error");

  if (selectedLocation != null) {
    contentHeight -= 13;
    content.style.height = contentHeight + "px";
    errorMessage.style.display = "none";
    return city = selectedLocation.value;
  } else {
    errorMessage.style.display = "inline";
    return false
  }
} //checkLocation()


/* checkIfInputValid(element) : check if every input is valid   */ 
function checkIfInputValid(element) {
  // pattern to check email 
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const elementId = element.id;
  const elementValue = element.value;
  const targetElement = document.getElementById(elementId);

  // target the error message corresponding to the element 
  const errorMessage = document.querySelector("#" + elementId + "~ .error");

  let isValid = false;

  /* removeDanger() : if element valid, remove error  */
  function removeDanger() {
    if (targetElement.classList.contains("danger")) {
      contentHeight -= 13;
    } else {
      contentHeight = contentHeight;
    }
    targetElement.classList.remove("danger");
    errorMessage.style.display = "none";
    content.style.height = contentHeight + "px";
  }

  /* displayDanger() : if element not valid, display error  */
  function displayDanger() {
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
      if (elementValue.trim().length > 2) {
        removeDanger();
        isValid = true;
      } else {
        displayDanger();
      }
      break;
    case "last":
      if (elementValue.trim().length > 2) {
        removeDanger();
        isValid = true;
      } else {
        displayDanger();
      }
      break;
    case "email":
      if (elementValue.match(pattern)) {
        removeDanger();
        isValid = true;
      } else {
        displayDanger();
      }
      break;
    case "birthdate":
      if (elementValue) {
        removeDanger();
        isValid = true;
      } else {
        displayDanger();
      }
      break;
    case "quantity":
      if (elementValue) {
        removeDanger();
        isValid = true;
      } else {
        displayDanger();
      }
      break;
    case "checkbox1":
      if (element.checked) {
        removeDanger();
        isValid = true;
      } else {
        displayDanger();
      }
      default:
        break;
  }


  console.log(isValid);
  return isValid;
  
} // checkIfInputValid()


// EVENT LISTENER FOR THE DIFFERENT ENTRIES 

/* event listener for the different input boxes */
inputBoxes.forEach(inputBox => {
/* check if input valid when input box is not focus anymore */
  inputBox.addEventListener("blur", (event) => {
    const element = event.target;
    checkIfInputValid(element);
  });

/*   check where there is a modification in the input if input is valid or not */  
inputBox.addEventListener("input", (event) => {
    const element = event.target;
    checkIfInputValid(element);
  });
}); //inputBoxes.forEach

/* event listener for the checkbox of "conditions d'utilisation" */
agreeCheckbox.addEventListener("click", () => {
  checkIfInputValid(agreeCheckbox);
});

/* event listener for the locations if one of them is clicked the error message disapears   */ 
locations.forEach(location => {
  location.addEventListener("click", () => {
    checkLocation();
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