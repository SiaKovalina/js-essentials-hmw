function onlyPairNumbers(arr) {
    var resultArr=[];
    for (i=0; i<arr.length; i++) {
        if (arr[i]%2==0) {
            resultArr.push(arr[i]);
        }
    } return resultArr;
}
var arr2 = onlyPairNumbers([2,4,6,14,79,8]);
console.log(arr2);