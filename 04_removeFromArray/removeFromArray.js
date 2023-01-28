const removeFromArray = function(arr, ...args) {
    return arr.filter(element => !args.includes(element));
};

// console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));

// Do not edit below this line
module.exports = removeFromArray;
