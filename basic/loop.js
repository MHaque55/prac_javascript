let num = prompt("Enter a number greater than 100", '');
while(num <= 100 && num != "") {
    num = prompt("Did not work, enter a number greater than 100", '');
}

alert(`Contratz, the number is ${num}`);