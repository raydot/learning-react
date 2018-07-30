/* ES6 */
const isMomHappy = false;

// Promise
const willIGetNewPhone = new Promise (
	(resolve, reject) => {
		if (isMomHappy) {
			const phone = {
				brand: 'iPhone',
				color: 'slate'
			};
			resolve(phone);
		} else {
			const reason = new Error('mom is not happy');
			reject(reason);
		} // end if
	}
);

const showOff = (phone) =>  {
	const message = `Hola amigo!  I have a new ${phone.color} ${phone.brand} phone!`;
	return Promise.resolve(message);
};

const askMom = () => {
	willIGetNewPhone
		.then(showOff)
		.then(fulfilled => console.log(fulfilled))
		.catch(error => console.log(error.message));
};

askMom();