// https://scotch.io/tutorials/javascript-promises-for-dummies

/* ES5 */
var isMomHappy = true;

//Promise
var willIGetNewPhone = new Promise(
	function (resolve, reject) {
		if (isMomHappy) {
			var phone = {
				brand: 'iPhone',
				color: 'slate'
			};
			resolve(phone); // fulfilled
		} else {
			var reason = new Error('mom is not happy!');
			reject(reason); //reject
		}
	}
);

// call out promise
var askMom = function () {
	console.log('before asking mom'); //log before
	willIGetNewPhone
		.then(showOff) //chaining here
		.then(function (fulfilled) {
			//yay, you got a new phone!
			console.log(fulfilled);
			//output: iphone
		})
		.catch(function (error) {
			//oops, mom didn't buy it!
			console.log(error.message);
			//output: 'mom is not happy!'
		});
	console.log('after asking mom'); //log after
};



// 2nd promise
// var showOff = function (phone) {
// 	return new Promise (
// 		function (resolve, reject) {
// 			var message = 'Check it out!  I have a new ' + phone.color + ' ' + phone.brand + ' phone!';

// 			resolve(message);
// 		}
// 	);
// };

// Shorter version of 2nd promise
var showOff = function (phone) {
	var message = 'Check it out!  I have a new ' + phone.color + ' ' + phone.brand + ' phone!';

	return Promise.resolve(message);

}

askMom();