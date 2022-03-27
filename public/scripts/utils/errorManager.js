/** 
 * checkIfError() : 
 * return error to the user if the input is not filled correctly 
 * */
 function checkIfError(element) {
  const elementType = element.getAttribute("data-type");
  let formDataToTarget = element.parentElement;

  function getFormDataToTarget(target) {
    while (target.className !== "formData") {
      target = target.parentElement;
    }
    formDataToTarget = target;
  };

  getFormDataToTarget(formDataToTarget);

  if (checkIfInputIsValid(element, elementType) === true) {
    removeError(formDataToTarget);
    return true;
  } else {
    displayError(formDataToTarget);
    return false;
  }
}

/**
 * removeError() : 
 * if element valid, remove error  
 * */
 function removeError(formData) {
  formData.setAttribute("data-error-visible", false);
}

/**
 * displayError() : 
 * if element not valid, display error 
 *  */
function displayError(formData) {
  formData.setAttribute("data-error-visible", true);
}





// element.closest(".formData")