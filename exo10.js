function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sommeRecursive(n - 1);
    }
}

let nombre = Number(prompt("Entrez un nombre : "));

console.log("Somme itérative de 1 à " + nombre + " = " + sommeIterative(nombre));
console.log("Somme récursive de 1 à " + nombre + " = " + sommeRecursive(nombre));