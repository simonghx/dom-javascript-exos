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
