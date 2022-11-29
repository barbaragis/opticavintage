// Saludo de inicio

let usuario = (prompt("Le damos la bienvenida  \n Ingrese su nombre"));
alert (" Bienvenido/a " +usuario+ "!") ;

//Eleccion del producto


let compra= parseInt(prompt("¿ Que modelo de gafas desea comprar? Ingrese el numero del modelo : 1- Gafas de sol modelo 2022 2- Gafas de sol Edición Verano 2023 "))
while ((compra !=1 && compra !=2 )) {
    alert("Producto inexistente, por favor escoja una opción válida")
    menu = parseInt(prompt("¿ Que modelo de gafas desea comprar? Ingrese el numero del modelo : 1- Gafas de sol modelo 2022 2- Gafas de sol Edición Verano 2023 "))
    break;
}

//Modelo elegido por el usuario

function eleccion (){
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

eleccion()