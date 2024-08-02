// Exercice 5 : Complétez la fonction reverseString pour inverser une chaîne de caractères.

function reverseString(str) {
    let reversed = str.split('').reverse().toString('');
    return reversed;
    }
    // Appel de la fonction pour tester
    console.log(reverseString("Bonjour")); // Devrait afficher "ruojnoB"
    console.log(reverseString("JavaScript")); // Devrait afficher "tpircSavaJ"


