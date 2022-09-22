//ARRAY DE USUARIOS REGISTRADOS
let boton = document.getElementById('botonRegistrarme');
boton.addEventListener("click", capturar);

function capturar (){
     function Persona (nombre, email){
          this.nombre = nombre;
          this.email = email;
     }

    let nombreCapturar = document.getElementById("nombre").value;
    let emailCapturar = document.getElementById("email").value;
    let nuevoUsuario = new Persona (nombreCapturar, emailCapturar);
    agregar (nuevoUsuario);
}

let baseDatos = [];

function agregar(nuevoUsuario) {
 console.log("capturado");
 baseDatos.push(nuevoUsuario);
 console.log(baseDatos);
 document.getElementById ("tablaUsuario").innerHTML += "<tbody><td>" + nuevoUsuario.nombre + "</td><td>" + nuevoUsuario.email + "</td><tbody>";
 const enJSON = JSON.stringify(baseDatos);
 localStorage.setItem("basedatosEJ", enJSON);
 let baseDatosEnLS = JSON.stringify(localStorage.getItem("Db"))

}


