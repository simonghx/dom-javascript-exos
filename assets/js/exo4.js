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
