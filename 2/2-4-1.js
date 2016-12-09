"use strict";

let {cons, car, cdr, square} = require('./util.js');
let sqrt = require('../1/1-3/1-3-4.js');

// Ben's work.
var ben = {
make_from_real_imag() : (x, y)=>cons(x, y);
make_from_mag_ang() : (r, a)=>cons(r*Math.cos(a), r*Math.sin(a))
real_part() : car;
imag_part() : cdr;
magnitude() : z=>(sqrt(square(real_part(z))+square(imag_part(z))));
angle() : z=>(Math.atan(imag_part(z), real_part(z)));
}

// Alyssa's work
var alyssa = {
let make_from_mag_ang = (r, a)=>cons(r, a);
let make_from_real_imag = (r, a)=>cons(sqrt(square(x)+square(y)), Math.atan(y, x))
let magnitude = car;
let angle = cdr;
let real_part = z=>magnitude(z)*Math.cos(angle(z));
let imag_part = z=>magnitude(z)*Math.sin(angle(z));
}

// common func for 2's work.
let add_complex = function (z1, z2){
	return make_from_real_imag(
		real_part(z1)+real_part(z2),
		imag_part(z1)+imag_part(z2)
		)
}

let sub_complex = function (z1, z2){
	return make_from_real_imag(
		real_part(z1)-real_part(z2),
		imag_part(z1)-imag_part(z2)
		)
}

let mul_complex = function (z1, z2){
	return make_from_mag_ang(
		magnitude(z1)*magnitude(z2),
		angle(z1)+angle(z2)
		)
}

let div_complex = function (z1, z2){
	return make_from_mag_ang(
		magnitude(z1)/magnitude(z2),
		angle(z1)-angle(z2)
		)
}

