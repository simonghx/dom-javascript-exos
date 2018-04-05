// récupérer mon bouton
let btnTodo = document.querySelector("#exo7 .btn-create");

// récupérer mon input
let inputTask = document.querySelector("#exo7 .input-todo");

// récupérer la liste
let groupeList = document.querySelector("#exo7 .list-group");

// récupérer les boutons
let btnTags = document.querySelectorAll("#exo7 .nav-todo .btn");

let activation;
let icnSuppr;
let icnModif;
let icnCheck;
let listItem;

// functions

let supprimer = function (event) {

};

let modifier = function () {

};

let checker = function (event) {
  activation = listItem.getAttribute("data-activation");
  // empêche le refresh par défaut de la page
  event.preventDefault();

  if (activation == "0") {
    //barrer le texte
    listItem.classList.add("line");
    activation = "1";
    console.log("hello");
  } else {
    listItem.classList.remove("line");
    activation = "0";
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

    // ajouter une class à mon item
    listItem.classList.add("list-group-item", "d-flex", "row");
    // ajouter une valeur
    listItem.innerHTML = '<div class="text-item col-6 text-left">' + inputTask.value + '</div><div class="icones col-6 text-right"><a href="" class="delete" data-activation="0"><i class="far fa-window-close mx-1"></i></a><a class="check" data-activation="0" href=""><i class="fas fa-check mx-1"></i></a><a class="edit" data-activation="0" href=""><i class="far fa-edit mx-1"></i></a></div>';

    //supprimer le contenu de l'input
    inputTask.value = "";

    // ajouter le li dans la liste
    groupeList.appendChild(listItem);

    // récupérer les icones
    icnSuppr = listItem.querySelector("#exo7 .delete");
    icnModif = listItem.querySelector("#exo7 .edit");
    icnCheck = listItem.querySelector("#exo7 .check");

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
