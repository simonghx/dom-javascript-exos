// récupérer mon bouton
let btnTodo = document.querySelector("#exo7 .btn-create");

// récupérer mon input
let inputTask = document.querySelector("#exo7 .input-todo");

// récupérer la liste
let groupeList = document.querySelector("#exo7 .list-group");

console.log(groupeList);


// functions

let createTask = function (event) {

  // empêche le refresh par défaut de la page
  event.preventDefault();

  //créer un élément de liste
  let listItem = document.createElement("li");

  // ajouter une class à mon item
  listItem.classList.add("list-group-item");
  // ajouter une valeur
  listItem.textContent = inputTask.value;

  //supprimer le contenu de l'input
  inputTask.value = "";

  // ajouter les icônes

  // ajouter le li dans la liste
  groupeList.appendChild(listItem);




}


// ajout d'écouteur d'évènement

btnTodo.addEventListener("click", createTask);