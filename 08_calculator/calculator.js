const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
  return arr.reduce((p,c) => p + c, 0);
};

const multiply = function(arr) {
  return arr.reduce((p,c) => p * c, 1);
};

const power = function(x,y) {
	return x ** y;
};

const factorial = function(x) {
  let num = 0,
      i = 0,
      fact = 1;

  num = x; 

  for(i = 1; i <= num; ++i){
    fact = fact * i; 
  };

  return fact;
};

// console.log(add(4,2));
// console.log(subtract(10,4));
// console.log(sum([1,3,5,7,9]));
// console.log(multiply([2,4,6,8,10,12,14]));
// console.log(power(4,3));
// console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
