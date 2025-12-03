function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let totalHT = prompt("Entrez le total HT : ");
let remise = prompt("Entrez la remise (%) : ");

 totalHT = Number(totalHT);
 remise = Number(remise);

let totalFinal = totalAvecRemise(totalHT, remise);

console.log("Total final après remise : " + totalFinal);
