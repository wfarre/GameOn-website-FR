/* checkIfInputValid(element) : check if every input is valid   */
function checkIfInputValid(element) {
    /* pattern to check email  */
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const elementId = element.id;
    const elementValue = element.value;

  /*   formDataToSelect target the parent element to able to displau the corresponding message of error  */
    const formDataToSelect = document.querySelector("#" + elementId).parentElement;

    /* set isValid to false, if we do nothing return an error anyway */
    let isValid = false;
    displayDanger(formDataToSelect);


    switch (elementId) {
        case "first":
            if (elementValue.trim().length > 2) {
                removeDanger(formDataToSelect);
                isValid = true;
            } 
            break;
        case "last":
            if (elementValue.trim().length > 2) {
                removeDanger(formDataToSelect);
                isValid = true;
            } 
            break;
        case "email":
            if (elementValue.match(pattern)) {
                removeDanger(formDataToSelect);
                isValid = true;
            } 
            break;
        case "birthdate":
            if (elementValue) {
                removeDanger(formDataToSelect);
                isValid = true;
            } 
            break;
        case "quantity":
            if (elementValue) {
                removeDanger(formDataToSelect);
                isValid = true;
            } 
            break;
        case "checkbox1":
            if (element.checked) {
                removeDanger(formDataToSelect);
                isValid = true;
            } 
            default: elementId
                break;
    }
    return isValid;

} // checkIfInputValid()


let city = "";

/* checkLocation() : check if user has selected a location or not  */
function checkLocation() {
    let selectedLocation = document.querySelector('input[name="location"]:checked');
    const formDataToSelect = document.querySelector("#location-entry");

    if (selectedLocation != null) {
        removeDanger(formDataToSelect);
        return city = selectedLocation.value;
    } else {
        displayDanger(formDataToSelect)
        return false
    }
} //checkLocation()