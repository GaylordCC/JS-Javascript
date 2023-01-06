// Las funciones puede ser:
// Declarativas

function miFuncion () {
    return 3;
}

miFuncion();


function SaludarEstudiante(Estudiante){
    console.log(Estudiante);
}

SaludarEstudiante(Estudiante);


// Template String o Plantilla de Cadena de Texto

function SaludarEstudiante(Estudiante){
    console.log(`Hola ${Estudiante}`);
}

SaludarEstudiante(Estudiante);


// Expresión o Funciones Anonimas

var miFuncion = function (a,b) {
    return a + b;
}

miFuncion();



function sumar(a,b){
    var resultado = a + b;
    return resultado;
}

sumar(5,9);


var miNombre = "Gaylord"

function nombre(){
    var miApellido = "Carrillo"
    console.log(miNombre +" " + miApellido);
}
nombre();