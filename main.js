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

const elegirLibro = prompt("Escriba a continuacion el numero que corresponda al libro que desea: \n1. Ingles para negocios \n 2.Ingles general \n 3. Ingles para viajes \n 4. Ingles para examenes internacionales");

if (elegirLibro === "1") {
     alert("Elegiste Ingles para negocios")
} else if(elegirLibro === "2") {
     alert("Elegiste Ingles general ")
 } else if(elegirLibro === "3"){
     alert("Elegiste Ingles para viajes" )
  } else if(elegirLibro === "4") {
     alert("Elegiste Ingles para examenes internacionales ")
} 

const libroSeleccionado = librosdisponibles.filter(libros => libros.categoria === "Business"); 
console.table(libroSeleccionado);

//INTERACCION CON HTML

const texto1 = document.getElementById("primercard");
const texto2 = document.getElementById("segundacard");

console.log("primercard: " , texto1);
console.log("primercard: " , texto1.innerText);

const libroFinal = prompt("Volve a ingresar el numero de opcion elegida del 1 al 4")

if (libroFinal === ("1"))  {
     texto1.innerText = "¡Elegiste Ingles para negocios! ¡Felicitaciones por tu compra! 👏​💜​🥰​"
}else if (libroFinal === ("2"))  {
     texto1.innerText = "¡Elegiste Ingles general! ¡Felicitaciones por tu compra! 👏​💜​🥰​"
}else if (libroFinal === ("3"))  {
     texto1.innerText = "¡Elegiste Ingles para viajes! ¡Felicitaciones por tu compra! 👏​💜​🥰​"
}else if (libroFinal === ("4"))  {
     texto1.innerText = "¡Elegiste Ingles para examenes internacionales! ¡Felicitaciones por tu compra! 👏​💜​🥰​" }



 btn.onclick = () => console.log(" Estás cada vez mas cerca de comprar el libro que querés !!! ");

const textBox = document.querySelector("#usuario");
textBox.addEventListener("keydown", (e) => texto2.innerText = e.target.value);