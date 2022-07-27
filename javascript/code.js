//Arranca el listado de juegos



let=juego=prompt("Elige los juegos que quieras de nuestro stock y aprovecha estas increíbles ofertas \n\nPS4\n\nElden Ring (Precio $12000)\nHorizon Forbidden West (Precio $12000)\nResident Evil 8 Village (Precio $9000)\n\nPS5\n\nGran Turismo 7 (Precio $12300)\nDying Light 2 (Precio $12300)\n\nSWITCH\n\nPokemon Arceus (Precio $12000)\nMario Kart 8 Deluxe (Precio $12600)\nLuigi Mansion 3 (Precio $12600) \n\n(Introduzca la palabra -continuar- para seguir con la compra)")
let precio=0;


while(juego!="continuar"){
    switch(juego){
        case "Elden Ring":
            console.log("Excelente elección el Elden Ring. ¿querés algo más?");
            precio=precio+12000;
            break;
        case "Horizon Forbidden West":
            console.log("Excelente elección el Horizon Forbidden West. ¿querés algo más?");
            precio=precio+12000;
            break;
        case "Resident Evil 8 Village":
            console.log("Excelente elección el Resident Evil 8 Village. ¿querés algo más?");
            precio=precio+9000;
            break;            
        case "Gran Turismo 7":
            console.log("Excelente elección el Gran Turismo 7. ¿querés algo más?");
            precio=precio+12300;
            break;
        case "Dying Light 2":
            console.log("Excelente elección el Dying Light 2. ¿querés algo más?");
            precio=precio+12300;
        case "Pokemon Arceus":
            console.log("Excelente elección el Pokemon Arceus. ¿querés algo más?");
            precio=precio+12000;
            break;            
        case "Mario Kart 8 Deluxe":
            console.log("Excelente elección el Mario Kart 8 Deluxe. ¿querés algo más?");
            precio=precio+12600;
            break;
        case "Luigi Mansion 3":
            console.log("Excelente elección el Luigi Mansion 3. ¿querés algo más?");
            precio=precio+12600;            
            break;            
        default:
            console.log("por el momento no contamos con ese juego :/");
            break;
    }
    juego=prompt("Elige los juegos que quieras de nuestro stock y aprovecha estas increíbles ofertas \n\nPS4\n\nElden Ring (Precio $12000)\nHorizon Forbidden West (Precio $12000)\nResident Evil 8 Village (Precio $9000)\n\nPS5\n\nGran Turismo 7 (Precio $12300)\nDying Light 2 (Precio $12300)\n\nSWITCH\n\nPokemon Arceus (Precio $12000)\nMario Kart 8 Deluxe (Precio $12600)\nLuigi Mansion 3 (Precio $12600) \n\n(Introduzca la palabra -continuar- para seguir con la compra)")
}

console.log("Total a pagar $"+precio)

//Finaliza el listado de juegos

//arranca los métodos de pago


function MostrarMetodosPago()

{
    let=metodoPago=prompt("Elige el método de Pago ingresando el número.\n\n1) Tarjeta de Crédito (3 cuotas sin interes o 6 con un recargo del 10%)\n2) Tarjeta de Débito (3 cuotas sin interes o 6 con un recargo del 15%)\n3) Mercado Pago (3 cuotas con recargo del 10% o 6 con un recargo del 15%)\n4) Cancelar Compra");

    if (metodoPago == "1"){
        tarjetaCrédito()
    }else if(metodoPago == "2"){
        tarjetaDébito()
    }else if(metodoPago == "3"){
        mercadoPago()
    }else if(metodoPago == "4"){
        alert("Que pena que hayas cancelado la compra...");    
    }else{
        alert("No es valido el número ingresado, vuelva a intentar");
        MostrarMetodosPago()
    }
}

MostrarMetodosPago()

//finaliza los métodos de pago


//arranca las funciones de métodos de pago

function tarjetaCrédito()
{
    let=cantidadCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas\n2) 6 cuotas (Con recargo del 10%)");
    if (cantidadCuotas == 1){
        let totalSinRecargo = precio / 3;
        alert("Perfecto, Cada cuota sera de $"+totalSinRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantidadCuotas == 2){
        let totalconRecargo = (precio / 6) * 1.10;
        alert("Perfecto, Cada cuota sera de $"+totalconRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else{
        alert("No es valido el número ingresado, vuelva a intentar");
        tarjetaCrédito()
    }
}

function tarjetaDébito()
{
    let=cantidadCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas\n2) 6 cuotas (Con recargo del 15%)");
    if (cantidadCuotas == 1){
        let totalSinRecargo = precio / 3;
        alert("Perfecto, Cada cuota sera de $"+totalSinRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantidadCuotas == 2){
        let totalconRecargo = (precio / 6) * 1.15;
        alert("Perfecto, Cada cuota sera de $"+totalconRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else{
        alert("No es valido el número ingresado, vuelva a intentar");
        tarjetaDédito()
    }
}

function mercadoPago()
{
    let=cantidadCuotas=prompt("Elige la cantidad de cuotas ingresando el número.\n\n1) 3 cuotas (Con recargo del 10%)\n2) 6 cuotas (Con recargo del 15%)");
    if (cantidadCuotas == 1){
        let totalSinRecargo = (precio / 3) * 1.10;
        alert("Perfecto, Cada cuota sera de $"+totalSinRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else if(cantidadCuotas == 2){
        let totalconRecargo = (precio / 6) * 1.15;
        alert("Perfecto, Cada cuota sera de $"+totalconRecargo+". Ya seras redireccionado para finalizar la compra.");
    }else{
        alert("No es valido el número ingresado, vuelva a intentar");
        mercadoPago()
    }
}

//finaliza las funciones de métodos de pago