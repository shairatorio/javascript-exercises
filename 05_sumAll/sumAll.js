const sumAll = function(x,y) {
    let sum = 0;

    if (Math.sign(x) === -1 || Math.sign(y) === -1) {
        return "ERROR";
    } else if (typeof x === 'string' || typeof y === 'string') {
        return "ERROR";
    }
    else if (x < y) {
        for (x; x <= y; x++) {
            sum += x;
        }
        return sum;
    } else if (x > y) {
        for (y; y <= x; y++) {
            sum += y;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
