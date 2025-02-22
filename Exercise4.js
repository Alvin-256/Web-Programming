let number;
do {
    number = prompt("Please enter a number between 1 and 10:");
    number = Number(number);
} while (isNaN(number) || number < 1 || number > 10);

console.log("You entered a valid number:", number);