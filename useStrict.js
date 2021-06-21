"use strict";

//a = 20;
let a = 10;

console.log(a);

var obj1 = {
  age: 10,
  name: "venkat",
};

var obj2 = {
  name: "venkat",
  age: 10,
};

const hasDataIdentical = function (obj1, obj2) {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};
console.log("hasDataIdentical(obj1, obj2)", hasDataIdentical(obj1, obj2));
console.log("obj1.toString() == obj2.toString()", obj1.toString() == obj2.toString());
console.log("obj1.toString() === obj2.toString()", obj1.toString() === obj2.toString());
console.log("JSON.stringify(obj1) == JSON.stringify(obj2)", JSON.stringify(obj1) == JSON.stringify(obj2));
