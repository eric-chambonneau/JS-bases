//alert("salut bob");
//console.log("salut bob");

/*commenter 
plusieurs
lignes*/

//camelCase
/*let maSuperVariable = "Coco";
console.log(maSuperVariable);

//les variables
var unTexte = "remplacer un texte";
console.log(unTexte);


//let = on peut changer la valeur

let name = "Bob";

name = "Alice";

//const = on ne peut pas changer la valeur
const age = 30;

age = 31; //erreur


let monChiffre = "10";

monChiffre = "16";

let chaine = "je suis l'une des chaine de caractères";

let nouvelleChaine = "chaine précédente" + chaine;
console.log(nouvelleChaine);

//contanenation avec backtick (alt gr + 7)

let autreConcatenation = `chaine précédente ${chaine}. voila c'etait ma concatenation`;

//**types de données */
/*let string = "je suis une chaine de caractères";
let number = 10;
let boolean = true // or false;

//**tableaux = array on le délimite par des crochets []*/
//let array = ["je", "suis", "un", "tableau", 46, true];

//**objet = object on le délimite par des accolades {}*/

/*let object = {
    prenom: "Bob",
    age: 30,
    ville: "Paris",
}

let arbre 

arbre = "chêne";

console.log(arbre);

// les opérateurs

//console.log(10 + 5);
//console.log(10 - 5);
//console.log(10 / 5);
//console.log(10 * 5);

// puissance/
//console.log(10 ** 5);

// opérateurs d'affectations
let total = 0;

total ++ // = (total = total + 1)

total +=5 // = (total = total + 5)
total -=5 // = (total = total - 5)
total *=5 // = (total = total * 5)

console.log(total);*/

// structure de contrôle
let x = 2;
let y = 2;

/*if (x > y) {
    alert("Yes x est plus grand que y");
} else if (y > x) {
    alert("y est plus grand !");
} else {
    alert("ils sont égaux !");
}*/

//on teste si la variable est true

if (x) {
    console.log("x existe");
}

let a = 2;
let b = "2";



if (a == b) {
console.log("ils sont égaux");
} else {
    console.log("ils sont différents");
}

// || ou
// && et


//soit l'un soit l'autre
if (x < y || x > 1) {
    console.log("ok");
}

if (x < y && x > 1) {
    console.log("ok");
}

/*les fonctions*/

//fonction classique
function direBonjour() {
    console.log("Bonjour");
    console.log( 5 + 6);
    alert("calcul terminé");
}

//il faut impérativement appeler la fonction pour qu'elle s'execute
//appeler une fonction = direBonjour();

//fonction fléchée
const addition = (a, b) => {
    console.log(a + b);
}

addition(5, 6);
addition(10, 6);

//la portée des variables

function add2() {
    let num = 5;
    console.log( num + 2);
}

add2();