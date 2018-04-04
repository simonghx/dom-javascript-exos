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

