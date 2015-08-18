'use strict';

console.log('Running client code');
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('worker.js');
}

var a = {};
var b = {};

a.__proto__ = b;

console.log('Continuing code in client...');
