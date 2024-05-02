/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Roomwindow from "./RoomWindow";
import Backpack from "./Backpack";

const windowObj = new Roomwindow(3, false, true);

console.log("Before", windowObj.isMasquitoProof);

windowObj.masquitoProof(true);

console.log("After", windowObj.isMasquitoProof);

const bp = new Backpack("abc", 3, "red", 4, 25, 25, false);

console.log(bp);
