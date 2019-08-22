function balikString(str) {
    var a = '';
    for (var i = str.length - 1; i >= 0; i--) {
        a = a + str[i];
    }

    return a;
}
// TEST CASES
console.log(balikString("hello world!"));
