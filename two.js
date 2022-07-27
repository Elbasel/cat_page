// "use strict";

// class Example {
//   constructor() {
//     const proto = Object.getPrototypeOf(this);
//     console.log(Object.getOwnPropertyNames(proto));
//   }
//   first() {}
//   second() {}
//   static third() {}
// }

// new Example(); // ['constructor', 'first', 'second']
// console.log(Example.first);
class Base {
  constructor(num) {
    this.num = num;
  }
}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}

class AlsoAlsoGood extends Base {
  constructor(num) {
    super(num);
    this.type = "AlsoAlsogood";
  }
}

class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
// new Bad(); // ReferenceError
const a = new AlsoAlsoGood(3);
console.log(a);
