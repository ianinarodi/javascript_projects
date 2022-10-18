let totalPagar = document.getElementById('totalPagar')
let carritoCompras = document.getElementById('carritoCompras')
let cesta = JSON.parse(localStorage.getItem("carrito")) || []

//MOSTRAR SUMA DE PRODUCTOS EN ICONO CARRITO EN NAVBAR
let cuenta1 = () => {
    let iconoCarrito = document.getElementById("productosenCarrito")
    iconoCarrito.innerHTML = cesta.map((x) => x.item).reduce((x, y) => x + y, 0)
}
cuenta1()

//DATOS DEL LOCALSTORAGE EN EL DOM
let itemsenCarrito = () => {
    if (cesta.length !== 0) {
        return (carritoCompras.innerHTML = cesta
            .map((x) => {
                let { id, item } = x
                let search = shopItemsData.find((x) => x.id === id) || []
                let { img, title, price } = search
                return `
            <div class="productoenCarrito2">
                <img class="imagenProductoCarrito" src="${search.img}" alt="" />
            <div class="infoProductos">
                    <div class="precio1">
                    <h4 class="precio">
                    <p>${title}</p>
                    <p class="precioenCarrito1">$ ${price}</p>
                    </h4>
                    <i onclick="removeItem(${id})"class="bi bi-x-circle"></i>
                </div>
                <div class="botonesCarrito">
                        <i onclick="subir(${id})" class="bi bi-plus-circle"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onClick="bajar(${id})" class="bi bi-dash-circle"></i>
                    </div>
                <h3>$ ${item*price}</h3>
                </div>
            </div>
            `
            })
            .join(""))
    } else {
        carritoCompras.innerHTML = ``
        totalPagar.innerHTML = `
        <h2>Carrito Vacio!</h2>
        <a href="index.html">
        <button class="volverInicioCarrito">Volver al inicio</button>
        </a>
    `
    }
}

// AUMENTAR Y DISMINUIR CANTIDAD PRODUCTOS EN CARRITO, Y ALMACERNARLOS EN LOCALSTORAGE
itemsenCarrito()
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
    itemsenCarrito()
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
    itemsenCarrito()
    localStorage.setItem("carrito", JSON.stringify(cesta))
}

let actualizar = (id) => {
    let search = cesta.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    cuenta1(id)
    totalFinal()
}

//ELIMINAR PRODUCTOS DEL CARRITO MOSTRANDO SWEET ALERT
let vaciarCarrito1 = () => {
        cesta = []
        itemsenCarrito()
        cuenta1()
        localStorage.setItem("carrito", JSON.stringify(cesta))
    }

let alerta = () => {
        Swal.fire({
            title: '¿Desea Eliminar items del carrito?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarCarrito1()
                Swal.fire('Eliminado!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Volver al carrito', '', '')
            }
        })
    }

let removeItem = (id) => {
    let selectedItem = id
    cesta = cesta.filter((x) => x.id !== selectedItem.id)
    itemsenCarrito()
    totalFinal()
    cuenta1()
    localStorage.setItem("carrito", JSON.stringify(cesta))
}

//TOTAL A PAGAR
let totalFinal = () => {
    if (cesta.length !== 0) {
        let amount = cesta.map((x) => {
                let { item, id } = x
                let search = shopItemsData.find((x) => x.id === id) || []
                return item * search.price
            })
            .reduce((x, y) => x + y, 0)
        return (totalPagar.innerHTML = `
        <h2>Total: $ ${amount}</h2>
        <button onclick="alerta()" class="limpiarCarrito1">Limpiar carrito!</button>
        `)
    } else return
}

totalFinal()