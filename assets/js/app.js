// import { Personne } from "./personne.js"; cet import est inutile puisqu'il est importé dans la class Doctor
// import { Doctor } from "./doctor.js";

// let personne = new Personne("Jean", 25, "m", "Docteur");
// let doctor = new Doctor("Steven", 56, "m", "Docteur");

// console.log(doctor);

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





