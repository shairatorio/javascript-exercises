const repeatString = function(str,num) {
    let arr = [];

    if(num >= 0) {
        for (let i = 0; i < num; i++) {
            arr.push(str);
        }
        return arr.join("");
    } else {
        return "ERROR";
    }
    
};

// console.log(repeatString('hey',-3));

// Do not edit below this line
module.exports = repeatString;