/* console.log("bonjour");

console.log(document.getElementById("c1"));

let elements = document.getElementsByClassName("carte");
console.log(elements[0]);

console.log(document.querySelector(".carte"));

//--collection
console.log(document.getElementsByClassName("carte"));

//--les paragraphes p
let elems = document.getElementsByTagName("p");
for (let elem of elems) {
  console.log(elem);
}

let elementidj1 = console.log(document.getElementById("j1"));
console.log(elementidj1.className);

console.log(document.getElementById("j1").lastElementChild.id);*/

//--Modif du DOM
document.getElementById("titre").textContent = "TP1 manipulation du DOM";

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

for (let i = 6; i < 11; i++) {
  nouvelleCarte(i);
}
j1.removeChild();
