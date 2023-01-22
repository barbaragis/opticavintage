
// OPTICA VINTAGE - Ecommerce de lentes

let productos = [];

fetch("./productos.json")
    .then (response => response.json())
    .then (data => {
        productos = data;
        verProductos(productos);
    })


const containerProductos = document.querySelector("#container-prod");
const botonCategoria = document.querySelectorAll(".boton-categoria");
const titulo = document.querySelector("#titulo");
const cantidad = document.querySelector("#cantidad");
let agregarProducto = document.querySelectorAll(".productos-agregar");


//Contenedor de productos 

function verProductos (productoSeleccionado) {

    containerProductos.innerHTML = "";
    productoSeleccionado.forEach (item => {
        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML= `
        <div class="card " style="width: 18rem;">
        <img class="card-img-top"  src="${item.img}">
        <div class="card-body">
          <h3 class="card-title"> ${item.modelo}</h3>
          <p class="productos-precio">$${item.precio}</p>
          <button class="productos-agregar" id="${item.id}"> Agregar al carrito  </button>
        </div>
        </div>
      `;
      containerProductos.append(div);

      agregar();
    
    })

}


// Botones con categorias de productos

botonCategoria.forEach(boton => {

    boton.addEventListener ("click", (e) => {
    
       botonCategoria.forEach(boton => boton.classList.remove ("active"));

       e.currentTarget.classList.add ("active");
    
       if (e.currentTarget.id != "todos") {
        const prodCategoria = productos.find (item => item.categoria.id === e.currentTarget.id)
        titulo.innerText = prodCategoria.categoria.modelo;

        const productoBoton = productos.filter(item => item.categoria.id === e.currentTarget.id);
        verProductos(productoBoton);
    }else {
        titulo.innerText = "Todos los productos";
        verProductos(productos);
    }
    })
})

//Boton agregar productos al carrito

function agregar (){

    let agregarProducto = document.querySelectorAll(".productos-agregar");
    agregarProducto.forEach (boton => {

        boton.addEventListener("click" , agregarCarrito);
    });

}

let carrito;
let carritoLS = localStorage.getItem("carrito");

if (carritoLS){
    carrito = JSON.parse(carritoLS);
    carritoNumero();
}else{
    carrito = [];

}

function agregarCarrito (e){
    Toastify({
        text: "Agregaste un producto al carrito 🛒 ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #52796F, #2F3E46)",
        },
        onClick: function(){} 
      }).showToast();

    const idAgregar = e.currentTarget.id;
    const prodAgregado = productos.find (item => item.id === idAgregar);
    
    if(carrito.some(item => item.id === idAgregar)){
        const index = carrito.findIndex(item => item.id === idAgregar);
        carrito[index].cantidad++;
    }else{
        prodAgregado.cantidad = 1;
        carrito.push(prodAgregado);
    }

    //Cambio de cantidad en carrito al agregar nuevos productos
    carritoNumero();

    localStorage.setItem("carrito" , JSON.stringify(carrito))
}

function carritoNumero (){
    let numero = carrito.reduce ((acc , item) => acc + item.cantidad , 0);
    cantidad.innerText = numero;
}


//newsletter

function enviarForm(){
    let nombreForm = document.getElementById("nombre").value;
    let emailForm = document.getElementById("correo").value;
    if(nombreForm == ""){
        Toastify({
            text: "Debes ingresar tu nombre",
            duration: 3000,
            newWindow: true,
            gravity: "top", 
            position: "top", 
            stopOnFocus: true, 
            style: {
              background: "(to right, #D4A373, #96c93d)",
            },
            onClick: function(){} 
          }).showToast();
    
          document.getElementById("nombre").focus();

    }else{
        if (emailForm == ""){
            Toastify({
                text: "Debes ingresar tu correo electrónico",
                duration: 3000,
                newWindow: true,
                gravity: "top", 
                position: "top",
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} 
              }).showToast();
        document.getElementById("correo").focus();
        }else{

            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("nombre").focus();
            document.getElementById("correo").focus();
            Toastify({
                text: "Gracias por suscribirte ! Estarás recibiendo nuestras novedades a la brevedad ",
                duration: 3000,
                newWindow: true,
                gravity: "center", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #D5BDAF #D5BDAF)",
                },
                onClick: function() {} 
              }).showToast();
            }
        }}
