// récupérer mon bouton
let btnTodo = document.querySelector("#exo7 .btn-create");

// récupérer mon input
let inputTask = document.querySelector("#exo7 .input-todo");

// récupérer la liste
let groupeList = document.querySelector("#exo7 .list-group");

// récupérer les boutons
let btnTags = document.querySelectorAll("#exo7 .nav-todo .btn");

// div de contenu dans les li
let parentText;

let icnSuppr;
let icnModif;
let icnCheck;
let listItem;
let position = 0;
// let activation;
let inputModif;

// functions

let supprimer = function (event) {
  // empêche le refresh par défaut de la page
  event.preventDefault();

  let parentTest = event.target.closest(".list-group-item");
  groupeList.removeChild(parentTest);

};

let submitModif = function (event) {
  // empêche le refresh par défaut de la page
  event.preventDefault();

  if (inputModif.value == "") {
    inputModif.classList.add("border", "border-danger");
    return;
  } else {
    // le contenu de la div = input.value
    parentText.textContent = inputModif.value;
  }

};

let modifier = function (event) {
  // empêche le refresh par défaut de la page
  event.preventDefault();
  let parentTest = event.target.closest(".list-group-item");
  parentText = parentTest.querySelector("#exo7 .text-item");


  // ajouter un input pour modifier le contenu
  inputModif = document.createElement("input");
  inputModif.classList.add("input-modif");
  inputModif.setAttribute("type", "text");
  inputModif.setAttribute("value", "");

  // création du bouton de l'input
  let btnModif = document.createElement("button");
  btnModif.classList.add("btn", "btn-light");
  btnModif.textContent = "Modifier";

  // écouteur d'évènement
  btnModif.addEventListener("click", submitModif);

  // la valeur de l'input sera = au contenu de la li
  inputModif.value = parentText.textContent;

  //on supprime le parentText
  parentText.textContent = "";

  // on ajoute le input dans le li
  parentText.appendChild(inputModif);
  //on ajoute le bouton dans le li
  parentText.appendChild(btnModif);


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
    parentTest.classList.add("line", "done");
    parentTest.classList.remove("norm");
    activation = 1;
    event.target.setAttribute("data-activation", activation);

  }
  else {
    // retirer le texte barré
    parentTest.classList.remove("line", "done");
    parentTest.classList.add("norm");
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

    // ajouter une class à mon item
    listItem.classList.add("list-group-item", "d-flex", "row", "list-panel", "norm");
    // ajouter une valeur
    listItem.innerHTML = '<div class="text-item col-6 text-left">' + inputTask.value + '</div><div class="icones col-6 text-right"><a href="" class="delete btn btn-light mx-1" data-activation="0"><i class="far fa-window-close"></i></a><a class="check btn btn-light mx-1" href="" data-activation="0"><i class="fas fa-check"></i></a><a class="edit btn btn-light mx-1" href="" data-activation="0"><i class="far fa-edit"></i></a></div>';

    //supprimer le contenu de l'input
    inputTask.value = "";

    // ajouter le li dans la liste
    groupeList.appendChild(listItem);

    // récupérer les icones
    icnSuppr = listItem.querySelector("#exo7 a.delete");
    icnModif = listItem.querySelector("#exo7 a.edit");
    icnCheck = listItem.querySelector("#exo7 a.check");


    // ecouteur d'évènements icones
    icnSuppr.addEventListener("click", supprimer, true);
    icnModif.addEventListener("click", modifier, true);
    icnCheck.addEventListener("click", checker, true);


  }

  inputTask.classList.remove("border", "border-danger");

};

let filtrer = function (event) {
  // empêche le refresh par défaut de la page
  event.preventDefault();
  let btnTarget = event.target;


  // bouton all affiche tous les éléments
  if (btnTarget.value == "all") {
    groupeList.classList.remove("all-done");
    groupeList.classList.remove("all-todo");

  } else if (btnTarget.value == "done") {
    groupeList.classList.remove("all-todo");
    groupeList.classList.add("all-done");

  } else {
    groupeList.classList.remove("all-done");
    groupeList.classList.add("all-todo");

  }
  // bouton done  n'affiche que les éléments qui ont la classe .line

  // bouton todo n'affiche que les éléments qui doivent être faits


};


// ajout d'écouteur d'évènement

btnTodo.addEventListener("click", createTask);

btnTags.forEach(element => {
  element.addEventListener("click", filtrer);
});
