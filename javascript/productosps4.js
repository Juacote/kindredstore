window.onload = () => {
  document.getElementById("selectFilter").setAttribute("option", "default");
  document.getElementById("selectFilter").onchange = () => organizePs4();
};

// comienza funciones para inyectar las cards al html de los productos de playstation 4

let ps4Json = [];

GameCardsPs4 = document.getElementById("PS4");

function renderPs4() {
  console.log(ps4Json);
  for (const games of ps4Json) {
    let card = document.createElement("div");
    card.className = "";
    card.innerHTML = `
            <div class="card cardSize">
                <div class="card-body">
                    <img src=${games.image} class="card-img-top gamesImage" alt="${games.name}">
                    <p class="card-text gamesList">${games.name}</p>
                    <p class="card-text gamesList">Precio: $${games.price}</p>
                    <p><button id="btn${games.name}" class="cardButton">Agregar al Carrito</button><p>
                </div>
            </div>`;
    GameCardsPs4.append(card);
    function addCartPs4(product) {
      let buttonCard = document.getElementById(`btn${games.name}`);
      buttonCard.onclick = () => {
        let cartElements = new CartElement(product, 1);
        const productIndex = cart.findIndex(
          (product) => product.product.name === cartElements.product.name
        );
        if (productIndex >= 0) {
          cart[productIndex].amount += 1;
        } else {
          cart.push(cartElements);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        let { name, price } = games;
        Toastify({
          text: "Agregaste " + name + " a tu Carrito.",
          position: "center",
          className: "customToast",
          showIcon: "true",
          offset: {
            y: 400,
          },
          duration: 2000,
          style: {
            background:
              "linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55)",
          },
        }).showToast();
        console.table(name, "$" + price);
        createCart();
      };
    }
    addCartPs4(games);
  }
}

// finaliza funciones para inyectar las cards al html de los productos de playstation 4

// comienza funcion para traer los datos de la card del archivo .json

async function getPs4() {
  const URLJSONPS4 = "../javascript/ps4.json";
  const resp = await fetch(URLJSONPS4);
  const data = await resp.json();
  ps4Json = data;
  renderPs4();
}

getPs4();

// finaliza funcion para traer los datos de la card del archivo .json

// comienza funcion de filtro para odernar a las card por precio o nombre

function organizePs4() {
  let selectFilter = document.getElementById("selectFilter").value;
  console.log(selectFilter);
  if (selectFilter == "menor") {
    ps4Json.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (selectFilter == "mayor") {
    ps4Json.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (selectFilter == "alfabetico") {
    ps4Json.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
  GameCardsPs4.innerHTML = "";
  renderPs4();
}

organizePs4();

// finaliza  de filtro para odernar a las card por precio o nombre
