/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const roomWindow = {
  doors: 3,
  isMasquitoProof: false,
  lock: true,
  masquitoProof: function (status) {
    this.isMasquitoProof = status;
  },
};

console.log("room window object: ", roomWindow);

console.log("isMasquitoProof Before ", roomWindow.isMasquitoProof);

roomWindow.masquitoProof(true);

console.log("isMasquitoProof After ", roomWindow.isMasquitoProof);
