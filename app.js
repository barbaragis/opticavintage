
// OPTICA VINTAGE - Ecommerce de gafas de sol 

const verCarrito = document.getElementById("verCarrito");
const compra = document.getElementById("compra");
const contenido = document.getElementById("contenido");

//Productos

const productos = [
    {
        id: "Gafas New Rose" ,
        modelo: "NEW ROSE",
        precio: 10000,
        img: "https://cdn.shopify.com/s/files/1/0917/4492/products/STARLIGHT-pink-1_700x.png?v=1666581660",
    },

    {
        id:"Gafas Black N30",
        modelo: "GAFAS BLACK N30",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0917/4492/products/STARLIGHT-smoke-1_2400x.png?v=1666581660",
    },

    {
        id:"Gafas black aviador",
        modelo: "GAFAS BLACK AVIADOR",
        precio: 30000,
        img: "https://cdn.shopify.com/s/files/1/0917/4492/products/LEY-6257_black_F_590x.jpg?v=1574391338",
    }
];


const aJson = JSON.stringify(productos)
console.log(aJson)

localStorage.setItem("Productos" , aJson)
sessionStorage.setItem("Productos" , "Gafas black aviador")


//obtener datos
const productosCarrito = JSON.parse(localStorage.getItem("Productos"))
console.log(productosCarrito)

//guardar 
localStorage.setItem("Productos" , JSON.stringify(productosCarrito))

console.log(productosCarrito)


let carrito = [] 

// Crear elementos en HTML 
productos.forEach((item) =>{
    let crearContenido = document.createElement ("div");
    crearContenido.className ="card";
    crearContenido.innerHTML = `
    <img class="imagen" src = "${item.img}">
    <h2> ${item.modelo}</h2>
    <p> $${item.precio} </p>

    `;

    contenido.append(crearContenido);

    let agregar = document.createElement("button");
    agregar.innerText  = "agregar" ;
    agregar.className = "agregar";

    crearContenido.append(agregar);

    agregar.addEventListener("click", () => {
        carrito.push({
            id : item.id,
            img: item.img,
            modelo : item.modelo,
            precio : item.precio,
        });
        console.log(carrito);
    });

});


//Carrito con productos elegidos por el cliente (El cliente agrega los productos y cuando toca el icono del carrito puede ver su elección)

verCarrito.addEventListener ("click" , () => {
    const carritoTotal = document.createElement ("div");
    carritoTotal.className = "carrito-total";
    carritoTotal.innerHTML=` 
    <h2> Mi carrito </h2>
    ` ;

    compra.append(carritoTotal);

    const carritoBoton = document.createElement("h3");
    carritoBoton.innerText = "X";
    carritoBoton.className = "carrito-boton";
    
    carritoTotal.append(carritoBoton);


    
carrito.forEach((item) => {
        let contenidoCarrito = document.createElement ("div");
        contenidoCarrito.className = "carrito-content";
        contenidoCarrito.innerHTML = `
        <img class="imagen" src="${item.img}">
        <h2> ${item.modelo}</h2>
        <p>$${item.precio} </p>

        `;

    compra.append(contenidoCarrito);
    });

    const total = carrito.reduce ((acc , el ) => acc + el.precio , 0);

    const totalCompra = document.createElement("div");
    totalCompra.innerHTML = ` total a pagar  : $${total} ` ;
    compra.append(totalCompra);


});


//formulario "NEWSLETTER"

let emailFormulario = document.querySelector("#email");


emailFormulario.addEventListener("input" , function () {
    console.log(emailFormulario.value);
    if (emailFormulario.value === ""){
        alert("Debes ingresar un correo electronico");
    }
});

let newsletter = document.querySelector("#newsletter");

let aviso = document.querySelector(".aviso");

//aviso cuando el usuario utiliza el boton SUSCRIBIRSE 
const mostrarAviso = newsletter.addEventListener("submit" , function (e){
    e.preventDefault();
    aviso.innerHTML= `
    <div class="alert alert-primary" role="alert">
        <h3> Gracias por suscribirte ! </h3>
    </div>
    `
});