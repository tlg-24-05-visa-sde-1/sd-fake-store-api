export function createCard(product) {
  let newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
      <img class="card-img" src=${product.image} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-price">$${product.price.toFixed(2)}</h5>
        <h6 class="card-category">${product.category}</h6>
      </div>
      `;
  return newCard;
}
