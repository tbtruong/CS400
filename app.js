/*Write a function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
your function using the string ‘supercalifragilisticexpialidocious’.
*/
const sortString = (sentence) => {
    return sentence.split('').sort().join('');
};

console.log(sortString("supercalifragilisticexpialidocious"));










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

// 
console.log(evalExpr("4+2")("4+2"))
console.log(evalExpr("5*7")("5*7"))
console.log(evalExpr("6-1")("6-1"))
console.log(evalExpr("9/2")("9/2"))
console.log(evalExpr("9%2")("9%2"))
/*
    Write a function that accepts two input parameters: a string, and a function. The function
should execute the passed function with the passed string and return the result.
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
string, the modified string, the total number of As in the modified string, and the overall length
of the modified string:
{
	 	 originalString: xxx,
	 	 modifiedString: xxx,
	 	 numberReplaced: xxx,
	 	 length: xxx
}
Print the data from the returned object on the console */

//write a function that accepts two input paramenters: str and functionhe function
//Write two expressions that call this function


const splitC = (string) => {
	return string.replace(/c/g,",c").split(",");
};


const capitalA = (string) => {
	return {
		originalString: string,
		modifiedString: string.replace(/a/g,"A"), 
		numberReplaced: string.split("a").length - 1,
		length: string.length
	}
}

const execFunc = (str,func) => {
	//console.log(`Func = ${func}`);
	//console.log(`str = ${str}`);
	console.log(func(str));
	return func(str);
}


const teststr = "supercalifragilisticexpialidocious";

execFunc(teststr, (string) => {
	return string.replace(/c/g,",c").split(",");
}) ;

execFunc(teststr, (string) => {
	return {
		originalString: string,
		modifiedString: string.replace(/a/g,"A"), 
		numberReplaced: string.split("a").length - 1,
		length: string.length
	}
});

