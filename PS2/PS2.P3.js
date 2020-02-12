/*
Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
code to call the function on each value of the array [1,2,3,4,5,6,7].
Note: The .map() method on Array is your friend here
*/

const cube = (x) => {
    return x**3;
}

let newNumbs = [1,2,3,4,5,6,7].map(cube);
console.log(newNumbs);