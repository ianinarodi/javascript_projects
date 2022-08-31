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

const productos= ["inglés para negocios", "inglés general","inglés para viajes","inglés exámenes internacionales "];
const precios= [2500, 2000, 2800, 3000];

console.table(productos);
console.table(precios);

productos.push("inglés para conversación");
precios.push(2300);

console.table(productos);
console.table(precios);


for (let i=0; i<=4; i++){
    precios[i]= precios[i] * 1.21;
}

<<<<<<< HEAD
console.table(precios);

=======
console.table(precios);
>>>>>>> master
