function factorielle(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

let nbr = Number(prompt("Entrez un nombre : "));
console.log("Factorielle de " + nbr + " = " + factorielle(nbr));