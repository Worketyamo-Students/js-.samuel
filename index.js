


function calculatesum(a,b){
    return a,b;
}
let a = 12;
let b = 14;
let somme = a + b;
console.log("le resultat est:",somme)


function calculateaverage(notes){
    let somme =0;
    for(let i=0;i<notes.length;i++){
        somme+=notes[i];
    }
    let moy = somme / notes.length
    return moy;
}
const notes = [2,4,6,8];

let m=calculateaverage(notes);
console.log("la moyenne des elements du tableau sont:",m)


function convertToUppercase(chaine){
    return chaine.toUppercase();
}
let chaine = "Bonjour";
let chaineMajuscule = convertToUppercase(chaine);
console.log(chaineMajuscule); 
 

function calculaterectangleArea(L,l){
    return L * l;
}
let L = 5;
let l = 8;
let aire = calculaterectangleArea(L,l);
console.log("l aire de ce rectangle est :", + aire);


function isEven(nombre){
    return nombre % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(5));
console.log(isEven(10));

function findElement(tableau,elements){
    return tableau.includes(elements);
}
let tableau = [2,3,4,6];
console.log(findElement(tableau,4));
console.log(findElement(tableau,5));


function fibonacci(n){
    if (n <= 1){
        return n;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(0));
console.log(fibonacci(3));