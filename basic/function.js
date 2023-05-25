function permutations(str) {
    let str2 = '';
    if (str.length == 0) {
        return str
    }

    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            str2 += str[i].toUpperCase();
        }
        else {
            str2 += str[i].toLowerCase();
        }
    }
    return str2;
}

console.log(permutations("navid"));
console.log(permutations("Yo12Llllo"));
console.log(permutations(""));
console.log(permutations("hELLO123"));