console.log("1+1");
let longueur = 20
let largeur = 10

let aire = largeur * longueur
console.
function eligible(age){
    if(age > 18){
        console.log("l utiisateur est eligibe pour la reduction")
    } else{
        console.log("l utilisateur n est pas eligible pour la reduction")
    }
}
console.log(eligible(27));
function eligible(age){
    if(age > 18){
        console.log("l utiisateur est eligibe pour la reduction")
    } else{
        console.log("l utilisateur n est pas eligible pour la reduction")
    }
}
console.log(eligible(27));
function eligible(age){
    if(age > 18){
        console.log("l utiisateur est eligibe pour la reduction")
    } else{
        console.log("l utilisateur n est pas eligible pour la reduction")
    }
}
console.log(eligible(27));og(aire,"cm")
let nom = "vanessa"
console.log(nom)
let cote = 4
let perimetre = cote * 4
console.log(perimetre, "cm")

let base = 5
let hauteur =2
 
let airetriangle = base * hauteur / 2
console.log(airetriangle,"cm")

let airebase = 7
let hauteurs = 5

let volumepyramide = airebase * hauteurs / 3
console.log(volumepyramide,"cm", "ce que vous voyez c est le volume d'unteste  pyramide ")

var test;
let patate;

test = "ceci est un test"
patate = 23
console.log(test)
 
let x = 100
let y = 6

let mod = x % y 
console.log(mod)

let x = 15
let y = 30

let sup = x > y
let inf = x < y
let infegal = x <= y
let supegal = x >= y
let egal = x == y 
 console.log(sup,inf,infegal,supegal,egal) 
 

console.log(sup && inf , "coparaison de x sup et y sup ")

 console.log(sup || inf ," compariason de x sup ou y sup")

let L = 7
let l = 4

function perimetre(L,l){
    let perimetre = (L + l) * 2
    return  perimetre
}
console.log("le perimetre du rectangle est ",perimetre(L,l))

function demiperimetre(L,l){
    let demiperimetre = ((l + l) * 2) / 2
    return demiperimetre
}
console.log("le demi perimetre de ce rectangle est",demiperimetre(L,l))
 
function diagonle(L,l){
    let diagonale = (L * L) + (l * l)
    let res = Math.sqrt(diagonale)
    return res
}
console.log("la diagonale est ",diagonle(L,l))

function testmajeur(age){
    console.log("l utilisateur est majeur" )
}
function testmineur(age){
    console.log("l utilisateur est mineur")
}

let age =prompt("entrer l age de l utilisateur ")
if(age > 18 ){
    console.log("l age de l utilisateur est sup")
} else{
    console.log("l age de l utilisateur est inf ")
}

let nom =prompt("entrer votre nom")
const age =prompt("entrer votre age ")
console.log("le nom de l utilisateur est:",nom,"et son age est:",age,"ans")

function inscription(cout,participant){
    return (cout * participant);
}
console.log("le cout total est:", inscription(500,12))



let note =parseInt(prompt("entrer la note 1"));
let note2 =parseInt(prompt("entrer la note 2"))
let note3 =parseInt(prompt("entrer la note 3"))
let moyenne = (note + note2 + note3 ) / 3
console.log("la moyenne est:",moyenne)


function eligible(age){
    console.log( "l utilisateur est eligible a une reduction ")
}
let age = prompt("entrer l age de l utilisateur")
if(age > 18){
    console.log("l utilisateur est eligible a une reduction")
}else{
    console.log("l utilisateur n est pas eligible")
}

let nom = "samuel";
let age = 19;
let inscriptionpayee = true;
console.log(typeof nom);
console.log(typeof age);
console.log(typeof inscriptionpayee);

let participant = ["samuel","xavi","merveille","ulrich"];
let newparticipant = participant.push("lucas");
console.log(participant);

let newinscript =prompt("entrer le nom du newinscript");
alert("newinscript");
console.log('Bienvenu',newinscript,)


function calculatesum(a,b){
    return a,b;
}
let a = 12;
let b = 14;
let somme = a + b;
console.log("le resultat est:",somme)



