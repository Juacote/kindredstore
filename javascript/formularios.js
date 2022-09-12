//comienza funcion que trae el carrito en un listado al formulario de compra

function storageCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
}

function orderDetails() {
  const orderList = document.getElementById("order-details");
  let listDetailsHtml = cart.reduce((acc, curr) => {
    return acc.concat(`<li class="list-group-item d-flex justify-content-between">
        <div>
          <h6 class="my-0">${curr.product.name}<small> (${
      curr.amount
    })</small></h6>
        </div>
        <span class="text-muted">$${
          parseInt(curr.product.price) * curr.amount
        }</span>
      </li>`);
  }, "");
  const totalPrice = cart.reduce((acc, curr) => {
    return (acc += parseInt(curr.product.price) * curr.amount);
  }, 0);
  listDetailsHtml =
    listDetailsHtml.concat(`<li class="list-group-item d-flex justify-content-between bg-light">
  <span>Total</span>
  <strong>$${totalPrice}</strong>
</li>`);
  orderList.innerHTML = listDetailsHtml;
}

storageCart();
orderDetails();

//finaliza funcion que trae el carrito en un listado al formulario de compra

//comienza las validaciones de los inputs del formulacio de compra

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 a 14 numeros.
  adress: /^[a-zA-Z0-9\_\-\s]{4,30}$/, // Letras, numeros, guion y guion_bajo
  code: /^\d{1,4}$/, // 1 a 4 numeros.
};

const fields = {
  name: false,
  surname: false,
  phone: false,
  email: false,
  city: false,
  province: false,
  adress: false,
  code: false,
};

const validateForm = (e) => {
  switch (e.target.name) {
    case "name":
      validateCamp(expresiones.name, e.target, "name");
      console.log("funca");
      break;

    case "surname":
      validateCamp(expresiones.name, e.target, "surname");
      break;

    case "phone":
      validateCamp(expresiones.phone, e.target, "phone");
      break;

    case "email":
      validateCamp(expresiones.email, e.target, "email");
      break;

    case "province":
      validateCamp(expresiones.name, e.target, "province");
      break;

    case "city":
      validateCamp(expresiones.name, e.target, "city");
      break;

    case "adress":
      validateCamp(expresiones.adress, e.target, "adress");
      break;

    case "code":
      validateCamp(expresiones.code, e.target, "code");
      break;
  }
};

const validateCamp = (expresion, input, field) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`group__${field}`)
      .classList.remove("form__group-incorrect");
    document
      .getElementById(`group__${field}`)
      .classList.add("formulario__grupo-correcto");
    fields[field] = true;
  } else {
    document
      .getElementById(`group__${field}`)
      .classList.add("form__group-incorrect");
    fields[field] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(fields);

  if (
    fields.name &&
    fields.surname &&
    fields.phone &&
    fields.email &&
    fields.province &&
    fields.city &&
    fields.adress &&
    fields.code
  ) {
    form.reset();

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    createCart();
    orderDetails();
    document.getElementById("form__message-success");
    Swal.fire({
      icon: "success",
      title: "¡Felicidades su compra ha sido realizada!",
    });
  } else {
    document.getElementById("form__menssage");
    Swal.fire({
      icon: "error",
      title: "¡Faltan datos por completar!",
    });
  }
});

//finaliza las validaciones de los inputs del formulacio de compra y si se cumple el if
//borra todos los datos
