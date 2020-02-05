
/*
Write a function that takes as input each of the following strings in turn:
This function should
Determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`) 

You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
    always the same length).

*/


const evalExpr = (expr) => {
	switch(expr[1]) {
		case "+":
			return (expr) => parseInt(expr[0]) + parseInt(expr[2]);
		case "-":
			return (expr) => expr[0] - expr[2];
		case "*":
			return (expr) => expr[0] * expr[2];
		case "/":
			return (expr) => expr[0] / expr[2];
		default:
			return (expr) => "The operator is not supported as of the moment or is in the wrong format";
	}
};


console.log(evalExpr("4+2")("4+2"))
console.log(evalExpr("5*7")("5*7"))
console.log(evalExpr("6-1")("6-1"))
console.log(evalExpr("9/2")("9/2"))
console.log(evalExpr("9%2")("9%2"))