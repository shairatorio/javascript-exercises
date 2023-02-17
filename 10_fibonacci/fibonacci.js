const fibonacci = function(n) {
    
    if (n < 1) {
        return "OOPS";
    } else if (n == 1 || n == 2) {
        return 1;
    } else {
        let prevPrev = 1;
        let prev = 1;
        let current = 0;

        for (let i = 3; i <= n; i++) {
          current = prev + prevPrev;
          prevPrev = prev;
          prev = current;
        }

        return current;
    }
};
console.log(fibonacci("8"));
// Do not edit below this line
module.exports = fibonacci;