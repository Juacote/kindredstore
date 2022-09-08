window.onload=()=>{
    document.getElementById("selectFilter").setAttribute("option", "default");
    document.getElementById("selectFilter").onchange=()=>organizeSwitch();
};

let switchJson = [];


GameCardsSwitch=document.getElementById("SWITCH");

  function renderSwitch(){
        console.log(switchJson)
        for(const games of switchJson){
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
            GameCardsSwitch.append(card);
            function addCartSwitch(product){
                let buttonCard = document.getElementById(`btn${games.name}`)
                buttonCard.onclick = () => {
                    let cartElements = new CartElement(product, 1);
                    cart.push(cartElements);
                    localStorage.setItem("cart",JSON.stringify(cart));
                        let {name,price} = games
                        Toastify({
                            text: "Agregaste "+name+" a tu Carrito.",
                            position: "center",
                            className: "customToast",
                            showIcon: 'true',
                            offset: {
                                y: 400, 
                            },
                            duration: 2000,
                            style: {
                                background: "linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55)",
                            }
                        }).showToast();
                        console.table(name,"$"+price)
                    createCart()
    }
    }
    addCartSwitch(games);
}}


async function getSwitch() {
    const URLJSONSWITCH = "../javascript/switch.json";
    const resp = await fetch(URLJSONSWITCH)
    const data = await resp.json()
    switchJson = data;
    renderSwitch();
}

getSwitch();


function organizeSwitch() {
    let selectFilter = document.getElementById("selectFilter").value;
    console.log(selectFilter)
    if (selectFilter == "menor") {
        switchJson.sort(function(a, b) {
            return a.price - b.price
        });
    } else if (selectFilter == "mayor") {
        switchJson.sort(function(a, b) {
            return b.price - a.price
        });
    } else if (selectFilter == "alfabetico") {
        switchJson.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    }
    GameCardsSwitch.innerHTML="";
    renderSwitch();
}

organizeSwitch();