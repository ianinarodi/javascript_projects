
//ARRAY DE USUARIOS REGISTRADOS
let boton = document.getElementById('botonRegistrarme');
boton.addEventListener("click", capturar);

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

//OPCIONES DE LIBROS SELECCIONADOS VISIBLES EN UN DIV
const selectElement = document.getElementById('libros');
selectElement.addEventListener('change', (event) => {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seleccionaste el libro:  ${event.target.value}`;
});

// OPERADORES AVANZADOS 1
baseDatos =JSON.stringify(localStorage.getItem("baseDatos")) || [] 





