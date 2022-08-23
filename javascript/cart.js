let cart=[];

class CartElement {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
}

function storageCart(){
    cart=JSON.parse(localStorage.getItem("cart")) || [];
}


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
                <img src="../images/${structure.product.image}" alt="${structure.product.image}" class="card-img-top" style="width: 140px; height: 140px;">
                <td>${structure.product.name}</td>
                <td><input id="amount-product-${structure.product.name}" type="number" value="${structure.amount}" min="1" max="5" step="1" style="width: 50px;"/></td>
                <td>$${structure.product.price}</td>
                <td>$${structure.product.price*structure.amount}</td>    
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

 //inicia ternario   

    cart. length == 0 ? footerCart.innerHTML = ` <th scope="row" colspan="5">Carrito vacío - no te olvides de comprar!!!</th> ` : footerCart.innerHTML = ` <th scope="row" colspan="5" style="font-size: 18px;">Total de la compra: $${(totalCart)}</th>`;    

//finaliza ternario

}       


function emptyCart(){
    document.getElementById("emptyCart").addEventListener("click", function(){
        cart = []
        localStorage.setItem("cart",JSON.stringify(cart));
        alert("Vaciaste el carrito... Esperamos volver a verte!")
        createCart()
    });
}

emptyCart()


//inicia el OR

cart = JSON.parse(localStorage.getItem('cart')) || []
createCart(cart)
console.table(cart)

//finaliza el or