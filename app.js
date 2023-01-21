
// OPTICA VINTAGE - Ecommerce de lentes


//Productos

const productos = [
    {
        id: "Gold" ,
        modelo: "GOLD BLUE",
        precio: 10000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/drip-670663_800x.jpg?v=1643435359",
        categoria: {
            modelo: "Lentes de sol",
            id:"sol"
        },
    },

    {
        id:"Aviador",
        modelo: "AVIADOR BLACK",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/john-334597_800x.jpg?v=1643435433",
        categoria: {
            modelo: "Lentes de sol",
            id:"sol"
        },
    },

    {
        id:"Durk",
        modelo: "DURK",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/durk-692810_800x.jpg?v=1643435357",
        cantidad: 1,
        categoria: {
            modelo: "Lentes de sol",
            id:"sol"
        },
    },

    {
        id:"NewRose",
        modelo: "NEW ROSE",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/savage-892578_800x.jpg?v=1643435484",
        categoria: {
            modelo: "Lentes de sol",
            id:"sol"
        },
    },

    {
        id:"John",
        modelo: "JOHN",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/joy-113521_800x.jpg?v=1668002392",
        categoria: {
            modelo: "Lentes de sol",
            id:"lentes de sol"
        },
    },

    {
        id:"Sugar",
        modelo: "SUGAR",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/sugar-672458_800x.jpg?v=1643435492",
        categoria: {
            modelo: "Lentes de sol",
            id:"sol"
        },
    },

    {
        id:"Print",
        modelo: "PRINT",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/notchy-498662_800x.jpg?v=1643435424",
        categoria: {
            modelo: "Lentes de sol",
            id:"sol"
        },
    },

    {
        id:"Hexagon",
        modelo: "HEXAGON",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/hexagon-blue-light-722249_800x.jpg?v=1659704777",
        categoria: {
            modelo: "Lentes de vista",
            id:"vista"
        },
    },
    
    {
        id:"Blue",
        modelo: "HUSTLE",
        precio: 30000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/hustle-blue-light-756258_800x.jpg?v=1643435426",
        categoria: {
            modelo: "Lentes de vista",
            id:"vista"
        },
    },

    {
        id:"Monaco",
        modelo: "MONACO",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/monaco-781944_800x.jpg?v=1672175481",
        categoria: {
            modelo: "Lentes de sol",
            id:"sol"
        },
    },

    {
        id:"Cadena",
        modelo: "CADENA",
        categoria: "Accesorios",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/chains-947165_800x.jpg?v=1643435357",
        categoria: {
            modelo: "Accesorios",
            id:"accesorios"
        },
    
    },
    

    {
        id:"Funda",
        modelo: "FUNDA",
        precio: 30000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/the-case-598069_800x.jpg?v=1668070562",
        categoria: {
            modelo: "Accesorios",
            id:"accesorios"
        },
      
    }
];


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

verProductos(productos);


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
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    const idAgregar = e.currentTarget.id;
    const prodAgregado = productos.find (item => item.id === idAgregar);
    
    if(carrito.some(item => item.id === idAgregar)){
        const index = carrito.findIndex(item => item.id === idAgregar);
        carrito[index].cantidad++;
    }else{
        prodAgregado.cantidad = 1;
        carrito.push(prodAgregado);
    }

    carritoNumero();

    localStorage.setItem("carrito" , JSON.stringify(carrito))
}

function carritoNumero (){
    let numero = carrito.reduce ((acc , item) => acc + item.cantidad , 0);
    cantidad.innerText = numero;
}

//NEWSLETTER

const newsletter = document.querySelector('.newsletter-modal');
const newsletterNuevo = document.getElementById('newsletter-formulario');


newsletter.addEventListener('click' , (e) => {
    if (e.target == newsletter){
        newsletter.style.display = 'none';
    }
});

newsletterNuevo.addEventListener ('submit' , (e) => {
    e.preventDefault ();

    newsletter.style.display = 'none';
});