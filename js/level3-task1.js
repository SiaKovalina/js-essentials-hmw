function recursion (n) {
    console.log(n);
    if (n <= 0) {
        return;
    }
     recursion(n-1);
}
recursion(10);