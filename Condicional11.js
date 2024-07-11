// Pedir al usuario el curso y la beca
let curso = prompt("¿Qué curso te interesa? (Course / Carrera / Master)");
let beca = prompt("¿Cuentas con alguna beca? (Facebook / Google / Jesua / Ninguna)");

// Definir los costos mensuales de los cursos
let costoCourse = 4999;
let costoCarrera = 3999;
let costoMaster = 2999;

// Definir las duraciones de los cursos
let duracionCourse = 2;
let duracionCarrera = 6;
let duracionMaster = 12;

// Definir los descuentos de las becas
let descuentoFacebook = 0.2;
let descuentoGoogle = 0.15;
let descuentoJesua = 0.5;

// Calcular el precio mensual y total según el curso elegido
let precioMensual;
let costoTotal;
let duracion;

if (curso.toLowerCase() === "course") {
    precioMensual = costoCourse;
    duracion = duracionCourse;
} else if (curso.toLowerCase() === "carrera") {
    precioMensual = costoCarrera;
    duracion = duracionCarrera;
} else if (curso.toLowerCase() === "master") {
    precioMensual = costoMaster;
    duracion = duracionMaster;
} else {
    console.log("El curso elegido no es válido ): ");
}

// Aplicar el descuento correspondiente si tiene beca
if (beca.toLowerCase() === "facebook") {
    precioMensual -= precioMensual * descuentoFacebook;
} else if (beca.toLowerCase() === "google") {
    precioMensual -= precioMensual * descuentoGoogle;
} else if (beca.toLowerCase() === "jesua") {
    precioMensual -= precioMensual * descuentoJesua;
} else if (beca.toLowerCase() !== "ninguna") {
    console.log("La beca elegida no es válida, revisa si escribiste bien (:");
}

// Calcular el costo total del curso


// Mostrar los resultados en la consola
console.log("Precio mensual con descuento: $" + precioMensual + " MXN");
console.log("Duración del curso que tomaras: " + duracion + " meses");
costoTotal = (precioMensual * duracion);
console.log("Costo total del curso: $" + costoTotal + " MXN");