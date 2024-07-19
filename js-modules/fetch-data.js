export function fetchData(apiExtension, createCard) {
  let url = "";

  if (apiExtension === "products" || apiExtension === "all") {
    url = `https://fakestoreapi.com/products`;
  } else {
    url = `https://fakestoreapi.com/products/category/${apiExtension}`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        // make each product into a card
        let productCard = createCard(data[i]);
        // append each card to the div container
        document.querySelector(".product-container").appendChild(productCard);
      }
    });
}
