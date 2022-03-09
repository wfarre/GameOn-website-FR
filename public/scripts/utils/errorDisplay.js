/* removeDanger() : if element valid, remove error  */
function removeDanger(formData) {
  formData.setAttribute("data-error-visible", false);
}

/* displayDanger() : if element not valid, display error  */
function displayDanger(formData) {
  formData.setAttribute("data-error-visible", true);
}