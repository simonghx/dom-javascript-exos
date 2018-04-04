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