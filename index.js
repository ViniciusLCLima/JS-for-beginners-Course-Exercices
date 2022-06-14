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
	console.log(`Their sum is equal to ${num1 + num2}.`);
	console.log(`The subtraction of the first to the second is ${num1 - num2}.`);
	console.log(`The division of first by the second is ${num1 / num2}.`);
	console.log(
		`The multiplication between the first and the second is ${num1 * num2}.`
	);
	console.log(`The first incremented is equal to ${++num1}.`);
	console.log(`The second decremented is equal to ${--num2}.`);
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

// Working with dates

function exercDates() {
	console.log(`
	
Dates
	`);
	const NOW = new Date();
	const THANKSGIVING2022 = new Date(2022, 10, 24);
	const EVENTDAY = new Date();
	EVENTDAY.setDate(20);
	EVENTDAY.setMonth(8);
	EVENTDAY.setHours(20);
	console.log(`Time now: ${NOW}`);
	console.log(`Current day of the week: ${NOW.getDay() + 1}.`);
	console.log(
		`Thanksgiving day happens on ${
			THANKSGIVING2022.getDay() + 1
		} day of the week`
	);
	console.log(
		`The event will happen at ${EVENTDAY.getHours()} o'clock of day ${EVENTDAY.getDate()} of month ${
			EVENTDAY.getMonth() + 1
		}`
	);
}
exercDates();

// If statements and boolean operators
function exercIfStatements() {
	console.log(`
	
If statements
	`);
	const TEAM1GOALS = 2;
	const TEAM2GOALS = 2;
	console.log(
		'We have a game where two teams scored both two goals. Let if statement tell what was the result of the game:'
	);
	if (TEAM1GOALS > TEAM2GOALS) {
		console.log('Team 1 won!');
	} else if (TEAM1GOALS === TEAM2GOALS) {
		console.log('The game has drawn.');
	} else {
		console.log('Team 2 won!');
	}
	console.log(
		'Another way to do it is through a shorthand way with no braces. Since we just need one line of code for the different results.'
	);
	if (TEAM1GOALS > TEAM2GOALS) console.log('Team 1 won!');
	else if (TEAM1GOALS === TEAM2GOALS) console.log('The game has drawn.');
	else console.log('Team 2 won!');
	console.log('We also have another way to assign variables with if.');
	const TODAY = new Date();
	const TODAYEVENORODD = TODAY.getDate() % 2 === 0 ? 'even' : 'odd';
	console.log(`Today is an ${TODAYEVENORODD} day.`);
}
exercIfStatements();

// exerc switch, string cases, implicit values and more boolean logic
function exercSwitchAndOtherThings() {
	console.log(`

Switch, string cases and more boolean logic
`);
	console.log('JavaScript treats strings differently according to their case.');
	const NAME = 'Cristopher';
	if (NAME.toUpperCase() === 'CRISTOPHER') {
		console.log('Cristopher is here!');
	} else {
		console.log('Something gone wrong!');
	}
	const VALUE = 0;
	if (VALUE) {
		console.log('The VALUE constant has some value.');
	} else {
		console.log(
			'Since JS treats default values to data types as false, we can say the constant VALUE has no value'
		);
	}
	console.log(`Which one do you want to know about?`);
	const STATUS = 200;
	switch (STATUS) {
		case 200:
			console.log('Everything worked fine.');
			break;
		case 400:
		case 500:
			console.log('Error.');
			break;
		default:
			console.log('Unknown status');
	}
	const FAVORITETOY = 'ball';
	console.log(
		`Let's know what the computer says about my favourite toy with if statement and boolean operators. It is ${FAVORITETOY}.`
	);
	if (FAVORITETOY === 'doll' || FAVORITETOY === 'toy car') {
		console.log('Wow, i like it too!');
	} else if ('ball') {
		console.log(
			"Balls are good to kid with, there're lots of things you can do with it."
		);
	} else {
		console.log("Sorry, I didn't understand you.");
	}
}
exercSwitchAndOtherThings();

// Creating arrays

function exercCreatingArrays() {
	const ARRLENGTH = 3;
	const ARR1 = [];
	const ARR2 = Array(5);
	const ARR3 = Array(ARRLENGTH);
	console.log(`The array 1 has a length of ${ARR1.length}, cause it is empty.`);
	console.log(`The array 2 has a length of ${ARR2.length}`);
	console.log(`The array 3 has a length of ${ARR3.length}`);
}
exercCreatingArrays();

// Populating arrays

