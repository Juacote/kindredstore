const ps4 = []

class Product {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = parseInt(price);
      }
}

ps4.push(new Product("Elden Ring","../images/EldenRing.jpg", 12000));
ps4.push(new Product("Horizon Forbidden West", "../images/Horizon.jpg", 12000));
ps4.push(new Product("Resident Evil 8 Village", "../images/Re8.jpg", 9000));

let GameCards=document.getElementById("PS4");

    for(const games of ps4){
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
        function addCartPs4(product){
            let buttonCard = document.getElementById(`btn${games.name}`)
            buttonCard.onclick = () => {
                let cartElements = new CartElement(product, 1);
                cart.push(cartElements);
                localStorage.setItem("cart",JSON.stringify(cart));
                //inicia el desestructurador de objeto
                let {name,price} = games
                alert("Agregaste "+name+" al Carrito.")
                console.table(name,"$"+price)
                 //finaliza el desestructurador de objeto
                createCart()
        }
        }
        addCartPs4(games);


}



const ps5 = []

ps5.push(new Product("Gran Turismo 7", "../images/GranTurismo.jpg", 11500));
ps5.push(new Product("Dying Light 2", "../images/DyingLight2.jpg",  11000));
ps5.push(new Product("Hogwarts Legacy", "../images/HarryPotter.jpg",  12000));



GameCards=document.getElementById("PS5");
for(const games of ps5){
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
    function addCartPs5(product){
        let buttonCard = document.getElementById(`btn${games.name}`)
        buttonCard.onclick = () => {
            let cartElements = new CartElement(product, 1);
            cart.push(cartElements);
            localStorage.setItem("cart",JSON.stringify(cart));
                //inicia el desestructurador de objeto
                let {name,price} = games
                alert("Agregaste "+name+" al Carrito.")
                console.table(name,"$"+price)
                 //finaliza el desestructurador de objeto
            createCart()
    }
    }
    addCartPs5(games);
}



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
    function addCartSwitch(product){
        let buttonCard = document.getElementById(`btn${games.name}`)
        buttonCard.onclick = () => {
            let cartElements = new CartElement(product, 1);
            cart.push(cartElements);
            localStorage.setItem("cart",JSON.stringify(cart));
                //inicia el desestructurador de objeto
                let {name,price} = games
                alert("Agregaste "+name+" al Carrito.")
                console.table(name,"$"+price)
                 //finaliza el desestructurador de objeto
            createCart()
    }
    }
    addCartSwitch(games); 
}


