// Exercice 3 : Complétez la fonction isEven pour vérifier si un nombre est pair ou impair.

function isEven(number) {
    if (number % 2 === 0) {
    return "Pair";
    } else {
    return "Impair";
    }
    }
    
    // Appel de la fonction pour tester
    console.log(isEven(4)); // Devrait afficher "Pair"
    console.log(isEven(7)); // Devrait afficher "Impair"