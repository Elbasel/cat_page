"use strict";

const p = new Promise((resolve, reject) => {
  console.log("inside promise", this);
  resolve(1);
});

p.then((result) => {
  console.log("inside then", this);
  console.log("result", result);
});

function hello() {
  console.log("inside hello", this);
}

hello();
