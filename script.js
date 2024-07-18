//imports
import { createCard } from "./js-modules/card.js";

// fetch all products
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      // make each product into a card
      let productCard = createCard(data[i]);
      // append each card to the div container
      document.querySelector(".product-container").appendChild(productCard);
    }
  });
