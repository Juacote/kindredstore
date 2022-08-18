const cartStructure = document.getElementById("items")


function createCart() {
    cart.forEach(
        (structure) => {
            let renglonCarrito = document.createElement("tr")

            renglonCarrito.innerHTML = `
                <td>${structure.product.name}</td>
                <td><input id="cantidad-producto-${elemento.producto.name}" type="number" value="${structure.amount}" min="1" max="100" step="1" style="width: 50px;"/></td>
                <td>${structure.product.price}</td>
                <td>${structure.product.price*structure.amount}</td>    
            `;

            cartStructure.append(renglonCarrito);

        }
    )   
}