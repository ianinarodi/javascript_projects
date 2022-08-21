
var nombre= prompt("Ingrese su nombre:");

alert("Hola " + nombre + " gracias por comunicarte con Asistencia Medica, como puedo ayudarte?");

do {
    console.log ("1. Solicitar turno \n 2.Consultar por pagos y facturas \n 3. Hablar con un representante \n 0. Salir");

    numberOption = prompt("Elige una opción: ");

    switch (numberOption) {

       case "0" : console.log ("Gracias por elegir Asistencia Medica, hasta luego!") ;

       break;

       case "1": console.log ("Indique la especialidad que necesita");

       break;

       case "2" : console.log ("Indique el mes de facturacion que desea consultar");

       break;

       case "3": console.log ("Lo pondremos en contacto con un operador");

       break;

       default: console.log ("Elija una opcion válida por favor");

       break;
    }

} while(numberOption !=="0");

