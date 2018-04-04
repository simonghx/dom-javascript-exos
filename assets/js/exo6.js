// EXO 6 
// Récupérer les éléments du DOM
//Récupérer l'input 1 et 2
let num1 = document.querySelector("#exo6 .nb1");
let num2 = document.querySelector("#exo6 .nb2");

// Récupérer mon bouton
let btnEgal = document.querySelector("#exo6 .calc1");

// Récupérer le span 
let result1 = document.querySelector("#exo6 .result1");

//Fonction additionner
let addition = function () {
  let nombre1 = parseInt(num1.value);
  let nombre2 = parseInt(num2.value);
  // ou 

  /* 
  let nombre1 = +num1.value;
  let nombre2 = +num2.value;
   */

  let resultat = nombre1 + nombre2;
  result1.textContent = resultat;
};

//ajouter écouteur d'évènement
btnEgal.addEventListener("click", addition);

//niveau 2
//récupérer les boutons

let btnNumbers = document.querySelectorAll("#exo6 .nbscalc");

let btnOperateur = document.querySelectorAll("#exo6 .operateur");

let btnResult = document.querySelector("#exo6 .calcegal");

let inputCalc = document.querySelector("#exo6 .hautcalc .inputCalc2");

let spanCalc = document.querySelector("#exo6 .hautcalc .calcatt");

let btnClear = document.querySelector("#exo6 .clear");

// functions

// récupérer le contenu de l'input et l'envoyer dans le span
let clearCalc = function () {
  spanCalc.textContent = "";
  inputCalc.value = "";
};

let operation = function (event) {

  if (spanCalc.textContent != "" && inputCalc.value == "") {
    spanCalc.textContent += event.target.value;
  } else if (spanCalc.textContent == "" && inputCalc.value == "") {

    if (event.target.value == "*" || event.target.value == "/") {
      spanCalc.textContent = "You need to choose a number before";
      inputCalc.value = "";
      inputCalc.classList.add("border", "border-danger");
      return;
    }
    inputCalc.value = event.target.value;



  } else {
    spanCalc.textContent = inputCalc.value + event.target.value;
    inputCalc.value = "";
  }
  inputCalc.classList.remove("border", "border-danger");

};

let insertValue = function (event) {
  inputCalc.value += event.target.value;
};

let resultatCalc = function () {
  let longueur = spanCalc.textContent.length - 1;

  switch (spanCalc.textContent[longueur]) {

    case "+":
      spanCalc.textContent = parseFloat(spanCalc.textContent) + parseFloat(inputCalc.value);
      inputCalc.value = null;
      break;

    case "-":
      spanCalc.textContent = parseFloat(spanCalc.textContent) - parseFloat(inputCalc.value);
      inputCalc.value = null;
      break;

    case "*":
      spanCalc.textContent = parseFloat(spanCalc.textContent) * parseFloat(inputCalc.value);
      inputCalc.value = null;
      break;

    case "/":
      spanCalc.textContent = parseFloat(spanCalc.textContent) / parseFloat(inputCalc.value);
      inputCalc.value = null;
      break;

    default:
      console.log("Default");
      inputCalc.textContent = "";
  }
};




// Ecouteur d'évènements

btnOperateur.forEach(element => {
  element.addEventListener("click", operation);
});

btnNumbers.forEach(element => {
  element.addEventListener("click", insertValue);
});

btnResult.addEventListener("click", resultatCalc);

btnClear.addEventListener("click", clearCalc);