function exercPopArrays() {
	console.log(`
	
Populating Arrays
`);
	const ARR1 = ['Mouse', 'Laptop', 'Computer'];
	const ARR2 = Array(5);
	console.log(
		`We can get the value of the last element of an array by subtracting one from its length. Like, the value of the last element of ARR1 is ${
			ARR1[ARR1.length - 1]
		}`
	);
	ARR2[ARR2.length - 1] = "value of array's last element";
	console.log(
		`We can also change it this way. So the value of the last element of ARR2 now is "${
			ARR2[ARR2.length - 1]
		}".`
	);
	console.log(
		`The value of ARR2 first element is ${ARR2[0]}, since no value has been assigned to it.`
	);
}
exercPopArrays();

// Array methods

function exercArrayMethods() {
	console.log(`
	
Array methods
	`);
	const POSITIONS = [
		'N. Hulkenberg',
		'V. Bottas',
		'S. Perez',
		'M. Verstappen',
		'L. Hamilton',
	];
	console.log(
		`The top five of the F1 classification today were: ${POSITIONS.join(', ')}.`
	);
	console.log(
		`${POSITIONS.pop()} was disqualified and also ${POSITIONS.shift()}`
	);
	POSITIONS.unshift('M. Schumacher');
	POSITIONS.push('S. Ocon');
	FINALTOP10 = POSITIONS.concat([
		'K. Raikkonen',
		'L. Norris',
		'S. Vettel',
		'C. Leclerc',
		'D. Ricciardo',
	]);
	console.log(
		`Since S. Ocon got to the fifth place in the race, and M. Schumacher got first, the final top 10 was ${FINALTOP10.join(
			', '
		)}.`
	);
}
exercArrayMethods();

function getTop10() {
	const POSITIONS = [
		'N. Hulkenberg',
		'V. Bottas',
		'S. Perez',
		'M. Verstappen',
		'L. Hamilton',
	];
	POSITIONS.pop();
	POSITIONS.shift();
	POSITIONS.unshift('M. Schumacher');
	POSITIONS.push('S. Ocon');
	return POSITIONS.concat([
		'K. Raikkonen',
		'L. Norris',
		'S. Vettel',
		'C. Leclerc',
		'D. Ricciardo',
	]);
}

// Loops

function exercLoops() {
	console.log(`
	
Loops
	`);
	const POSITIONS = getTop10();
	console.log(
		"Let's see the final classification in a more funny and efficient way with loops:"
	);
	console.log('Using a while loop:');
	let whileIndex = 0;
	while (whileIndex < POSITIONS.length) {
		const name = POSITIONS[whileIndex];
		console.log(`${whileIndex + 1}. ${name}`);
		whileIndex++;
	}
	console.log(`
	Using a for loop:`);
	for (let forIndex = 0; forIndex < POSITIONS.length; forIndex++) {
		const name = POSITIONS[forIndex];
		console.log(`${forIndex + 1}. ${name}`);
	}
	console.log(`
	Using a for ... of loop:`);
	let pos = 1;
	for (const NAME of POSITIONS) {
		console.log(`${pos}. ${NAME}`);
		pos++;
	}
}
exercLoops();

// Functions

function exercFunctions() {
	console.log(`

Functions
`);
	console.log(
		"Let's make a function that calculates de sum between two numbers and returns it."
	);
	function sum2Numbers(num1, num2) {
		const SUM = num1 + num2;
		return SUM;
	}
	console.log(
		`Now we can know, by calling the function ${
			sum2Numbers.name
		}, the sum between 3 and 4 is ${sum2Numbers(3, 4)}`
	);
}
exercFunctions();

// Arrow functions

function exercArrowFunctions() {
	console.log(`
	
Arrow Functions
`);
	console.log(
		'Arrow functions are a shorthand way to create functions and can work differently from normal ones.'
	);
	const FNHELLO = () =>
		"Hello! Here we're calling an Arrow function that implicitly returns this string.";
	console.log(FNHELLO());
	const FNHELLOSOMEONE = (name) => {
		return (
			'Hello ' +
			name +
			"! Here we're calling an arrow function that explicitly returns this string and can take more than one line."
		);
	};
	console.log(FNHELLOSOMEONE('someone'));
}
exercArrowFunctions();

// JSON

function exercJSON() {
	console.log(`

JSON
`);
	const JSONPRODUCTS = `[{"name":"Social shirt", "price": 30.00},{"name":"short", "price": 20.00},{"name":"glasses", "price": 90.00},{"name":"Jeans shirt", "price": 40.00}]`;
	const OBJ = JSON.parse(JSONPRODUCTS);
	console.log(Array.isArray(OBJ));
	console.log("Here's the JSON we converted into an object:");
	console.log(OBJ);
	console.log(
		`The price of the third product of the array is equal to: ${OBJ[2].price}`
	);
	const JSONOBJ = JSON.stringify(OBJ);
	console.log(`Here's it again converted back to JSON:
${JSONOBJ}`);
}
exercJSON();
