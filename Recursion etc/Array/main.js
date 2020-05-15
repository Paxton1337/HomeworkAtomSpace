let myArray = [1, 2, 3, 4, 5, { hello: "world" }];
console.log(myArray);

myArray.forEach((val, index) => {
  if (typeof val === "object") {
    myArray.pop(val);
  }
});
console.log(myArray);

console.log(myArray.join(" и "));

let changeArray = myArray.map((val, index) => {
  if (val === 4) {
    return 10;
  } else {
    return val;
  }
});
console.log(changeArray);
changeArray.reverse();
console.log(changeArray);
