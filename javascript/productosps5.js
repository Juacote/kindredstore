window.onload = () => {
  document.getElementById("selectFilter").setAttribute("option", "default");
  document.getElementById("selectFilter").onchange = () => organizePs5();
};

// comienza funciones para inyectar las cards al html de los productos de playstation 5

let ps5Json = [];

GameCardsPs5 = document.getElementById("PS5");

function renderPs5() {
  console.log(ps5Json);
  for (const games of ps5Json) {
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
    GameCardsPs5.append(card);
    function addCartPs5(product) {
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
    addCartPs5(games);
  }
}

// finaliza funciones para inyectar las cards al html de los productos de playstation 5

// comienza funcion para traer los datos de la card del archivo .json

async function getPs5() {
  const URLJSONPS5 = "../javascript/ps5.json";
  const resp = await fetch(URLJSONPS5);
  const data = await resp.json();
  ps5Json = data;
  renderPs5();
}

getPs5();

// finaliza funcion para traer los datos de la card del archivo .json

// comienza funcion de filtro para odernar a las card por precio o nombre

function organizePs5() {
  let selectFilter = document.getElementById("selectFilter").value;
  console.log(selectFilter);
  if (selectFilter == "menor") {
    ps5Json.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (selectFilter == "mayor") {
    ps5Json.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (selectFilter == "alfabetico") {
    ps5Json.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
  GameCardsPs5.innerHTML = "";
  renderPs5();
}

organizePs5();

// finaliza  de filtro para odernar a las card por precio o nombre
