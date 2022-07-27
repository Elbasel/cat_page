// "use strict";

// function logThis() {
//   console.log(this);
// }

// logThis();

// const object = {
//   arrowFunc: () => this,
//   logThis() {
//     console.log(this);
//   },
// };

// console.log(object.arrowFunc());
// object.logThis();

// console.log(this);
const refObj = {
  func() {
    console.log(this);
  },
};
refObj.func``;
