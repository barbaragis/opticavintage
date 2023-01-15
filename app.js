
// OPTICA VINTAGE - Ecommerce de gafas de sol 

const contenido = document.getElementById("contenido"); 
const verCarrito = document.getElementById("verCarrito"); 
const modalContainer = document.getElementById("modalContainer");
const cantCarrito = document.getElementById("cantCarrito");



//Productos

const productos = [
    {
        id: "Gold" ,
        modelo: "GOLD BLUE",
        precio: 10000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/drip-670663_800x.jpg?v=1643435359",
        cantidad: 1,
    },

    {
        id:"Aviador",
        modelo: "AVIADOR BLACK",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/john-334597_800x.jpg?v=1643435433",
        cantidad: 1,
    },

    {
        id:"Durk",
        modelo: "DURK",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/durk-692810_800x.jpg?v=1643435357",
        cantidad: 1,
    },

    {
        id:"NewRose",
        modelo: "NEW ROSE",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/savage-892578_800x.jpg?v=1643435484",
        cantidad: 1,
    },

    {
        id:"John",
        modelo: "JOHN",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/joy-113521_800x.jpg?v=1668002392",
        cantidad: 1,
    },

    {
        id:"Sugar",
        modelo: "SUGAR",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/sugar-672458_800x.jpg?v=1643435492",
        cantidad: 1,
    },

    {
        id:"Print",
        modelo: "PRINT",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/notchy-498662_800x.jpg?v=1643435424",
        cantidad: 1,
    },

    {
        id:"Hexagon",
        modelo: "HEXAGON",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/hexagon-blue-light-722249_800x.jpg?v=1659704777",
        cantidad: 1,
    },

    {
        id:"Monaco",
        modelo: "MONACO",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/monaco-781944_800x.jpg?v=1672175481",
        cantidad: 1,
    },

    {
        id:"Cadena",
        modelo: "CADENA",
        categoria: "Accesorios",
        precio: 20000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/chains-947165_800x.jpg?v=1643435357",
        cantidad: 1,
    },
    

    {
        id:"Funda",
        modelo: "FUNDA",
        categoria: "Accesorios",
        precio: 30000,
        img: "https://cdn.shopify.com/s/files/1/0532/8070/2649/products/the-case-598069_800x.jpg?v=1668070562",
        cantidad: 1,
    }
];

//barra de busqueda





let carrito = JSON.parse(localStorage.getItem("productos")) || [];

productos.forEach((item) =>{
    let crearContenido = document.createElement ("div");
    crearContenido.className ="div";
    crearContenido.innerHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <img class="imagen" src = "${item.img}">
    </div>
    <h2 class="producto-titulo"> ${item.modelo}</h2>
    <p> $${item.precio} </p>
    </div>
    `
    contenido.append(crearContenido);

    let agregar = document.createElement("button");
    agregar.innerText  = "🛒 " ;
    agregar.className = "agregar";

    crearContenido.append(agregar);

    agregar.addEventListener("click", () =>  {
        const repetir = carrito.some((repetirProducto) => repetirProducto.id === item.id);
        if (repetir) {
            carrito.map((prod) => {
                if (prod.id === item.id) {
                    prod.cantidad++;
                }
            });
        } else {
        carrito.push({
            id : item.id,
            img: item.img,
            modelo : item.modelo,
            precio : item.precio,
            cantidad: item.cantidad,
        });
    }
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        text: '',
        title: ' Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
        padding: '1rem',
        grow: 'row',
        toast: 'true',
        color: 'white',
        background: 'black',
      })
        console.log(carrito);
        carritoNumero();
        guardarProductos();
    });
});

const guardarProductos = () => {
    localStorage.setItem ("productos" , JSON.stringify(carrito));
}




const mostrarCarrito = () =>{
    modalContainer.innerHTML= "";
    modalContainer.style.display= "flex";
    const modalHeader = document.createElement ("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML= `
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title"> CARRITO</h2>
      </div>
    </div>
  </div>
</div>
`;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerText = "✖";
    modalButton.className = "modal-header-boton";

    modalButton.addEventListener("click" , () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);



     carrito.forEach((item) => {
        let productoElegido = document.createElement("div");
        productoElegido.className = "modal-content";
        productoElegido.innerHTML = `
        <div>
        <img class="imagen" src=${item.img}
        </div>
        <div class="cantidad">
        <h3 class="restar" > ➖ </h3>
        <h3 >  ${item.cantidad} </h3>
        <h3 class="sumar" > ➕ </h3>
        </div>
    <h2 class="modelo"> ${item.modelo}</h2>
    <h3> SUBTOTAL $ ${item.cantidad * item.precio}  </h3>
    `; 

    modalContainer.append(productoElegido);

    //total

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className= "total"
    totalCompra.innerHTML = ` Total : $  ${total} `;
    

    modalContainer.append(totalCompra)

    console.log(carrito.length);

    let restar = productoElegido.querySelector(".restar");

    restar.addEventListener("click" , () => {
        if(item.cantidad !== 1){
            item.cantidad--;
            guardarProductos();
        }

        mostrarCarrito();
    });


    let sumar = productoElegido.querySelector(".sumar");

    sumar.addEventListener("click" , () => {
            item.cantidad++;
            guardarProductos();
        mostrarCarrito();
    });

    let eliminar = document.createElement("span");
    eliminar.innerText = "🗑️";
    eliminar.className = "borrar";
    productoElegido.append(eliminar);

    eliminar.addEventListener("click" , eliminarItem);
    })

    


};

verCarrito.addEventListener ("click" , mostrarCarrito);

//eliminar un producto

const eliminarItem = () =>{
    const buscar = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoItem) => {
        return carritoItem !== buscar;
    });

    carritoNumero();
    guardarProductos();
    mostrarCarrito();
};

const carritoNumero = () => {
    cantCarrito.style.display = "block";


    const carritoLenght = carrito.length;
    localStorage.setItem("carritoLength" , JSON.stringify(carritoLenght))
    cantCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

carritoNumero();




// Crear elementos en HTML 
/*




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
   /*  e.preventDefault();
    aviso.innerHTML= `
    <div class="alert alert-primary" role="alert">
        <h3> Gracias por suscribirte ! </h3>
    </div>
    `
}); */


