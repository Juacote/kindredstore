//Arranca el listado de juegos

let=juego=prompt("Elige los juegos que quieras de nuestro stock y aprovecha estas increíbles ofertas \n\nPS4\n\nElden Ring (Precio $10000)\nHorizon Forbidden West (Precio $10000)\nResident Evil 8 Village (Precio $8000)\n\nPS5\n\nGran Turismo 7 (Precio $12400)\nDying Light 2 (Precio $11700)\n\nSWITCH\n\nPokemon Arceus (Precio $11000)\nMario Kart 8 Deluxe (Precio $12700)\nLuigi Mansion 3 (Precio $12500) \n\n(Introduzca la palabra -continuar- para seguir con la compra)")
let precio=0;

while(juego!="continuar"){
    switch(juego){
        case "Elden Ring":
            console.log("Excelente elección el Elden Ring. ¿querés algo más?");
            precio=precio+10000;
            break;
        case "Horizon Forbidden West":
            console.log("Excelente elección el Horizon Forbidden West. ¿querés algo más?");
            precio=precio+10000;
            break;
        case "Resident Evil 8 Village":
            console.log("Excelente elección el Resident Evil 8 Village. ¿querés algo más?");
            precio=precio+8000;
            break;            
        case "Gran Turismo 7":
            console.log("Excelente elección el Gran Turismo 7. ¿querés algo más?");
            precio=precio+12400;
            break;
        case "Dying Light 2":
            console.log("Excelente elección el Dying Light 2. ¿querés algo más?");
            precio=precio+11700;
        case "Pokemon Arceus":
            console.log("Excelente elección el Pokemon Arceus. ¿querés algo más?");
            precio=precio+11000;
            break;            
        case "Mario Kart 8 Deluxe":
            console.log("Excelente elección el Mario Kart 8 Deluxe. ¿querés algo más?");
            precio=precio+12700;
            break;
        case "Luigi Mansion 3":
            console.log("Excelente elección el Luigi Mansion 3. ¿querés algo más?");
            precio=precio+12500;            
            break;            
        default:
            console.log("por el momento no contamos con ese juego :/");
            break;
    }
    juego=prompt("Elige el juego que quieras de tus consolas favoritas y aprovecha estas increíbles ofertas \n\nPS4\n\nElden Ring (Precio $10000)\nHorizon Forbidden West (Precio $10000)\nResident Evil 8 Village (Precio $8000)\n\nPS5\n\nGran Turismo 7(Precio $12400)\nDying Light 2(Precio $11700)\n\nSWITCH\n\nPokemon Arceus (Precio $11000)\nMario Kart 8 Deluxe (Precio $12700)\nLuigi's Mansion 3 (Precio $12500) \n\n(Introduzca la palabra -continuar- para seguir con la compra)")
}

console.log("Total a pagar $"+precio)

//Finaliza el listado de juegos

//arranca los métodos de pago

let=metodoPago=prompt("Elige el método de Pago ingresando el número. \n\n1) Tarjeta de Crédito\n2) Tarjeta de Débito\n3) Mercado Pago\n4) Cancelar compra");

if (metodoPago == "1"){
    alert("Perfecto, espera unos segundos a ser redireccionado para finalizar la compra.");
}else if(metodoPago == "2"){
    alert("Perfecto, espera unos segundos a ser redireccionado para finalizar la compra.");
}else if(metodoPago == "3"){
    alert("Perfecto, espera unos segundos a ser redireccionado para finalizar la compra.");
}else if(metodoPago == "4"){
    alert("Que pena que hayas cancelado la compra...");    
}else{
    alert("No Introdujo ninguna opcion, su compra ha sido cancelada");
}

//finaliza los métodos de pago
