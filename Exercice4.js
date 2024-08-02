// Exercice 4 : Complétez la fonction countWords pour compter le nombre de mots dans une chaîne de caractères.

function countWords(str) {
    let words = str.split(" ");  //refaire split() ?
    return words.length;
    }

    // Appel de la fonction pour tester
    console.log(countWords("Bonjour tout le monde")); // Devrait afficher 4
    console.log(countWords("JavaScript est amusant")); // Devrait afficher 3