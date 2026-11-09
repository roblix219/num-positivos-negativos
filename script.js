let numero = 0;
let i = 0;
let contadorP = 0;
let contadorN = 0;
let contador0 = 0;

for (i = 1; i <= 7; i++) {
    numero = parseInt(prompt("Ingrese número:"));
    
    if (numero > 0) {
        contadorP++;
    } else if (numero < 0) {
        contadorN++;
    } else {
        contador0++;
    }
}

alert(
    "Cantidad de numeros positivos: " + contadorP + "\n" +
    "Cantidad de numeros negativos: " + contadorN + "\n" +
    "Cantidad de numeros iguales a cero: " + contador0
);