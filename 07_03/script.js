/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["pig", "headlamp", "pen"];

// console.log(backpackContents.join("| "));
// backpackContents[backpackContents.length] = "at four";

// backpackContents.push("eraser", "sharpner");

// backpackContents.forEach((item) => {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);

console.log(backpackContents);
