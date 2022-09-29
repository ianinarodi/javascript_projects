//DOM
let boton = document.getElementById('botonRegistrarme');
boton.addEventListener("click", capturar);

//ARRAY
function capturar (){
     function Persona (nombre, edad, email, contraseña){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.constraseña = contraseña;       
   }

   let nombreCapturar = document.getElementById("nombre").value;
   let edadCapturar = document.getElementById("edad").value;
   let emailCapturar = document.getElementById("email").value;
   let contraseñaCapturar = document.getElementById("contraseña").value;
  let nuevoUsuario = new Persona (nombreCapturar,edadCapturar ,emailCapturar,contraseñaCapturar);
  console.log(nuevoUsuario);
  agregar (nuevoUsuario);
}

//STORAGE Y JSON
let baseDatos = [];
function agregar(nuevoUsuario) {
  let baseDatosDeLs = JSON.parse(localStorage.getItem('basedatosEJ')) 
  if (baseDatosDeLs == null) { 
    baseDatosDeLs = []
  } 

    baseDatosDeLs.push(nuevoUsuario) 
    baseDatosDeLs.forEach(usuario => {
      document.getElementById('tablaUsuario').innerHTML +=
        '<tbody><td>' + usuario.nombre + '</td><td>' + usuario.edad + '</td><td>' + usuario.email + '</td><tbody>' 
    })
    localStorage.setItem('basedatosEJ', JSON.stringify(baseDatosDeLs)) 
    
//SPREAD
console.log(...baseDatosDeLs);
}

//OPCIONES DE LIBROS SELECCIONADOS VISIBLES EN  DIV
const selectElement = document.getElementById('libros');
selectElement.addEventListener('change', (event) => {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seleccionaste el libro:  ${event.target.value}`;
});

// OPERADORES AVANZADOS 1
baseDatos =JSON.stringify(localStorage.getItem("baseDatos")) || [] 

// LIBRERÍA
const bienvenida = document.querySelector("#botonRegistrarme");
botonRegistrarme.addEventListener ("click", () => {
Toastify({
    text: "Te registraste exitosamente! ",
    duration: 3000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #e99090, rgb(68, 2, 68))",
    },
    onClick: function(){} 
  }).showToast();  
})

const agregarCarrito = document.querySelector("#btn");
btn.addEventListener ("click", () => 
Swal.fire({
  title: 'Agregaste un producto al carrito',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("/imagenes/nyan-cat.gif")
    left top
    no-repeat  
  `})  
  )
