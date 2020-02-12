
/* 
Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
*/

function* spitsNumbers() {
    let fib1 = 0;
    let fib2 = 1;
    flag = 0; 
    const checkGen = checksNumbers(fib1);
    while (flag < 10) {
        console.log("Back at the spitsNumber function")
        output = fib1 + fib2; 
        checkGen.next(output); 
        fib1 = fib2;
        fib2 = output;
        console.log(`output is ${output}`);
        flag++;
    }
    
} 

function* checksNumbers(number) {
    let count = 0;
    console.log(number);
    const sequence = spitsNumbers();
    while (count < 6) {
        console.log("In the Check Number Function");
        console.log(`The number is: ${number}`);
        if (number % 2 == 0) {
            count++;
            console.log(number);
            yield number;
            sequence.next()
        }
        else {
            console.log(number);
            sequence.next();
        }
    }
    return; // finished printing 6 numbers 
}



const sequence = spitsNumbers();
console.log(sequence.next().value);



/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. 
*/
/*
let func = (...args) => {
    console.log(args);
    for (const arg of args) {
    console.log(arg);
    }
   }
   func(1,2,3,4,5,6); */