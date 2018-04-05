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

// variable qui récupère le dernier élément de mon Span
let longueur;
let nombreAtt;
let resultatFinal;

// functions

// récupérer le contenu de l'input et l'envoyer dans le span
let clearCalc = function () {
  spanCalc.textContent = "";
  inputCalc.value = "";
};

let operation = function (event) {

  // Si mon span calc affiche le résutat et que je n'ai pas de contenu dans le input
  if (spanCalc.textContent != "" && inputCalc.value == "") {

    // Si on retrouve l'opérateur
    if (spanCalc.textContent.match(/[\+\/\-\*]/)) {
      spanCalc.textContent = spanCalc.textContent.replace(/[\+\/\-\*]/, event.target.value);
      //Sinon
    } else {
      spanCalc.textContent += event.target.value;
    }

    // sinon s'il n'y a pas de contenu dans le span et aucun contenu dans le input
  } else if (spanCalc.textContent == "" && inputCalc.value == "") {
    //si l'opérateur est le fois ou le divisé
    if (event.target.value == "*" || event.target.value == "/") {
      spanCalc.textContent = "You need to choose a number before";
      inputCalc.value = "";
      inputCalc.classList.add("border", "border-danger");
      return;
    }

    // la valeur de l'input est = à la valeur de la cible
    inputCalc.value = event.target.value;

    //si le contenu du span n'est pas vide ainsi que le contenu de l'input
  } else if (spanCalc.textContent != "" && inputCalc.value != "") {
    resultatCalc();
    spanCalc.textContent = spanCalc.textContent + event.target.value;

    //sinon le contenu du span est égale à la valeur de l'input
  } else {
    spanCalc.textContent = inputCalc.value + event.target.value;
    inputCalc.value = "";
  }
  //on enlève la class border
  inputCalc.classList.remove("border", "border-danger");

};

let insertValue = function (event) {
  inputCalc.value += event.target.value;
};

let resultatCalc = function () {
  longueur = spanCalc.textContent.length - 1;

  switch (spanCalc.textContent[longueur]) {
    case "+":
      spanCalc.textContent = parseFloat(spanCalc.textContent) + parseFloat(inputCalc.value);
      inputCalc.value = "";
      break;

    case "-":
      spanCalc.textContent = parseFloat(spanCalc.textContent) - parseFloat(inputCalc.value);
      inputCalc.value = "";
      break;

    case "*":
      spanCalc.textContent = parseFloat(spanCalc.textContent) * parseFloat(inputCalc.value);
      inputCalc.value = "";
      break;

    case "/":
      spanCalc.textContent = parseFloat(spanCalc.textContent) / parseFloat(inputCalc.value);
      // spanCalc.textContent = resultatFinal;
      inputCalc.value = "";
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
