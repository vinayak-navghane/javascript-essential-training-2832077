/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const groceriesList = {
  shopName: "Dmart",
  item1: "Milk",
  item2: "Coffee",
  item3: "Suger",
};

function firstFunction(shoppingList) {
  const newArticle = document.createElement("shoppingDetails");
  newArticle.innerHTML = `
    <h1>Shopping from ${shoppingList.shopName}</h1>
    <ul>
       <ol>1.${shoppingList.item1}</ol>
       <ol>2.${shoppingList.item2}</ol>
       <ol>3.${shoppingList.item3}</ol>
    </ul>`;
  return newArticle;
}

const main = document.querySelector("main");
main.append(firstFunction(groceriesList));
