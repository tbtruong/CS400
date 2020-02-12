
/* 
Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
*/
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
    while(true) {
        let fib3 = fib1;
        fib1 = fib2;
        fib2 = fib1 + fib3;
        yield fib3;
    }
}
    


function* checksNumbers() {
    let count = 0;
    const sequence = spitsNumbers();
    while (count < 6) {
        let number = sequence.next().value;
        if (number % 2 == 0) {
            count++;
            yield number;
        }
        else {
            continue;
        }
    }
    return; // finished printing 6 numbers 
}



const test = checksNumbers();
console.log(test.next().value);
console.log(test.next().value);
console.log(test.next().value);
console.log(test.next().value);
console.log(test.next().value);
console.log(test.next().value);
console.log(test.next().value);


