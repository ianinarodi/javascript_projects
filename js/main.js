let tienda = document.getElementById('tienda')
let cargando = document.getElementById('cargando')
let error = document.getElementById('error')
let cesta = JSON.parse(localStorage.getItem("carrito")) || []

//DATOS DEL LOCALSTORAGE EN EL DOM
let crearTienda = () => {
    return (tienda.innerHTML = tiendaItemsData
        .map((x) => {
            let { id, title, price, body, img } = x
            let search = cesta.find((x) => x.id === id) || []
            return `
        <div id=product-id-${id} class="item">
            <img src=${img} alt="">
            <div class="infoProductos">
                <h3>${title}</h3>
                <p>${body}</p>
                <div class="precioProductoInicio">
                    <h2> $ ${price}</h2>
                    <div class="botonesCarrito">
                        <i onClick="subir(${id})" class="bi bi-plus-circle"></i>
                        <div id=${id} class="quantity">
                        ${x.item === undefined ? 0 : search.item}
                        </div>
                        <i onClick="bajar(${id})" class="bi bi-dash-circle"></i>
                    </div>
                </div>

            </div>
        </div>
    `
        })
        .join(""))
}


// AUMENTAR Y DISMINUIR CANTIDAD PRODUCTOS EN CARRITO, Y ALMACERNARLOS EN LOCALSTORAGE
let subir = (id) => {
    let selectedItem = id
    let search = cesta.find((x) => x.id === selectedItem.id)

    if (search === undefined) {
        cesta.push({
            id: selectedItem.id,
            item: 1,
        })
    } else {
        search.item += 1
    }
    actualizar(selectedItem.id)
    localStorage.setItem("carrito", JSON.stringify(cesta))

}

let bajar = (id) => {
    let selectedItem = id
    let search = cesta.find((x) => x.id === selectedItem.id)

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    actualizar(selectedItem.id)
    cesta = cesta.filter((x) => x.item !== 0)
    localStorage.setItem("carrito", JSON.stringify(cesta))

}

//actualizar cantidad de items y valores en carrito
let actualizar = (id) => {
    let search = cesta.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    cuenta1()
}

let cuenta1 = () => {
    let cartIcon = document.getElementById("productosenCarrito")
    cartIcon.innerHTML = cesta.map((x) => x.item).reduce((x, y) => x + y, 0)
}
cuenta1()

//AJAX Y FETCH
 const URL = `js/data.json`

 let mientrasCargaPagina= () => {
    cargando.innerHTML = `
     <div class="d-flex align-items-center">
         <strong>Cargando pagina</strong>
         <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
     </div>
 `
     setTimeout(() => {
        cargando.innerHTML = ``
     }, 1500)
 }
 
 let cartelError = () => {
     return error.innerHTML = `
  <div>   
      <h1> Ocurrio un problema! </h1>
      <p>No puedo encontrar el contenido</p>
  </div>
  `
 }
 
 
 let errorOperacion = () => {
    mientrasCargaPagina()
     let tienda = ""
     fetch(URL)
         .then((response) => response.json())
         .then((data) => {
            tiendaItemsData = data
            crearTienda()
         })
         .catch((error) => {
            cartelError()
         })
 }
 errorOperacion()