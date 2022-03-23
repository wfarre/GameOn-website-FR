/* removeError() : if element valid, remove error  */
function removeError(formData) {
  formData.setAttribute("data-error-visible", false);
}

/* displayError() : if element not valid, display error  */
function displayError(formData) {
  formData.setAttribute("data-error-visible", true);
}