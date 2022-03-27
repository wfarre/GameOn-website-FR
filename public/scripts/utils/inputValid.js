let city = "";
/**
 * checkIfInputIsValid():
 * check if the input is valid according to his type
 *  */
function checkIfInputIsValid(element, type) {
    const elementValue = element.value;

    switch (type) {
        case "name":
            return checkIfNameIsValid(elementValue);
        case "date":
            return checkIfDateIsValid(elementValue);
        case "email":
            return checkIfEmailIsValid(elementValue);
        case "quantity":
            return checkIfQuantityIsValid(elementValue);
        case "city":
            return checkIfLocationIsValid();
        case "agreement":
            return checkIfCheckboxIsChecked(element);

        default:
            return false;
    }
}


/**
 * checkIfNameIsValid(elementValue) :
 * If the name is valid (i.e.: the length of the input is more than 2 characters), 
 * the function return "true" 
 * */
function checkIfNameIsValid(elementValue) {
    if (elementValue.trim().length > 2) {
        return true;
    } else {
        return false;
    }
}

/**
 * checkIfEmailIsValid(elementValue) :
 * If the email is valid 
 * (i.e.: the email match the pattern), the function return "true" 
 * */
function checkIfEmailIsValid(elementValue) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (elementValue.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

/**
 * checkIfDateIsValid(elementValue) :
 * If the date is valid 
 * (i.e.: if there is an input), the function return "true" 
 * */
function checkIfDateIsValid(elementValue) {
    // check if it is date 
    if (Date.parse(elementValue)) {
        return true;
    } else {
        return false;
    }
}

/**
 * checkIfCheckbocIsValid(elementValue) :
 * If the checkbox is checked, 
 * the function return "true" 
 * */
function checkIfCheckboxIsChecked(element) {
    if (element.checked) {
        return true;
    } else {
        return false;
    }

}

/**
 * checkIfQuantityIsValid(elementValue) :
 * If the quantity is valid (i.e.: if there is an input), 
 * the function return "true" 
 * */
function checkIfQuantityIsValid(elementValue) {
    if (parseInt(elementValue) >= 0) {
        return true;
    } else {
        return false;
    }
}

/* checkIfLocationIsValid()
the function will return if one of the location is selected*/
/** */
function checkIfLocationIsValid() {
    let selectedLocation = document.querySelector('input[name="location"]:checked');

    if (selectedLocation != null) {
        city = selectedLocation.value;
        return true;
    } else {
        return false
    }
}