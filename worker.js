'use strict';
console.log('Running worker code');

var a = {};
var b = {};

a.__proto__ = b;

console.log('Continuing code in worker...');
