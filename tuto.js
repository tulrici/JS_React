// var test = "10";
// let bonjour = 10;
// const tom = true;

// console.log(bonjour + test);

// if (bonjour == test) {
//   console.log("bonjour est égal à test");
// }

let array = ["10", 10, true, [5, [55, "Tom"], ["!"]], "d", [20, ["55"]]];

// let profondeur = 0;
// for (let i = 0; i < array.length; i++) {
//     while (!Array.isArray(array[i])) {
//         profondeur++;
//         array = array[i];
//     }
// }

// console.log(profondeur);

// while (profondeur > 0) {
//     profondeur--;
// }

// Afficher les éléments individuels du tableau de profondeur 3
// for (let i = 0; i < array.length; i++) {
//     if (!Array.isArray(array[i])) {
//         console.log(array[i]);
//     }
//     else{ 
//         for(let j = 0; j < array[i].length; j++){
//             if (!Array.isArray(array[i][j])) {
//                 console.log(array[i][j]);
//             }
//             else{
//                 for(let k = 0; k < array[i][j].length; k++){
//                     if(!Array.isArray(array[i][j][k])){
//                         console.log(array[i][j][k]);
//                     }}        
//             }}
//     }
// }


// Afficher les éléments individuels du tableau quelque soit sa profondeur
function displayElement(array){
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            console.log(array[i]);
        }
        else{ 
            displayElement(array[i]);
        }
    }
}
displayElement(array);

// Afficher les éléments individuels du tableau quelque soit sa profondeur version fonction fléchée
displayElement2 = array => {
    array.forEach(element =>
        Array.isArray(element) ? displayElement(element) : console.log(element)
    );
}
displayElement2(array);


