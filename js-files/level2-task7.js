function generateRandomInt(min, max) {
    var max = Math.floor(max); //The Math.floor() function returns the largest integer less than or equal to a given number.
    var min = Math.ceil(min); //The Math.ceil() function returns the smallest integer greater than or equal to a given number.
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

console.log(generateRandomInt(5, 20));