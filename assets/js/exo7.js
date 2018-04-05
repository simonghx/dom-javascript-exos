// récupérer mon bouton
let btnTodo = document.querySelector("#exo7 .btn-create");

// récupérer mon input
let inputTask = document.querySelector("#exo7 .input-todo");

// récupérer la liste
let groupeList = document.querySelector("#exo7 .list-group");

// récupérer les boutons
let btnTags = document.querySelectorAll("#exo7 .nav-todo .btn");

// functions

let createTask = function (event) {

  // empêche le refresh par défaut de la page
  event.preventDefault();

  if (inputTask.value == "") {
    inputTask.classList.add("border", "border-danger");
    return;

  } else {

    //créer un élément de liste
    let listItem = document.createElement("li");

    // ajouter une class à mon item
    listItem.classList.add("list-group-item", "row");
    // ajouter une valeur
    listItem.innerHTML = '<div class="col-6 text-left d-inline-block">' + inputTask.value + '</div><div class="icones col-6 text-right d-inline-block"><i class="far fa-window-close mx-1"></i><i class="fas fa-check mx-1"></i><i class="far fa-edit mx-1"></i></div>';

    //supprimer le contenu de l'input
    inputTask.value = "";

    // ajouter le li dans la liste
    groupeList.appendChild(listItem);


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
