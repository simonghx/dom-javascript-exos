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


// EXO 2
// Récupérer mon bouton
let btn = document.querySelector("#exo2 button");

// Création de la fonction
let onMaClicker = function () {
  console.log("On a clické !");
}

// Ajouter un écouteur d'évènement
btn.addEventListener("click", onMaClicker);