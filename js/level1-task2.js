function minMax(arrayParam) {
    var result = {};
    result.min = Math.min(...arrayParam);
    result.max = Math.max(...arrayParam);
    return result;
}
console.log(minMax([1,2,3,4,5,6]));