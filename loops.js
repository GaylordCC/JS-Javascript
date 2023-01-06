// FOR


var estudiante = ["Maria", "sergio", "Rosa", "Daniel"];

function saludarEstudainte(estudiante) {
    console.log(`Hola, demos la bienvenida al estudiante ${estudiante}`);
}
for(var i = 0; i < estudiante.length; i++){
    saludarEstudainte(estudiante[i])
}




var estudiante = ["Maria", "sergio", "Rosa", "Daniel"];

function saludarEstudainte(estudiante) {
    console.log(`Hola, demos la bienvenida al estudiante ${estudiante}`);
}
for(var estudiante of estudiante){
    saludarEstudainte(estudiante)
}

var estudiante = ["Maria", "sergio", "Rosa", "Daniel"];

for(var i = 0; i < estudiante.length; i++){
    console.log(`Hola, demos la bienvenida al estudiante ${estudiante[i]}`);
}

// WHILE

var estudiante = ["Maria", "sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, demos la bienvenida al estudiante ${estudiante}`);
}

while(estudiante.length>0){
    var estudiantex = estudiante.shift();
    saludarEstudainte(estudiantex);
}


// DESAFIO *****

var estudiantes = ["Yuli", "Garyn", "Jose", "Dairo"];
count = 0;
var nuevo = "Dissu";

function solucion(estudiantes, count){
    estudiantes.push(nuevo);
    console.log(estudiantes);
}
if (count===0){
    solucion(estudiantes);
}
else if(count>0){
    for(i=0; i<count; i++){
        estudiantes.pop(i);
        console.log(i);
        //console.log(estudiantes);
        solucion(estudiantes);
    }
}



