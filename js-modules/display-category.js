export function displayCategory(
  category,
  clearContainer,
  fetchData,
  createCard
) {
  // clear product container using .remove()
  clearContainer();

  // display products of a certain category
  fetchData(category, createCard);
}
