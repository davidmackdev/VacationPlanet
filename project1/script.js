// This file is going to handle checking 
// the form from the join page.

// On the click of the submit button  
// one function will trigger and call 
// several others and check that the 
// information that was submitted fits a 
// certain criteria.

// Author: David
// Date:   07/17/19
// Filename: script.js

"use strict";



/* Functions that will be used in script

submit()
This function will be hub to run the others.

checkField()
This function will check that the required fields are not empty.

redText()
This function will turn the labels of required fields that need too be filled out, or corrected, red.

blackText()
This function will turn labels back to black if the fields are filled out.

checkEmail()
This function will check that an email was submitted in the correct format.

*/



function submit() {
	// Declaring values from input fields
	// as variables.
	let first = document.getElementById('firstName');
	let firstLabel = document.getElementById('firstLabel');
	let last = document.getElementById('lastName');
	let lastLabel = document.getElementById('lastLabel');
	let tel = document.getElementById('phone');
	let telLabel = document.getElementById('telLabel');
	let email = document.getElementById('email');
	let emailLabel = document.getElementById('emailLabel');

	let labels = [firstLabel, lastLabel, telLabel, emailLabel];
	let values = [first, last, tel, email];

	checkFields(values, labels);
	checkEmail(email.value, emailLabel);
	correctFields(labels);
}

function checkFields(values, labels) {
	for (let i = 0; i < values.length; i++) {
		if (values[i].value.length === 0) {
			document.getElementById('fill').innerHTML = '*Please fill required fields';
			redText(labels[i]);
		} else {
			blackText(labels[i]);
		}
	}
}

function redText(label) {
	return label.style.color = 'red';
}

function blackText(label) {
	return label.style.color = 'black';
}

function checkEmail(value, label) {
	if (!value.includes('@')) {
		redText(label);
		label.innerHTML = '<b>Email* Please include an "@"</b>'
	} else {
		blackText(label);
		label.innerHTML = '<b>Email*</b>'
	}
}

function correctFields(labels) {
	let counter = 0;
	for (let i = 0; i < labels.length; i++) {
		if (labels[i].style.color === 'black') {
			counter++;
		}
	}

	if (counter === 4) {	
		document.getElementsByClassName('form')[0].innerHTML = '<h1>Thank you for your submission.  Your appiclation is under review at this time.</h1>';
	}
}