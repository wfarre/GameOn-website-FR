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


/* target the content of the modal to change the height if necessary  */
const content = document.querySelector(".content");
const modalBody = document.querySelector(".modal-body");
const form = document.getElementById("form-section");

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

  if (errorMessages.length === 0) {
    inputValidatedDisplay();
    removeDanger(submitBtn.parentElement);
  } else{
    displayDanger(submitBtn.parentElement);
  }
} // validate()


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