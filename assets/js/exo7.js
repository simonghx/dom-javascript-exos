// récupérer mon bouton
let btnTodo = document.querySelector("#exo7 .btn-create");

// récupérer mon input
let inputTask = document.querySelector("#exo7 .input-todo");

// récupérer la liste
let groupeList = document.querySelector("#exo7 .list-group");

// récupérer les boutons
let btnTags = document.querySelectorAll("#exo7 .nav-todo .btn");

let icnSuppr;
let icnModif;
let icnCheck;
let listItem;
let position = 0;
// let activation;

// functions

let supprimer = function (event) {
  // empêche le refresh par défaut de la page
  event.preventDefault();

};

let modifier = function (event) {
  // empêche le refresh par défaut de la page
  event.preventDefault();

};

let checker = function (event) {
  // empêche le refresh par défaut de la page
  event.preventDefault();

  // récupérer l'activation de la target
  let activation = event.target.getAttribute("data-activation");

  // récupérer le parent le plus proche de mon event.target ayant la class list-group-item
  let parentTest = event.target.closest(".list-group-item");

  if (activation == 0) {
    //barrer le texte
    parentTest.classList.add("line");
    activation = 1;
    event.target.setAttribute("data-activation", activation);

  }
  else {
    // retirer le texte barré
    parentTest.classList.remove("line");
    activation = 0;
    event.target.setAttribute("data-activation", activation);
  }
};

let createTask = function (event) {

  // empêche le refresh par défaut de la page
  event.preventDefault();

  if (inputTask.value == "") {
    inputTask.classList.add("border", "border-danger");
    return;

  } else {

    //créer un élément de liste
    listItem = document.createElement("li");

    //ajouter un ID
    listItem.id = "list-" + position;
    position++;
    console.log(listItem);
    console.log(position);

    // ajouter une class à mon item
    listItem.classList.add("list-group-item", "d-flex", "row");
    // ajouter une valeur
    listItem.innerHTML = '<div class="text-item col-6 text-left">' + inputTask.value + '</div><div class="icones col-6 text-right"><a href="" class="delete btn btn-light" data-activation="0"><i class="far fa-window-close mx-1"></i></a><a class="check btn btn-light" href="" data-activation="0"><i class="fas fa-check mx-1"></i></a><a class="edit btn btn-light" href="" data-activation="0"><i class="far fa-edit mx-1"></i></a></div>';

    //supprimer le contenu de l'input
    inputTask.value = "";

    // ajouter le li dans la liste
    groupeList.appendChild(listItem);

    // récupérer les icones
    icnSuppr = listItem.querySelector("#exo7 a.delete");
    icnModif = listItem.querySelector("#exo7 a.edit");
    icnCheck = listItem.querySelector("#exo7 a.check");


    // ecouteur d'évènements icones
    icnSuppr.addEventListener("click", supprimer);
    icnModif.addEventListener("click", modifier);
    icnCheck.addEventListener("click", checker);


  }

  inputTask.classList.remove("border", "border-danger");

};

let filtrer = function () {

};


// ajout d'écouteur d'évènement

btnTodo.addEventListener("click", createTask);

btnTags.forEach(element => {
  element.addEventListener("click", filtrer);
});
