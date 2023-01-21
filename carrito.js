let carrito = localStorage.getItem("carrito");
carrito = JSON.parse(carrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoBotones = document.querySelector("#carrito-botones");
const carritoAviso = document.querySelector("#carrito-aviso");
let botonEliminar = document.querySelectorAll(".carrito-prod-eliminar");
const botonVaciar = document.querySelector("#carrito-vaciar");
const totalCompra = document.querySelector("#totalCompra");
const botonComprar = document.querySelector("#carrito-comprar");

function verProductosDeCarrito(){
        if (carrito && carrito.length > 0 ) {


    carritoVacio.classList.add("disabled");
    carritoProductos.classList.remove("disabled");
    carritoBotones.classList.remove("disabled");
    carritoAviso.classList.add("disabled");

    carritoProductos.innerHTML= "";

    carrito.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `
    <img class="carrito-prod-imagen" src="${item.img}" alt=${item.modelo}>
    <div class="carrito-prod-titulos">
        <p> MODELO </p>
        <h4> ${item.modelo} </h4>
    </div>
    <div class="carrito-prod-titulos"">
    <span class="restar"> - </span>
        <p> CANTIDAD </p>
        <h4> ${item.cantidad}</h4>
        <span class="sumar"> +  </span>
</div>
<div class="carrito-prod-titulos"">
    <p> PRECIO </p>
    <h4> $ ${item.precio} </h4>
</div>
<div class="carrito-prod-titulos"">
<p> SUBTOTAL </p>
<h4> $ ${item.precio * item.cantidad}</h4>
</div>
<button class="carrito-prod-eliminar" id="${item.id}">🗑️</button>
    `
    ;

    carritoProductos.append(div);
        
})


eliminar();
generarTotal();

}else{
    carritoVacio.classList.remove("disabled");
    carritoProductos.classList.add("disabled");
    carritoBotones.classList.add("disabled");
    carritoAviso.classList.add("disabled"); 
    } 
}


verProductosDeCarrito();



function eliminar (){
    botonEliminar = document.querySelectorAll(".carrito-prod-eliminar");
    botonEliminar.forEach (boton => {
        boton.addEventListener("click" , eliminarCarrito);
    });

}

function eliminarCarrito(e){
    const idAgregar = e.currentTarget.id;
    const index= carrito.findIndex(item => item.id === idAgregar);
    
    carrito.splice(index, 1);

    verProductosDeCarrito();

    localStorage.setItem("carrito" , JSON.stringify(carrito));

    
}

botonVaciar.addEventListener("click" , vaciarCarrito);

function vaciarCarrito(){

    Swal.fire({
        title: 'Estás seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si ,!',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
            carrito.length = 0;
            localStorage.setItem("carrito" , JSON.stringify(carrito));
            verProductosDeCarrito();
          }
      })

      totalCompra.classList.add("disabled");
}


function generarTotal(){
    const totalNumero = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad) , 0);
    totalCompra.innerText =  `
    TOTAL : $ ${totalNumero};
    `
}


botonComprar.addEventListener("click" , comprarProductos);

function comprarProductos() {
    carrito.length = 0;
    localStorage.setItem("carrito" , JSON.stringify(carrito));

    carritoVacio.classList.add("disabled");
    carritoProductos.classList.add("disabled");
    carritoBotones.classList.add("disabled");
    carritoAviso.classList.remove("disabled"); 
    totalCompra.classList.add("disabled");
    botonVaciar.classList.add("disabled");
    botonComprar.classList.add("disabled");

}