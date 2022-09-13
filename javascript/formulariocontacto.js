//comienza las validaciones de los inputs del formulario de contacto

const form2 = document.getElementById("ContactForm");
const inputs2 = document.querySelectorAll("#ContactForm input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 a 14 numeros.
};

const fields = {
  name: false,
  phone: false,
  email: false,
};

const validateForm = (e) => {
  switch (e.target.name) {
    case "name":
      validateCamp(expresiones.name, e.target, "name");
      break;
    case "email":
      validateCamp(expresiones.email, e.target, "email");
      break;
    case "phone":
      validateCamp(expresiones.phone, e.target, "phone");
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
    document
      .getElementById(`group__${field}`)
      .lastElementChild.classList.remove("perror");
    document
      .getElementById(`group__${field}`)
      .lastElementChild.classList.add("psinerror");

    fields[field] = true;
  } else {
    document
      .getElementById(`group__${field}`)
      .classList.add("form__group-incorrect");
    document
      .getElementById(`group__${field}`)
      .lastElementChild.classList.remove("psinerror");
    document
      .getElementById(`group__${field}`)
      .lastElementChild.classList.add("perror");
    fields[field] = false;
  }
};

inputs2.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(fields);

  if (fields.name && fields.phone && fields.email) {
    form2.reset();
    document.getElementById("form__message-success");
    Swal.fire({
      icon: "success",
      title: "¡Felicidades tu mensaje ha sido enviado!",
    });
  } else {
    document.getElementById("form__menssage");
    Swal.fire({
      icon: "error",
      title: "¡Faltan datos por completar!",
    });
  }
});

//finaliza las validaciones de los inputs del formulacio de contacto y si se cumple el if
//borra todos los datos
