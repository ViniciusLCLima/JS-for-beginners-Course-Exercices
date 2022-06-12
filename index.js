function exercVariablesAndConsoleLog() {
	variableVar = 3;
	console.log(`variableVar já têm o valor de ${variableVar}.`);
	const SAUDACAO = 'Hello world';
	const WRITINGHAND = '✍️';
	const NOME = 'Vinicius';
	const FRASE = 'Hoje é dia de jogo.';
	const DATA = '07/06/2022';
	const FRASE2 = 'Será um excelente jogo';
	var variableVar = 3;
	console.log(`variableVar agora têm o valor de ${variableVar}`);
	variableVar = 6;
	console.log(`variableVar agora têm o valor de ${variableVar}`);
	console.log(
		'Hello world, my name is Vinicius and I am learning JS in this course. ✍️'
	);
	console.log(
		'%s, my name is Vinicius and I am learning JS in this course. %s',
		SAUDACAO,
		WRITINGHAND
	);
	console.log(
		'%s, my name is %s and I am learning JS in this course. %s',
		SAUDACAO,
		NOME,
		WRITINGHAND
	);
}
exercVariablesAndConsoleLog();
// Exercising comments
//-------------------------------------
// console.log(`${SAUDACAO}, ${WRITINGHAND}, ${NOME}`);
// console.log(`${SAUDACAO}, my name is ${NOME}.`);
// console.log(`${FRASE} ${DATA}. ${FRASE2}.`);
// Example of code that should not be deleted, but also not executed, commented.
// TODO: The rest of the project with the instructions of the next videos of the course.
/* Multiple line comment is here
now ends, it is not commonly to be used */
//-------------------------------------

// Concatenating strings
function concatExerc() {
	const str1 = 'Hello ';
	const str2 = 'world';
	const str3 = 'beautiful ';
	console.log(str1 + str3 + str2 + '!');
	const course = 'JavaScript for begineers';
	const fullDate = new Date();
	const date =
		fullDate.getMonth() +
		'/' +
		fullDate.getDay() +
		'/' +
		fullDate.getFullYear(); // Este estilo de código têm propósitos educativos de se familiarizar com a concatenação utilizando "+".
	console.log(
		str1 +
			str3 +
			str2 +
			'! I am taking the ' +
			course +
			" course and I'am pretty excited to share this with you. Today is " +
			date +
			'.'
	);
}
concatExerc();

// Exercising template literals
function exercTemplateLiterals() {
	const NUM1 = 1;
	const NUM2 = 3;
	const HEBNAME = 'Dauid';
	const ENGNAME = 'David';
	const BOOL1 = true;
	console.log(
		`The sum between 1 and 3 is ${NUM1 + NUM2}, the multiplication is ${
			NUM1 * NUM2
		}, the subtraction between the first and the second is ${NUM1 - NUM2}`
	);
	console.log(
		`Did you know it? The one who's pointed out in the bible as "${ENGNAME}" had his name actually pronnouced ${HEBNAME} by his peers, according to some sources, but this may be wrong 😀. He was a great king in his time, as bible relates.`
	);
	console.log(`The opposite of true is ${!BOOL1}, the opposite of ${!BOOL1} is ${BOOL1}.
The preceding space will not be ignored, this is funny about template literals`);
}
exercTemplateLiterals();

// Exercising data types, typeof and instanceof
function exercDataTypes() {
	console.log(`

Data Types
`);

	const STRING = 'This is a string';
	const NUMBER2 = 2.5;
	const BOOLEAN = 0 == 3;
	const ARRAY = [2, 3, 'string'];
	const PEOPLE = {
		firstName: 'Vinícius',
		secondName: 'Leite',

		getAge: function () {
			let date = new Date();
			return date.getFullYear - 1998;
		},
	};
	function sayHello(people) {
		console.log(
			`Hello, my name is ${people.firstName}, and I am ${people.getAge} years old.`
		);
	}

	sayHello(PEOPLE);
	console.log(typeof STRING);
	console.log(typeof NUMBER2);
	console.log(typeof BOOLEAN);
	console.log(typeof ARRAY);
	console.log(typeof PEOPLE);
	console.log(ARRAY instanceof Array);
	console.log(NUMBER2 instanceof Number);
}
exercDataTypes();

// Math
function exercMath() {
	console.log(`

Math
`);
	let num1 = 20;
	let num2 = 2;
	console.log(
		`The first variable is equal to ${num1} and, the second, to ${num2}`
	);
	console.log(`Their sum is equal to ${num1 + num2}`);
	console.log(`The subtraction of the first to the second is ${num1 - num2}`);
	console.log(`The division of first by the second is ${num1 / num2}`);
	console.log(
		`The multiplication between the first and the second is ${num1 * num2}`
	);
	console.log(`The first incremented is equal to ${++num1}`);
	console.log(`The second decremented is equal to ${--num2}`);
	console.log(
		`The square root of the second decremented is ${Math.sqrt(num1)}.`
	);
}
exercMath();

// converting strings to numbers and numbers to strings

function exercConvertStrNum() {
	console.log(`

Converting strings to numbers and numbers to strings
	`);
	const NUM1 = 20;
	const NUM2 = 5;
	const NUM3 = 9.5;
	const STR1 = 'Today';
	const STR2 = '80';
	const STR3 = '8.5';
	const STR4 = '0xFFF';
	console.log(`NUM1 converted to string is: ${NUM1.toString()}`);
	console.log(`NUM2 converted to string is: ${NUM2.toString()}`);
	console.log(`NUM3 converted to string is: ${NUM3.toString()}`);
	console.log(
		`STR1 converted to number returns NaN, cause of no numerical characters in it: ${parseInt(
			STR1
		)}`
	);
	console.log(`STR2 converted to number is "80": ${parseInt(STR2)}`);
	console.log(
		`STR3 converted to number with parseInt is 8, cause anything from the special character on is discarded: ${parseInt(
			STR3
		)}. With parseFloat we can get 8.5: ${parseFloat(STR3)}`
	);
	console.log(
		`It is possible to get the value of hexadecimal numbers in string by preceding that number with 0x, so value of STR4 is: ${parseInt(
			STR4
		)}`
	);
}
exercConvertStrNum();

//Dealing with and throwing errors

function exercDealingWithErrors() {
	try {
		throw MyError;
	} catch (ex) {
		console.log('This will be printed cause throw keyword, throws an error.');
		console.log(
			'We can pass ex argument to catch for us to get the thrown error to it.'
		);
		console.log(ex);
	} finally {
		console.log(
			'This will be printed cause the block of code inside "finally" will always run'
		);
	}
}
exercDealingWithErrors();
