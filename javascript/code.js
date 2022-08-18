// //Arranca el listado de juegos

// class Producto {
//     constructor(nombre, consola, precio, cantidad) {
//         this.nombre = nombre.toUpperCase();
//         this.consola = consola;
//         this.precio = parseFloat(precio);
//         this.cantidad = cantidad;
//       }
// }

// const productos = []


// productos.push(new Producto("Elden Ring","PS4", 12000, 5));
// productos.push(new Producto("Horizon Forbidden West", "PS4", 12000, 5));
// productos.push(new Producto("Resident Evil 8 Village", "PS4", 9000, 5));
// productos.push(new Producto("Gran Turismo 7", "PS5", 11500, 3));
// productos.push(new Producto("Dying Light 2", "PS5", 11000, 3));
// productos.push(new Producto("Hogwarts Legacy", "PS5", 12000, 3));
// productos.push(new Producto("Pokemon Arceus", "SWITCH", 13000, 4));
// productos.push(new Producto("Mario Kart 8 Deluxe", "SWITCH", 12000, 4));
// productos.push(new Producto("Luigi Mansion 3", "SWITCH", 12600, 4));

// productos.sort((a,b) =>a.precio - b.precio);


// let juego=prompt("Bienvenido a Kindred Store, el mejor sitio de venta de videojuegos ¿Quiere ver nuestro catálogo? ¡Ingresa la consola y descubri que juegos tenemos para cada una de ellas! (si desea salir de la página o simplemente cancelar la compra escriba -salir-) \n\nPS4\nPS5\nSWITCH\n\nSALIR".toUpperCase());
// let precio=0;
// listadoJuegos()


// function listadoJuegos()

// {

// if(juego == "PS4"){
//     alert("!Perfecto, ahí vamos!".toUpperCase());
//     const PS4=productos.filter((consolas)=>consolas.consola.includes("PS4"));
//     console.table(PS4)
//     videoJuegos()
//     }else if(juego == "PS5"){
//         alert("!Perfecto, ahí vamos!".toUpperCase());
//         const PS5=productos.filter((consolas)=>consolas.consola.includes("PS5"));
//         console.table(PS5)
//         videoJuegos()
//     }else if(juego == "SWITCH"){
//         alert("!Perfecto, ahí vamos!".toUpperCase());
//         const SWITCH=productos.filter((consolas)=>consolas.consola.includes("SWITCH"));
//         console.table(SWITCH)
//         videoJuegos()
//     }else if(juego == "SALIR"){
//             alert("que lástima...".toUpperCase());    
//         }else{
//             alert("No contamos con esa consola.".toUpperCase());
//             juego=prompt("Bienvenido a Kindred Store, el mejor sitio de venta de videojuegos ¿Quiere ver nuestro catálogo? ¡Ingresa la consola y descubri que juegos tenemos para cada una de ellas! (si desea salir de la página o simplemente cancelar la compra escriba -salir-) \n\nPS4\nPS5\nSWITCH\n\nSALIR ".toUpperCase());
//         }

// } 
    
// //Finaliza el listado de juegos
 
// //Arranca venta de juegos 


// function videoJuegos()    
    
// {   
//     let videoJuego=prompt("Del menú que se ha desplegado, ingresa el nombre del juego que deseas agregar a tu carrito. \n(Introduzca la palabra -continuar- para seguir con la compra y -volver- si quiere ver las consolas de nuevo o cancelar la compra)".toUpperCase())    

//     while(videoJuego!="CONTINUAR"){
//         switch(videoJuego){
//             case "ELDEN RING":
//                 console.log("Excelente elección el Elden Ring. ¿querés algo más?".toUpperCase());
//                 precio=precio+12000;
//                 break;
//             case "HORIZON FORBIDDEN WEST":
//                 console.log("Excelente elección el Horizon Forbidden West. ¿querés algo más?");
//                 precio=precio+12000;
//                 break;
//             case "RESIDENT EVIL 8 VILLAGE":
//                 console.log("Excelente elección el Resident Evil 8 Village. ¿querés algo más?");
//                 precio=precio+9000;
//                 break;            
//             case "GRAN TURISMO 7":
//                 console.log("Excelente elección el Gran Turismo 7. ¿querés algo más?");
//                 precio=precio+11500;
//                 break;
//             case "DYING LIGHT 2":
//                 console.log("Excelente elección el Dying Light 2. ¿querés algo más?");
//                 precio=precio+11000;
//             case "HOGWARTS LEGACY":
//                 console.log("Excelente elección el Hogwarts Legacy. ¿querés algo más?");
//                 precio=precio+12000;
//                 break;    
//             case "POKEMON ARCEUS":
//                 console.log("Excelente elección el Pokemon Arceus. ¿querés algo más?");
//                 precio=precio+13000;
//                 break;            
//             case "MARIO KART 8 DELUXE":
//                 console.log("Excelente elección el Mario Kart 8 Deluxe. ¿querés algo más?");
//                 precio=precio+12000;
//                 break;
//             case "LUIGI MANSION 3":
//                 console.log("Excelente elección el Luigi Mansion 3. ¿querés algo más?");
//                 precio=precio+12600;            
//                 break;
//             case "VOLVER":
//                 juego=prompt("Bienvenido a Kindred Store, el mejor sitio de venta de videojuegos ¿Quiere ver nuestro catálogo? ¡Ingresa la consola y descubri que juegos tenemos para cada una de ellas! (si desea salir de la página o simplemente cancelar la compra escriba -salir-) \n\nPS4\nPS5\nSWITCH\n\nSALIR".toUpperCase());
//                 listadoJuegos()
//                 break;
//             default:
//                 console.log("por el momento no contamos con ese juego :/");
//                 break;
//         }
//         videoJuego=prompt("Del menú que se ha desplegado, ingresa el nombre del juego que deseas agregar a tu carrito. \n(Introduzca la palabra -continuar- para seguir con la compra y -volver- si quiere ver las consolas de nuevo o cancelar la compra)".toUpperCase())    

