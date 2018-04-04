

// EXO 1
// Récupérer mon titre 2
var titre2 = document.querySelector("#exo1 h2");

// changer le contenu de mon titre 2
titre2.innerText = "Le titre modifié";
titre2.textContent = "Le titre modifié";

// Changer la couleur de mon h2
titre2.style.color = "red";

// Ajouter la class bootstrap
titre2.classList.add("bg-primary", "text-center");

var info = titre2.getAttribute("data-infor");
console.log(info);

// ou 
// console.log(titre2.attributes[1].nodeValue);


// EXO 2 - preview
// Récupérer mon bouton
// let btn = document.querySelector("#exo2 button");

// Création de la fonction
// let rouge = "bleu";
// let onMaClicker = function () {


//   if (rouge != "rouge") {
//     btn.classList.remove("btn-primary");
//     btn.classList.add("btn-danger");
//     rouge = "rouge";

//   } else if (rouge = "rouge") {
//     btn.classList.remove("btn-danger");
//     btn.classList.add("btn-primary");
//     rouge = "bleu";
//   }

// };

// Ajouter un écouteur d'évènement
// btn.addEventListener("click", onMaClicker);

// Exo 2
// récupérer les boutons
let boutons = document.querySelectorAll("#header a");

// récupérer les panels
let panels = document.querySelectorAll("#panel-container .panel");

// fonction qui va faire le changement d'état
let changePanel = function (event) {
  //prévenir le comportement par défaut 
  event.preventDefault();

  //récupérer le panel active
  let panelActive = document.querySelector("#panel-container .active");

  //enlever la class active du panel active
  panelActive.classList.remove("active");

  //récupérer le bouton active
  let boutonActive = document.querySelector("#header .active");

  //enlever la class active du bouton active
  boutonActive.classList.remove("active");

  // ajouter la class active au bouton cliqué
  event.target.classList.add("active");

  //récupérer la position des boutons
  let position = event.target.getAttribute("data-position");

  // trouver la div correspondante à ce bouton
  let divCorrespondante = document.querySelector("#exo" + position);
  if (divCorrespondante) {

    // ajouter la class active à cette div
    divCorrespondante.classList.add("active");

  } else {
    panelActive.classList.add("active");
    console.log("Pas de div correspondante");
  }
};

// mettre un écouteur d'évènements
boutons.forEach((element) => {
  element.addEventListener("click", changePanel);
});

//cibler le titre avec le titre du bouton
let titre = document.querySelector("#header h1");

//stocker le contenu du premier titre
let titreDeBase = titre.innerText;

let changeTitre = function (event) {

  //cibler le contenu de ton bouton
  let boutonContenu = event.target.innerText;

  //changer le contenu du titre
  titre.innerText = boutonContenu;
};

let remettreTitre = function () {
  titre.innerText = titreDeBase;
};

boutons.forEach(element => {
  element.addEventListener("mouseover", changeTitre);
  element.addEventListener("mouseout", remettreTitre);

});




// EXO 3

let inputGo = document.querySelector("#exo3 form button");


let changeSpan = function (event) {

  //empêcher le refresh de la page au click
  event.preventDefault();

  // récupérer mon span
  let inputSpan = document.querySelector("#exo3 span");

  // Donner la valeur de mon input comme contenu du span
  inputSpan.innerText = document.querySelector("#exo3 form input").value;

  //vider la valeur de l'input 
  document.querySelector("#exo3 form input").value = "";

};

//ajouter l'event pour changer le span
inputGo.addEventListener("click", changeSpan);


// EXO 4

// récupérer ma div parente
let divParente1 = document.getElementById("parent1");
let divParente2 = document.getElementById("parent2");

// récupérer ma div à bouger
let divMove = document.querySelector("#exo4 .panel-move");

//récupérer mon bouton
let boutonExo4 = document.querySelector("#exo4 .btn");

//déclarer variables pour le compte de clicks
let nbClick = 0;

// créer la fonction qui va bouger l'élément

let changeCube = function (event) {
  event.preventDefault();

  if (divParente1.childNodes.length == 3) {
    divParente2.appendChild(divMove);
  } else {
    divParente1.appendChild(divMove);
  }

  nbClick++;

  document.querySelector("#exo4 .divBouton p").textContent = "Tu as cliqué " + nbClick + " fois.";
};

// créer un écouteur d'évènement
boutonExo4.addEventListener("click", changeCube);


//EXO 5

// récuper ma div panier
let panier = document.querySelector("#exo5 .panier");

//récupérer mon bouton
let boutonOeuf = document.querySelector("#exo5 .add-egg");

//créer la fonction
let createOeuf = function (event) {

  event.preventDefault();
  // créer une div
  let imgOeuf = document.createElement("img");

  // mettre une id à cette nouvelle div
  imgOeuf.setAttribute("src", "./assets/img/egg.png");

  //mettre une taille à mon image
  imgOeuf.setAttribute("width", "50px");

  //mettre dans la div
  panier.appendChild(imgOeuf);

};

// créer l'écouteur d'évènement
boutonOeuf.addEventListener("click", createOeuf);

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


