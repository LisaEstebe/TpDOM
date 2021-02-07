/* console.log("bonjour");

//afficher dans la console l'élément dont l'identifiant est "c1"
console.log(document.getElementById("c1"));

//afficher dans la console le premier élément de la classe "carte"
let elements = document.getElementsByClassName("carte");
console.log(elements[0]);

//afficher dans la console tous les éléments de la classe "carte"
console.log(document.querySelector(".carte"));

//afficher dans la console tous les éléments de le classe "carte"
//--collection
console.log(document.getElementsByClassName("carte"));

//afficher dans la console tous les paragraphes HTML
//--les paragraphes p
let elems = document.getElementsByTagName("p");
for (let elem of elems) {
  console.log(elem);
}

//afficher le nom de la classe de l'élément d'id j1
let elementidj1 = console.log(document.getElementById("j1"));
console.log(elementidj1.className);

//afficher dans la console l'id du dernier élément fils de l'élément j1
console.log(document.getElementById("j1").lastElementChild.id);*/

//--Modif du DOM
document.getElementById("titre").textContent = "TP1 - manipulation du DOM";

document.getElementById("c1").style.background = "red";
document.getElementById("c2").style.background = "green";

//ajout d'une carte
let carte3 = document.createElement("p");
carte3.id = "c3";
carte3.style.background = "blue";
carte3.ancre = "3";
carte3.className = "carte";
document.getElementById("j1").appendChild(carte3);

function nouvelleCarte(num) {
  let carte = document.createElement("p");
  carte.id = "c" + num;
  carte.innerHTML = "<a>" + num + "</a>";
  carte.className = "carte";
  carte.style.background = couleurAleatoire();
  document.getElementById("j1").appendChild(carte);
}

nouvelleCarte(4);
nouvelleCarte(5);

function couleurAleatoire() {
  const tCouleurs = [
    "blue",
    "red",
    "purple",
    "yellow",
    "green",
    "white",
    "black",
    "brown",
    "pink",
    "magenta",
    "cyan",
    "orange",
    "grey"
  ];
  //nmbr au hasard dans [0, nbcouleurstab]
  let indice = Math.round(Math.random() * (tCouleurs.length - 1));
  return tCouleurs[indice];
}

for (let i = 6; i < 51; i++) {
  nouvelleCarte(i);
}

function supprimerCarte(num) {
  let carte = document.getElementById("c" + num);
  document.getElementById("j1").removeChild(carte);
}

//supprimerCarte(5);

function deplacerCarte() {
  let carte1 = document.getElementById("j1").firstElementChild;
  document.getElementById("j1").appendChild(carte1);
}

setInterval(deplacerCarte, [100]);

function retournerCarte(num) {
  let carte = document.getElementById("c" + num);
  carte.style.background = "white";
  carte.textContent = num;
  carte.style.textAlign = "center";
}

retournerCarte(2);

function zoomCarte(num) {
  let carte = document.getElementById("c" + num);
  //la carte doit être 2 fois plus grande;
}
zoomCarte(3);