//     }

// }    

// console.log("Total a pagar $"+precio)


// //Finaliza venta de juegos 



// //arranca los métodos de pago


// function MostrarMetodosPago()

// {
//     let metodoPago=prompt("Elige el método de Pago ingresando el número.\n\n1) Tarjeta de Crédito (3 cuotas sin interes o 6 con un recargo del 10%)\n2) Tarjeta de Débito (3 cuotas sin interes o 6 con un recargo del 15%)\n3) Mercado Pago (3 cuotas con recargo del 10% o 6 con un recargo del 15%)\n4) Cancelar Compra".toUpperCase());

//     if (metodoPago == "1"){
//         tarjetaCrédito()
//     }else if(metodoPago == "2"){
//         tarjetaDébito()
//     }else if(metodoPago == "3"){
//         mercadoPago()
//     }else if(metodoPago == "4"){
//         alert("Que pena que hayas cancelado la compra...".toUpperCase());    
//     }else{
//         alert("No es valido el número ingresado, vuelva a intentar".toUpperCase());
//         MostrarMetodosPago()
//     }
// }

// MostrarMetodosPago()

// //finaliza los métodos de pago


// //arranca las funciones de métodos de pago

// function tarjetaCrédito()
// {
//     let cantidadCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas\n2) 6 cuotas (Con recargo del 10%)".toUpperCase());
//     if (cantidadCuotas == 1){
//         let totalSinRecargo = precio / 3;
//         alert("Perfecto, Cada cuota sera de $"+totalSinRecargo+". Ya seras redireccionado para finalizar la compra.".toUpperCase());
//     }else if(cantidadCuotas == 2){
//         let totalconRecargo = (precio / 6) * 1.10;
//         alert("Perfecto, Cada cuota sera de $"+totalconRecargo+". Ya seras redireccionado para finalizar la compra.".toUpperCase());
//     }else{
//         alert("No es valido el número ingresado, vuelva a intentar".toUpperCase());
//         tarjetaCrédito()
//     }
// }

// function tarjetaDébito()
// {
//     let cantidadCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas\n2) 6 cuotas (Con recargo del 15%)".toUpperCase());
//     if (cantidadCuotas == 1){
//         let totalSinRecargo = precio / 3;
//         alert("Perfecto, Cada cuota sera de $"+totalSinRecargo+". Ya seras redireccionado para finalizar la compra.".toUpperCase());
//     }else if(cantidadCuotas == 2){
//         let totalconRecargo = (precio / 6) * 1.15;
//         alert("Perfecto, Cada cuota sera de $"+totalconRecargo+". Ya seras redireccionado para finalizar la compra.".toUpperCase());
//     }else{
//         alert("No es valido el número ingresado, vuelva a intentar".toUpperCase());
//         tarjetaDébito()
//     }
// }

// function mercadoPago()
// {
//     let cantidadCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas (Con recargo del 10%)\n2) 6 cuotas (Con recargo del 15%)".toUpperCase());
//     if (cantidadCuotas == 1){
//         let totalSinRecargo = (precio / 3) * 1.10;
//         alert("Perfecto, Cada cuota sera de $"+totalSinRecargo+". Ya seras redireccionado para finalizar la compra.".toUpperCase());
//     }else if(cantidadCuotas == 2){
//         let totalconRecargo = (precio / 6) * 1.15;
//         alert("Perfecto, Cada cuota sera de $"+totalconRecargo+". Ya seras redireccionado para finalizar la compra.".toUpperCase());
//     }else{
//         alert("No es valido el número ingresado, vuelva a intentar".toUpperCase());
//         mercadoPago()
//     }
// }

