function reverseFunc(param) {
    var result = param.toString();
    result = result.split('');
    result = result.reverse();

    return +result.join('');
}
console.log(reverseFunc([123]));