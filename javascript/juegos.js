const carrito=[];

class Producto {
    constructor(nombre, imagen, precio) {
        this.nombre = nombre.toUpperCase();
        this.imagen = imagen;
        this.precio = parseInt(precio);
      }
}

const PS4 = []


PS4.push(new Producto("Elden Ring","../images/EldenRing.jpg", 12000));
PS4.push(new Producto("Horizon Forbidden West", "../images/Horizon.jpg", 12000));
PS4.push(new Producto("Resident Evil 8 Village", "../images/Re8.jpg", 9000));

let GameCards=document.getElementById("PS4");
for(const juegos of PS4){
    let card=document.createElement("div");
    card.className="";
    card.innerHTML=`
    <div class="card cardSize">
        <div class="card-body">
            <img src=${juegos.imagen} class="card-img-top gamesImage" alt="${juegos.nombre}">
            <p class="card-text gamesList">${juegos.nombre}</p>
            <p class="card-text gamesList">Precio: $${juegos.precio}</p>
            <p><button id="botonPS4" class="cardButton">Agregar al Carrito</button><p>
        </div>
    </div>
    `;
    GameCards.append(card);
};


const botonPS4=document.getElementById("botonPS4")
botonPS4.onclick = () => {
    console.log("Sumaste el Elden Ring a tu carrito");
    carrito.push(PS4[0].nombre)&&carrito.push("Precio $"+PS5[0].precio+"")
}

const PS5 = []

PS5.push(new Producto("Gran Turismo 7", "../images/GranTurismo.jpg", 11500));
PS5.push(new Producto("Dying Light 2", "../images/DyingLight2.jpg",  11000));
PS5.push(new Producto("Hogwarts Legacy", "../images/HarryPotter.jpg",  12000));

    GameCards=document.getElementById("PS5");
for(const juegos of PS5){
    let card=document.createElement("div");
    card.className="";
    card.innerHTML=`
    <div class="card cardSize">
        <div class="card-body">
            <img src=${juegos.imagen} class="card-img-top gamesImage" alt="${juegos.nombre}">
            <p class="card-text gamesList">${juegos.nombre}</p>
            <p class="card-text gamesList">${juegos.precio}</p>
            <p><button id="botonPS5" class="cardButton">Agregar al Carrito</button><p>
        </div>
    </div>
    `;
    GameCards.append(card);
};


const botonPS5=document.getElementById("botonPS5")
botonPS5.onclick = () => {
    console.log("Sumaste el Gran Turismo 7 a tu carrito");
    carrito.push(PS5[0].nombre)&&carrito.push("Precio $"+PS5[0].precio+"")
}



const SWITCH = []

SWITCH.push(new Producto("Pokemon Arceus", "../images/PokemonArceus.jpg", 13000));
SWITCH.push(new Producto("Mario Kart 8 Deluxe", "../images/SuperMario.jpg",  12000));
SWITCH.push(new Producto("Luigi Mansion 3", "../images/LuigiMansion3.jpg",  12600));

    GameCards=document.getElementById("SWITCH");
for(const juegos of SWITCH){
    let card=document.createElement("div");
    card.className="";
    card.innerHTML=`
    <div class="card cardSize">
        <div class="card-body">
            <img src=${juegos.imagen} class="card-img-top gamesImage" alt="${juegos.nombre}">
            <p class="card-text gamesList">${juegos.nombre}</p>
            <p class="card-text gamesList">${juegos.precio}</p>
            <p><button id="botonSwitch" class="cardButton">Agregar al Carrito</button><p>
        </div>
    </div>
    `;
    GameCards.append(card);
};

const botonSwitch=document.getElementById("botonSwitch")
botonSwitch.onclick = () => {
    console.log("Sumaste el Pokemon Arceus a tu carrito");
    carrito.push(SWITCH[0].nombre)&&carrito.push("Precio $"+SWITCH[0].precio+"")
}