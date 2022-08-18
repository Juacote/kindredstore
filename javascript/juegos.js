const cart=[];
const ps4 = []

class Product {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = parseInt(price);
      }
}

class CartElement {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
}

function storageCart(){
    cart=JSON.parse(localStorage.getItem("cart")) || [];
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


}

addCart();

function addCart(product){
    let buttonCard = document.getElementById(`btn${games.name}`)
    buttonCard.onclick = () => {
        let cartElements = new CartElement(product, 1);
        cart.push(cartElements);
        localStorage.setItem("cart",JSON.stringify(cart));
        alert("Agregaste "+games.name+" al Carrito.")
}
}


// ps4.forEach(games =>{
//     document.getElementById(`btn${games.name}`).addEventListener("click",() => {
//             let cartElements = new cartElement(product, 1)
//             cart.push(cartElements);
//     });
// });


// const PS5 = []

// PS5.push(new Product("Gran Turismo 7", "../images/GranTurismo.jpg", 11500));
// PS5.push(new Product("Dying Light 2", "../images/DyingLight2.jpg",  11000));
// PS5.push(new Product("Hogwarts Legacy", "../images/HarryPotter.jpg",  12000));



// GameCards=document.getElementById("PS5");
// for(const games of PS5){
//     let card=document.createElement("div");
//     card.className="";
//     card.innerHTML=`
//     <div class="card cardSize">
//         <div class="card-body">
//             <img src=${games.image} class="card-img-top gamesImage" alt="${games.name}">
//             <p class="card-text gamesList">${games.name}</p>
//             <p class="card-text gamesList">Precio: $${games.price}</p>
//             <p><button id="btn${games.name}" class="cardButton">Agregar al Carrito</button><p>
//         </div>
//     </div>`;
//     GameCards.append(card); 
// }
// PS5.forEach(games =>{
//     document.getElementById(`btn${games.name}`).addEventListener("click",function(){
//         pushCart(games)
//         });
// })


// const SWITCH = []

// SWITCH.push(new Product("Pokemon Arceus", "../images/PokemonArceus.jpg", 13000));
// SWITCH.push(new Product("Mario Kart 8 Deluxe", "../images/SuperMario.jpg",  12000));
// SWITCH.push(new Product("Luigi Mansion 3", "../images/LuigiMansion3.jpg",  12600));

// GameCards=document.getElementById("SWITCH");

// for(const games of SWITCH){
//     let card=document.createElement("div");
//     card.className="";
//     card.innerHTML=`
//     <div class="card cardSize">
//         <div class="card-body">
//             <img src=${games.image} class="card-img-top gamesImage" alt="${games.name}">
//             <p class="card-text gamesList">${games.name}</p>
//             <p class="card-text gamesList">Precio: $${games.price}</p>
//             <p><button id="btn${games.name}" class="cardButton">Agregar al Carrito</button><p>
//         </div>
//     </div>`;
//     GameCards.append(card); 
// }
// SWITCH.forEach(games =>{
//     document.getElementById(`btn${games.name}`).addEventListener("click",function(){
//         pushCart(games)
//         });
// })

const cartStructure = document.getElementById("items")
const footerCart = document.getElementById("footer")


createCart() 

function createCart() {

    let totalCart =0;
    cartStructure.innerHTML = "";

    cart.forEach(
        (structure) => {
            let cartLine = document.createElement("tr")

            cartLine.innerHTML = `
                <td>${structure.product.name}</td>
                <td><input id="amount-product-${structure.product.name}" type="number" value="${structure.amount}" min="1" max="5" step="1" style="width: 50px;"/></td>
                <td>${structure.product.price}</td>
                <td>${structure.product.price*structure.amount}</td>    
            `;

            totalCart+=structure.product.price*structure.amount;

            cartStructure.append(cartLine);

            let inputAmountProduct = document.getElementById(`amount-product-${structure.product.name}`)

            inputAmountProduct.addEventListener("change", (e) =>{
                let newAmount = e.target.value;
                structure.amount = newAmount;
                createCart();
            })


        }
    );

    if(cart.length == 0) {
        footerCart.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - no te olvides de comprar!!!</th>
        `;
    } else {
        footerCart.innerHTML = `
            <th scope="row" colspan="5">Total de la compra: $${(sumaCarrito)}</th>
        `;
    }

}       


function emptyCart(){
    document.getElementById("emptyCart").addEventListener("click", function(){
        cart = []
        localStorage.setItem("cart",JSON.stringify(cart));
    });
}