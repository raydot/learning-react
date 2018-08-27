// 041_data_transformations.js

/* 
	There are two core functions that you musts master in order to be proficient with function Javascript:

	Array.map and
	Array.reduce

*/

// Consider this array of high schools:

const schools = [
	"Yorktown",
	"Washington & Lee",
	"Wakefield",
	"Waukesha",
	"Wabash",
	"New Trier",
	"Tam High",
	"Redwood"
]

console.log(schools.join(", "));

// > Yorktown, Washington & Lee, Wakefield


// Build a fiter for schools that begin with W
const wSchools = schools.filter(school => school[0] == 'W');

console.log(wSchools);
// > ["Washington & Lee", "Wakefield", "Waukesha", "Wabash"]

// array.filter takes a predicate as it's only argument
// A predicate is a function that always returns a boolean value

// When it is time to remove an item from an array we should use Array.filter or Array.pop or Array.splice because Array.filter is immutable.

const cutSchool = (cut, list) => 
	list.filter(school => school !== cut);

console.log(cutSchool("New Trier", schools).join(" * "));
// > Yorktown * Washington & Lee * Wakefield * Waukesha * Wabash * Tam High * Redwood

console.log(schools.join("\n"));

/*
	Yorktown
	Washington & Lee
	Wakefield
	Waukesha
	Wabash
	New Trier <-- didn't go anywhere!
	Tam High
	Redwood	*/

// Instead of a predicate, Array.map takes a function as its argument.  This function will be invoked once for every item in the array:

const highSchools = schools.map(school => `${school} High School`);

// > ["Yorktown High School", "Washington & Lee High School", "Wakefield High School", "Waukesha High School", "Wabash High School", "New Trier High School", "Tam High High School", "Redwood High School"]

// Here is an example of the map function returning an object for every school:
const highSchools2 = schools.map(school => ({ name: school }));

/*
(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
:
{name: "Yorktown"}
1
:
{name: "Washington & Lee"}
2
:
{name: "Wakefield"}
3
:
{name: "Waukesha"}
4
:
{name: "Wabash"}
5
:
{name: "New Trier"}
6
:
{name: "Tam High"}
7
:
{name: "Redwood"}
*/

let schools = [{ name: "Yorktown" }, { name: "Stratford" }, { name: "Cummins" }, {name: "Wakefield"}];

const editName = (oldName, name, arr) =>
	arr.map(item => {
		if (item.name === oldName) {
			return {...item, name}; // I do not entirely understand how this works.
		} else {
			return item;
		}
	});

let updatedSchools = editName("Stratford", "Yo-Yo Ma", schools);

/* > (4) [{…}, {…}, {…}, {…}]
0
:
{name: "Yorktown"}
1
:
{name: "Yo-Yo Ma"}
2
:
{name: "Cummins"}
3
:
{name: "Wakefield"} */

// QUICK NOTE ON THE SPREAD OPERATOR JUST TO CLARIFY
// https://codeburst.io/javascript-the-spread-operator-a867a71668ca

var middle = [3 , 4];
var arr = [1, 2, middle, 5, 6];

// > arr = [1, 2, [3, 4], 5, 6]

var middle = [3 , 4];
var arr = [1, 2, ...middle, 5, 6];

// > arr = [1, 2, 3, 4, 5, 6]

// BACK TO THE BOOK

// if you need to transform an array into an object you can use Array.map in conjunction with Object.keys
const schools = { "Yorktown": 10, "Colgate": 2, "Yale": 5};

const schoolArray = Object.keys(schools).map(key =>
	({
		name: key,
		wins: schools[key]
	})
);

console.log(schoolArray);
 
/*
> (3) [{…}, {…}, {…}]
0
:
{name: "Yorktown", wins: 10}
1
:
{name: "Colgate", wins: 2}
2
:
{name: "Yale", wins: 5}
*/

// The final tool that we need in our functional arsenal is the ability to transform arrays into primitives and other objects.

// reduce and reduceRight can be used to transform an array into any value, including a number, string, boolean, object, or even a function"

// Find the maximum number in an array of numbers.  This is changing an array into a number.
const ages = [21, 22, 56, 43, 98, 17, 7, 2, 20, 9];

const maxAge = ages.reduce((max, age) => {
	console.log(`${age} > ${max} = ${age > max});
	if (age > max) {
		return age;
	} else {
		return max
	}
}, 0);
})