function reverseFunc(param) {
    var p = param.toString();
    p = p.split('');
    p = p.reverse();
    return +p.join('');
}
console.log(reverseFunc([123]));