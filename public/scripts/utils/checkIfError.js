/* checkIfError() : return error to the user if the input is not filled correctly */
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