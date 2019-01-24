/* New Version */
// Math.js
export function add(x, y) {
  return x + y;
}

export function multiply(x, y) {
  return x * y;
}

// const MathObj = {
//   add,
//   multiply
// }
// export default MathObj
// export default add
// export default multiply

// AnotherFile.js
import { add } from "./Math";
add(1, 2);

/* Old Version */
// Math.js
function add(x, y) {
  return x + y;
}

module.exports = add;

// AnotherFile.js
const Math = require("./Math");
Math.add(1, 2);
