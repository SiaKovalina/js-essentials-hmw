function binarySearch(min, max, value) {
    var middle = Math.floor((min + max) / 2);
    console.log(middle);
    while (middle !== value && min < max) {
        if (value < middle) {
            max = middle - 1
        } else {
            min = middle + 1
        }
        middle = Math.floor((min + max) / 2);
        console.log(middle);
    }

    return middle;
};
binarySearch(0, 100, 10);