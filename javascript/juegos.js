const cart=[];

class Product {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = parseInt(price);
      }
}

const PS4 = []


PS4.push(new Product("Elden Ring","../images/EldenRing.jpg", 12000));
PS4.push(new Product("Horizon Forbidden West", "../images/Horizon.jpg", 12000));
PS4.push(new Product("Resident Evil 8 Village", "../images/Re8.jpg", 9000));

let GameCards=document.getElementById("PS4");

    for(const games of PS4){
        let card=document.createElement("div");
        card.className="";
        card.innerHTML=`
        <div class="card cardSize">
            <div class="card-body">
                <img src=${games.image} class="card-img-top gamesImage" alt="${games.name}">
                <p class="card-text gamesList">${games.name}</p>
                <p class="card-text gamesList">Precio: $${games.price}</p>
                <p><button id="btn${games.name}" class="cardButton">Agregar al Carrito</button><p>
            </div>
        </div>`;
        GameCards.append(card); 
    }
    PS4.forEach(games =>{
        document.getElementById(`btn${games.name}`).addEventListener("click",function(){
            pushCart(games)
            });
    });

function pushCart(games){
    cart.push(games.name +"  "+ "Precio $ "+games.price+"");
    console.table(cart);
    alert("Agregaste "+games.name+" al Carrito.")
}


const PS5 = []

PS5.push(new Product("Gran Turismo 7", "../images/GranTurismo.jpg", 11500));
PS5.push(new Product("Dying Light 2", "../images/DyingLight2.jpg",  11000));
PS5.push(new Product("Hogwarts Legacy", "../images/HarryPotter.jpg",  12000));



GameCards=document.getElementById("PS5");
for(const games of PS5){
    let card=document.createElement("div");
    card.className="";
    card.innerHTML=`
    <div class="card cardSize">
        <div class="card-body">
            <img src=${games.image} class="card-img-top gamesImage" alt="${games.name}">
            <p class="card-text gamesList">${games.name}</p>
            <p class="card-text gamesList">Precio: $${games.price}</p>
            <p><button id="btn${games.name}" class="cardButton">Agregar al Carrito</button><p>
        </div>
    </div>`;
    GameCards.append(card); 
}
PS5.forEach(games =>{
    document.getElementById(`btn${games.name}`).addEventListener("click",function(){
        pushCart(games)
        });
})


const SWITCH = []

SWITCH.push(new Product("Pokemon Arceus", "../images/PokemonArceus.jpg", 13000));
SWITCH.push(new Product("Mario Kart 8 Deluxe", "../images/SuperMario.jpg",  12000));
SWITCH.push(new Product("Luigi Mansion 3", "../images/LuigiMansion3.jpg",  12600));

GameCards=document.getElementById("SWITCH");

for(const games of SWITCH){
    let card=document.createElement("div");
    card.className="";
    card.innerHTML=`
    <div class="card cardSize">
        <div class="card-body">
            <img src=${games.image} class="card-img-top gamesImage" alt="${games.name}">
            <p class="card-text gamesList">${games.name}</p>
            <p class="card-text gamesList">Precio: $${games.price}</p>
            <p><button id="btn${games.name}" class="cardButton">Agregar al Carrito</button><p>
        </div>
    </div>`;
    GameCards.append(card); 
}
SWITCH.forEach(games =>{
    document.getElementById(`btn${games.name}`).addEventListener("click",function(){
        pushCart(games)
        });
})

