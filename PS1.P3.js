
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