// 035 imperative_v_declarative_building_a_DOM.js

/*
	An imperative approach would be concerned with how the DOM is constructed:
*/

var target = document.getElementById('target');
var wrapper = document.createElement('div');
var headline = document.createElement('h1');

wrapper.id = "welcome";
headline.innerText = "Hello Bobby!";

wrapper.appendChild(headline);
target.appendChild(wrapper);

/* It would be very hard to make changes, add features, or scale 10,000 lines of code where the DOM is constructed imparatively. */

// Construct a DOM declaratively, using a react component

const { render } = ReactDom;

const Welcome = () => (
	<div id="welcome">
	<h1>Hello Bobby</h1>
);

render (
	<Welcome />
	document.getElementById('target')
);

// React is declarative.  Here, the Welcome component describes the DOM that should be rendered.  The render function uses the
// instructions declared in the component to build the DOM, abstracting away the details of how the DOM is to be rendered.  We
// can clearly see that we want to render our Welcome component into the element with the ID of 'target'

// Take this example lawn object:

let color_lawn = {
	title: "lawn",
	color: "#7CFC00",
	rating: 0
}

// Imperative function to change the rating:
function rateColor(color, rating) {
	color.rating = rating;
	return color;
}

console.log(rateColor(color_lawn, 5)).rating; //BAD!  You're changing the original!

var rateColor = function(color, rating) {
	return Object.assign({}, color, {rating:rating});
};

console.log(rateColor(color_lawn, 5).rating);  //Better!  Object.assign works like a copy machine here and so the original is not changed.

const rateColor = (color, rating) => 
	({
		...color,
		rating
	})
// BEST!  The spread operator makes the copy here.  Go ES6!

