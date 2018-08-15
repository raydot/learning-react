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

/*
	The details of how spaces are dealt with are abstrated away inside the 
	replace function.  In a declarative program, the syntax itself describes what is happening.
*/

// Another declarative example:
const loadMapMembers = compose(
	combineWith(sessionStorage, "members"),
	save(sessionStorage, "members"),
	scopeMembers(window),
	logMemberInfoToConsole,
	logFieldsToConsole("name.first"),
	countMembersBy("location.state"),
	prepStatesForMapping,
	save(sessionStorage, "map"),
	renderUSMap
);

getFakeMembers(100).then(loadMapMembers);

/*
	The declarative approach is more readable and, thus, easier to reason about.
	The details of how each of these functions is implemented are abstracted away.
	When is is easier to reason about an application, that application is easier to scale.
*/
