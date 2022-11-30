const cardName=document.querySelector(".c-name");
const cardNumber = document.querySelector(".c-number")
const cmm = document.querySelector(".exp-mm");
const cyy = document.querySelector(".exp-yy");
const cCvv = document.querySelector(".c-cvv");

const cname = document.querySelector("#card-name");
const cnumber = document.querySelector("#card-number")
const cemm = document.querySelector("#mm");
const ceyy = document.querySelector("#yy");
const cvv1 = document.querySelector("#cvv");
const submit = document.querySelector("#form");
const cardNameError = document.querySelector(".card-name-error");
const cardNumberError = document.querySelector(".card-number-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const cvcError = document.querySelector(".cvc-error");
const submitbtn = document.querySelector(".submit-btn");
const continueBtn = document.querySelector(".continue-btn");
const submitedContainer = document.querySelector(".submited-container");
const form = document.querySelector(".form-container");

cname.addEventListener("keyup", (e) => {
  let cardNameValue = cname.value;
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/); 
 if (cardNameValue.length === 0 ){
    cardNameError.innerHTML = "please enter your name";
 } else if (keyLetters) {
    cardName.innerHTML = cardNameValue;
 } else {
   cardNameError.innerHTML = "please use only letter";
 }
})  

cnumber.addEventListener("keyup", (e)=> {
  let cardNumberValue = cnumber.value;
  let key = e.key;
  let keyLetters = key.match(/^[0-9 ]*$/);
  if (cardNumberValue === 0 ) {
    cardNumberError.innerHTML = "please enter your card number";
  } else if (keyLetters) {
    cardNumber.innerHTML = cardNumberValue;
  } else {
    cardNumberError.innerHTML = "numbers only"
  }
})
cnumber.addEventListener("input", function (e) {
  e.target.value = e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

cemm.addEventListener("input", (e) => {
  let x= e.target.value;
  let y = x.match(/^[0-9 ]*$/);
  if (x===0) {
    monthError,innerHTML = "plase enter month";
  } else if (y) {
    cmm.innerHTML = x;
  } else {
    monthError.innerHTML = "numbers only"
  }
})

ceyy.addEventListener("input", (e)=> {
  let a= e.target.value;
  let b = a.match(/^[0-9 ]*$/);
  if (a===0) {
    yearError,innerHTML = "plase enter year";
  } else if (b) {
    cyy.innerHTML = a;
  } else {
    yearError.innerHTML = "numbers only"
  }
})

cvv1.addEventListener("input", (e)=> {
  let value= e.target.value;
  let cvvValue = value.match(/^[0-9 ]*$/);
  if (value===0) {
    cvcError,innerHTML = "plase enter cvv";
  } else if (cvvValue) {
    cCvv.innerHTML = value;
  } else {
    cvcError.innerHTML = "numbers only"
  }
})

submitbtn.addEventListener("click", (e) => {
  if (cname.value.length <= 0) {
    cardNameError.innerHTML = "Please enter your name!";
  } else if (cnumber.value.length <= 0) {
    cardNumberError.innerHTML = "Please enter your card number!";
  } else if (cemm.value.length <= 0) {
    monthError.innerHTML = "Please enter month!";
  } else if (ceyy.value.length <= 0) {
    yearError.innerHTML = "Please enter year!";
  } else if (cvv1.value.length <= 0) {
    cvcError.innerHTML = "Please enter your cvc!";
  } else {
    submitedContainer.style.display = "block";
    form.style.display = "none";
  }
});

continueBtn.addEventListener("click", () => {
  submitedContainer.style.display = "none";
  continueBtn.style.width = "100%";
  form.style.display = "block";
});