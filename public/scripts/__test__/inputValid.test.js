const { TestWatcher } = require("jest");


function checkIfNameIsValid(elementValue) {
    if (elementValue.trim().length > 2) {
        return true;
    } else {
        return false;
    }
}

function checkIfEmailIsValid(elementValue) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (elementValue.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

function checkIfDateIsValid(elementValue) {
    // check if it is date 
    console.log(Date.parse(elementValue));
    if (Date.parse(elementValue)) {
        return true;
    } else {
        return false;
    }
}

function checkIfQuantityIsValid(elementValue) {
    if (parseInt(elementValue) >= 0) {
        return true;
    } else {
        return false;
    }
}

test('check if name is valid', () => {
    expect(checkIfNameIsValid("hello")).toBe(true);
    expect(checkIfNameIsValid("")).toBe(false);
  });

  test('check if email is valid', () => {
    expect(checkIfEmailIsValid("hello@gmail.com")).toBe(true);
    expect(checkIfEmailIsValid("heloafdsfer")).toBe(false);
    expect(checkIfEmailIsValid("heloafdsfer@gmail")).toBe(false);
    expect(checkIfEmailIsValid("  ")).toBe(false);
  });

  test('check if date is valid', () => {
    expect(checkIfDateIsValid("2020/03/10")).toBe(true);
    expect(checkIfDateIsValid("hello")).toBe(false);
    expect(checkIfDateIsValid("")).toBe(false);
  });


  test('check if quatity is valid', () => {
    expect(checkIfQuantityIsValid("1")).toBe(true);
    expect(checkIfQuantityIsValid("0")).toBe(true);
    expect(checkIfQuantityIsValid("10")).toBe(true);
    expect(checkIfQuantityIsValid("edjiasjdiojweodjef")).toBe(false);
  });