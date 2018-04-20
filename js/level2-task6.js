function factorialFunc(numParam) {
    var result = 1;
    if (numParam == 0 || numParam == 1) {
        
        return result;
    } else {
        for (var i = 2; i <= numParam; i++) {
            result = result * i;
        }
    }

    return result;
}
console.log(factorialFunc(5));