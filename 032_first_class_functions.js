// Throwing some stuff in here that I entered into the console.

// Functions are variables
const log = message => console.log(message);
log ("Hello from a first class function");
// > Hello from a first class function

// As variables we can add them to objects
const obj = {
	message: "this is what's in the message!",
	log(message) {
		console.log(message)
	}
};

obj.log(obj.message);
// > this is what's in the message!

// They can also be added to arrays
const message = [
	"you can tune a piano,",
	message => console.log(message),
	"but you can't tuna fish!",
	message => console.log(message)
];

message[1](message[0]);
// > you can tune a piano, ...ETC

// Sent to other functions as agruments:
const insideFn = logger => logger("Send me as a message!");

insideFn(message => console.log(message));
// > Send me as a message!

// They can also be returned from other functions, just like variables:
var createScream = function(logger) {
	return function(message) {
			logger(message.toUpperCase() + "!!!");
     }
 };

const scream = createScream(message => console.log(message));

scream("I do not like this one so well.");
// > I DO NOT LIKE THIS ONE SO WELL.!!!

scream("all he does is yell yell yell");
// > ALL HE DOES IS YELL YELL YELL!!!

