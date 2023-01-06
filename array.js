var frutas = ["manzana", "Banano", "Pera", "Uva"];
console.log(frutas);
console.log(frutas[2]);
console.log(frutas.length);

// Como mutar o cambiar el Arrays
// push va agregar elementos al final de mi Arrays, llamado frutas
// pop permite eleiminar un elemento u objeto de mi array
// unshift se utiliza para introducir un elemento al array, colocandolo al inicio deol arra
// shift eliminar el elemento que este en el inicio del array
// indexoff muestra la posición de un elemento dentro del array

var masFrutas = frutas.push("Fresa");

frutas = ["manzana", "Banano", "Pera", "Uva", "Fresa"];

var ultimo = frutas.pop("Fresa");

var nuevalon = frutas.unshift("Coco");

var borrafruta = frutas.shift("Coco");

var posicion = frutas.indexOf("Fresa");
posicion;

//Desafio

var arraySecreto = [1, "gaylord", 3, "Computador"];
b = typeof(arraySecreto[0]);
function solucion(arraySecreto) {
    console.log(b===string? True: False)
}

var arraySecreto = [1, "gaylord", 3, "Computador"];
b = typeof(arraySecreto[0]);
function solucion(arraySecreto) {
    return b===string? True: False
}


var arraySecreto = [1, "gaylord", 3, "Computador"];
b = typeof(arraySecreto[0]);
function sol(b) {
    if (b==="string") {
        console.log("True")
    }
    else {
        console.log("False")
    }
}

var arraySecreto = [1, "gaylord", 3, "Computador"];
b = typeof(arraySecreto[0]);
function sol(b) {
    if (b==="string") {
        return True
    }
    else {
        return False
    }
}






