/* checkIfError() : return error to the user if the input is not filled correctly */
function checkIfError(element){
    const elementType = element.getAttribute("data-type");
    let formDataToTarget = element.parentElement;
    
   function getFormDataToTarget(target){ 
     console.log(target.className);
     while(target.className !== "formData"){
      target = target.parentElement;
    }
    formDataToTarget = target;
    };
  
    getFormDataToTarget(formDataToTarget);
    console.log(formDataToTarget);
  
    // console.log(checkIfInputIsValid(element, elementType));
      if (checkIfInputIsValid(element, elementType) === true){
        removeDanger(formDataToTarget);
        return true;
      } else {
        displayDanger(formDataToTarget);
        return false;
      }
  }
  