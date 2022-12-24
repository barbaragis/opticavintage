
// OPTICA VINTAGE - Ecommerce de gafas de sol 
// SEGUNDA PRE ENTREGA  

/*Saludo de inicio */

/* let usuario = (prompt("Le damos la bienvenida  \n Ingrese su nombre"));
alert (" Bienvenido/a " +usuario+ "!") ; */

// Modelo de gafas de sol a la venta

class gafas{
    constructor (id , modelo , precio)  {
        this.id=id;
        this.modelo = modelo;
        this.precio = parseFloat (precio);
    }

    sumaIva (){
        this.precio = `$${this.precio * 1.21} `
        console.log ( ` al precio se le incluye el Iva`) ;
    }
}


const producto0 = new gafas (0 , "modelo 0" , 10000 );
const producto1 = new gafas (1 , "modelo 1" , 20000 );
const producto2 = new gafas (2 , "modelo 2" , 30000 );
const producto3 = new gafas (3 , "modelo 3" , 20000 );
const producto4 = new gafas (4 , "modelo 4" , 25000 );
const producto5 = new gafas (5 , "modelo 5" , 15000 );

const productosGafas= [ producto0 , producto1, producto2, producto3, producto4, producto5]
console.log (productosGafas);

// mensaje para el usuario

/* let aviso = "Estos son nuestros modelos de gafas en promoción . \n  Elige la opción que más te guste \n "
for (elemento of productosGafas){

    aviso += `${elemento.id} - ${elemento.modelo} a $ ${elemento.precio} \n  `


}


let opcionUsuario = parseInt (prompt(aviso));

const productoElegido = productosGafas.find (elemento => elemento.id == opcionUsuario) */

//Funcion sumar IVA

/* for (const elemento of productosGafas){
    elemento.sumaIva;
} */

// Mensaje sobre el producto seleccionado

/* alert (` Elegiste el modelo de gafas ${productoElegido.modelo} que tiene un valor de $ ${productoElegido.precio} con IVA incluido \n ` ) 



/*PRIMERA PRE ENTREGA 

//Saludo de inicio

let usuario = (prompt("Le damos la bienvenida  \n Ingrese su nombre"));
alert (" Bienvenido/a " +usuario+ "!") ;

Eleccion del producto

let compra= parseInt(prompt("¿ Que modelo de gafas desea comprar? Ingrese el numero del modelo : 1- Gafas de sol modelo 2022 2- Gafas de sol Edición Verano 2023 "))
while ((compra !=1 && compra !=2 )) {
    alert("Producto inexistente, por favor escoja una opción válida")
    menu = parseInt(prompt("¿ Que modelo de gafas desea comprar? Ingrese el numero del modelo : 1- Gafas de sol modelo 2022 2- Gafas de sol Edición Verano 2023 "))
    break;
}

/* function eleccion (){
    switch (compra) {
        case 1:
            let modeloFiltro = parseInt (prompt("¿ Que tipo de filtro prefiere? Ingresa el número de la opción elegida ) : 1- Filtro solar 2- Polarizadas"))
            if (modeloFiltro=== 1) {
                alert ("El valor del modelo 2022 con filtro solar es de $20.000")
            } else if (modeloFiltro=== 2) {
                alert ("El valor del modelo 2022 con filtro solar es de $25.000")
            }
            break
        case 2: 
            let modeloPolarizadas = parseInt(prompt("¿ Qué tipo de filtro solar prefiere? Ingresa el número de la opción elegida) : 1- Filtro solar 2- Polarizadas"))
            if (modeloPolarizadas ===1){
                alert ("El valor del modelo 2023 con filtro polarizado es de $30.000")
            } else if (modeloPolarizadas===2) {
                alert ("El valor del modelo 2023 con filtro polarizado es de $35.000")
            }
    }
}

eleccion()  */


