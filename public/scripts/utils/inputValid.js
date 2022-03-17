/* checkIfInputValid(element) : check if every input is valid   */
// function checkIfInputValid(element) {
//     /* pattern to check email  */
//     const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     const elementId = element.id;
//     const elementValue = element.value;

//     /*   formDataToSelect target the parent element to able to displau the corresponding message of error  */
//     const formDataToSelect = document.querySelector("#" + elementId).parentElement;

//     /* set isValid to false, if we do nothing return an error anyway */
//     let isValid = false;
//     displayDanger(formDataToSelect);


//     switch (elementId) {
//         case "first":
//             if (elementValue.trim().length > 2) {
//                 removeDanger(formDataToSelect);
//                 isValid = true;
//             }
//             break;
//         case "last":
//             if (elementValue.trim().length > 2) {
//                 removeDanger(formDataToSelect);
//                 isValid = true;
//             }
//             break;
//         case "email":
//             if (elementValue.match(pattern)) {
//                 removeDanger(formDataToSelect);
//                 isValid = true;
//             }
//             break;
//         case "birthdate":
//             if (elementValue) {
//                 removeDanger(formDataToSelect);
//                 isValid = true;
//             }
//             break;
//         case "quantity":
//             if (elementValue) {
//                 removeDanger(formDataToSelect);
//                 isValid = true;
//             }
//             break;
//         case "checkbox1":
//             if (element.checked) {
//                 removeDanger(formDataToSelect);
//                 isValid = true;
//             }
//             default:
//                 elementId
//                 break;
//     }
//     return isValid;

// } // checkIfInputValid()


let city = "";

/* checkLocation() : check if user has selected a location or not  */
// function checkLocation() {
//     let selectedLocation = document.querySelector('input[name="location"]:checked');
//     const formDataToSelect = document.querySelector("#location-entry");

//     if (selectedLocation != null) {
//         removeDanger(formDataToSelect);
//         return city = selectedLocation.value;
//     } else {
//         displayDanger(formDataToSelect)
//         return false
//     }
// } //checkLocation()



function checkIfInputIsValid(element, type) {
    const elementId = element.id;
    const elementValue = element.value;

    switch (type) {
        case "name":
            return checkIfNameIsValid(elementValue);
            break;
        case "date":
            return checkIfDateIsValid(elementValue);
            break;
        case "email":
            return checkIfEmailIsValid(elementValue);
            break;
        case "quantity":
            return checkIfQuantityIsValid(elementValue);
            break;
        case "city":
            return checkIfLocationIsValid();
            break;
        case "agreement":
            return checkIfCheckboxIsChecked(element);
            break;

        default:
            type
            break;
    }
}


/* checkIfNameIsValid(elementValue) :
If the name is valid (i.e.: the length of the input is more than 2 characters), the function return "true" */

function checkIfNameIsValid(elementValue) {
    if (elementValue.trim().length > 2) {
        return true;
    } else {
        return false;
    }
}

/* checkIfEmailIsValid(elementValue) :
If the name is valid (i.e.: the email match the pattern), the function return "true" */
function checkIfEmailIsValid(elementValue) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (elementValue.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

/* checkIfDateIsValid(elementValue) :
If the name is valid (i.e.: if there is an input), the function return "true" */
function checkIfDateIsValid(elementValue) {
    // check if it is date 
    console.log(Date.parse(elementValue));
    if (Date.parse(elementValue)) {
        return true;
    } else {
        return false;
    }
}

/* checkIfCheckbocIsValid(elementValue) :
If the name is valid (i.e.: if it is checked), the function return "true" */
function checkIfCheckboxIsChecked(element) {
    if (element.checked) {
        return true;
    } else {
        return false;
    }

}

/* checkIfQuantityIsValid(elementValue) :
If the name is valid (i.e.: if there is an input), the function return "true" */
function checkIfQuantityIsValid(elementValue) {
    if (parseInt(elementValue) >= 0) {
        return true;
    } else {
        return false;
    }
}

/* checkIfLocationIsValid()
the function will return if one of the location is selected */
function checkIfLocationIsValid() {
    let selectedLocation = document.querySelector('input[name="location"]:checked');

    if (selectedLocation != null) {
        city = selectedLocation.value;
        return true;
    } else {
        return false
    }
}