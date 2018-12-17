/* ES7 Syntax using async and await */

const isMomHappy = true;

// promise
const willIGetNewPhone = new Promise ((resolve, reject) => {
	if (isMomHappy) {
		const phone = {
			brand: 'iPhone',
			color: 'slate grey'
		};
		resolve(phone);
	} else {
		const reason = new Error('mom is not happy!');
		reject(reason);
	}
});

// 2nd promise
async function showOff(phone) {
	return new Promise ((resolve, reject) => {
		var message = `Que pasa! I have a new ${phone.color} ${phone.brand} phone!`;
		resolve(message);
	});
};

// call our promise
async function askMom() {
	try {
		console.log('before asking mom');

		let phone = await willIGetNewPhone;
		let message = await showOff(phone);

		console.log(message);
		console.log('after asking mom');
	} catch (error) {
		console.log(error.message);
	}
}

(async() => {
	await askMom();
})();
