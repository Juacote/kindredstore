let cart = [];

class CartElement {
  constructor(product, amount) {
    this.product = product;
    this.amount = amount;
  }
}

function storageCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
}

const cartStructure = document.getElementById("items");
const footerCart = document.getElementById("footer");
const cartNumber = document.getElementById("CartNumber");

//comienza funcion que podes borrar por producto del carrito

const eraseProduct = (structureId) => {
  const item = cart.find((structure) => structure.product.name === structureId);
  const indice = cart.indexOf(item);
  cart.splice(indice, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  createCart();
};

//finaliza funcion que podes borrar por producto del carrito

//comienza funcion que crea el carrito y lo inyecta al html

function createCart() {
  let totalCart = 0;
  cartStructure.innerHTML = "";
  if (!cart.length) {
    cartNumber.innerText = 0;
  } else {
    cart.forEach((structure) => {
      let cartLine = document.createElement("tr");

      cartLine.innerHTML = `
                <img src="../images/${structure.product.image}" alt="${
        structure.product.image
      }" class="card-img-top" style="width: 140px; height: 140px;">
                <td>${structure.product.name}</td>
                <td><input id="amount-product-${
                  structure.product.name
                }" type="number" value="${
        structure.amount
      }" min="1" max="5" step="1" style="width: 50px;"/></td>
                <td>$${structure.product.price}</td>
                <td>$${structure.product.price * structure.amount}</td>
                <td> <button class='btn' alt="Eliminar producto" id="eliminar${
                  structure.product.name
                }"><img src="../images/basura.png"></button>    
            `;

      totalCart += structure.product.price * structure.amount;

      cartStructure.append(cartLine);

      let inputAmountProduct = document.getElementById(
        `amount-product-${structure.product.name}`
      );

      inputAmountProduct.addEventListener("change", (e) => {
        let newAmount = e.target.value;
        structure.amount = newAmount;
        createCart();
      });

      const eraseCart = document.getElementById(
        `eliminar${structure.product.name}`
      );
      eraseCart.addEventListener("click", function () {
        eraseProduct(structure.product.name);
      });

      cartNumber.innerText = cart.length;
    });
  }

  cart.length == 0
    ? (footerCart.innerHTML = ` <th scope="row" colspan="5">Carrito vacío - no te olvides de comprar!!!</th> `)
    : (footerCart.innerHTML = ` <th scope="row" colspan="5" style="font-size: 18px;">Total de la compra: $${totalCart}</th>`);
}

//finaliza funcion que crea el carrito y lo inyecta al html

//comienza funcion que borra o mantiene el carrito

function emptyCart() {
  document.getElementById("emptyCart").addEventListener("click", function () {
    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "¡Todavia no agregaste nada al carrito!",
      });
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-outline-dark btn-lg",
          cancelButton: "btn btn-outline-danger btn-lg",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "¿Estás seguro?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "¡Si, quiero borrarlo!",
          cancelButtonText: "¡No, me arrepenti!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            createCart();
            swalWithBootstrapButtons.fire(
              "¡Borrado!",
              "Que Lástima...",
              "success"
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "¡Cancelado!",
              "¡Tu carrito se encuentra a salvo!",
              "error"
            );
          }
        });
      createCart();
    }
  });
}

emptyCart();

//finaliza funcion que borra o mantiene el carrito

//comienza funcion que te redirecciona del carrito al formulario de pago

function checkout() {
  document.getElementById("checkout").addEventListener("click", function () {
    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "¡Todavia no agregaste nada al carrito!",
      });
    } else {
      createCart();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Felicidades, ya seras redireccionado al formulario de pago!",
        showConfirmButton: false,
        timer: 3500,
      }).then(() => {
        window.location.href = "./procesocompra.html";
      });
    }
  });
}

checkout();

cart = JSON.parse(localStorage.getItem("cart")) || [];
createCart(cart);
console.table(cart);

//finaliza funcion que te redirecciona del carrito al formulario de pago
