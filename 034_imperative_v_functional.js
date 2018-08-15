// 034_imperative_v_functional.js

// TASK: MAKE A STRING URL-FRIENDLY

// imperative approach
var string = "This is some sample text that needs to be made friendly";
var urlFriendly = "";

for (var i = 0; i < string.length; i++) {
	if (string[i] === " ") {
		urlFriendly += "-";
	} else {
		urlFriendly += string[i];
	}
}

console.log(urlFriendly);

// declarative approach
const string = "This is some sample text that needs to be made friendly";
const urlFriendly = string.replace(/ /g, "-");
console.log(urlFriendly);

// QED
