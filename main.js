
let nombre = prompt ("Ingrese su nombre") ;

let cursoNumero, precio, descuento, pagar;

cursoNumero = Number(prompt("Hola " + nombre + " ! Ingresá el numero de curso que deseas comprar: "));

precio = Number(prompt("Ahora ingresá el precio del curso que elegiste"));

descuento = precio*10/100;

pagar = precio-descuento;

alert ("Tu total a pagar con descuento del 10% es: $" +  pagar);

if (cursoNumero === 1) {
     alert ("O pagalo en 12 cuotas sin interés de $3.125");
} else if (cursoNumero === 2) {
     alert ("O pagalo en 12 cuotas sin interés de $3.750");
} else if (cursoNumero === 3) {
     alert ("O pagalo en 12 cuotas sin interés de $4.875");
}
