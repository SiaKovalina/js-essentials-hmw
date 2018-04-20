function reversedString(stringParam) {
    var result = stringParam.split('');
    result = result.reverse();
    return result.join('');
}
console.log(reversedString('Hello world'));