let nombre = prompt ("Ingrese su nombre") ;
let cursoNumero = Number(prompt("Hola " + nombre + " ! Ingresá el numero de curso que deseas comprar: "));
let precio = Number(prompt("Ahora ingresá el precio del curso que elegiste"));
let descuento = precio*10/100;
let pagar = precio-descuento;

alert ("Tu total a pagar con descuento del 10% es: $" +  pagar);

if (cursoNumero === 1) {
     alert ("O pagalo en 12 cuotas sin interés de $3.125");
} else if (cursoNumero === 2) {
     alert ("O pagalo en 12 cuotas sin interés de $3.750");
} else if (cursoNumero === 3) {
     alert ("O pagalo en 12 cuotas sin interés de $4.875");
}

const recomendaciones = Number(prompt("¿A cuantas personas les recomendarias estos cursos?"));
function ganasteDescuento () {
     for (let i=1; i>= recomendaciones ; i++) {
         continue;
 }
 console.log ("Tenés un descuento para tu próximo curso!")
 }
 
 ganasteDescuento();

 const librosdisponibles = [
     {
          titulo: "Ingles para negocios", 
          precio:2500,
          categoria: "Business",
          id: 1,
     },
     {
          titulo: "Ingles general",
          precio:2000,
          categoria:"general English",
          id: 2,
     },
     {
          titulo: "Ingles para viajes",
          precio: 2800,
          categoria:"travel",
          id: 3,
     },
     {
          titulo: "Ingles para examenes internacionales",
          precio: 3000, 
          categoria:"international exams",
          id: 4,
     }
]

const elegircategoria = prompt("Escriba la categoria a la que pertenece el libro que quiere para obtener mas informacion");

const libroSeleccionado = librosdisponibles.filter(libros => libros.categoria === "Business"); 

console.table(libroSeleccionado);
alert("Tu libro seleccionado está disponible :)");