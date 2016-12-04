"use strict";

let [cons, car, cdr, list, print_list, mmap, list_ref, leng, append, pair] = require('./util.js');


var variable = function (x){
	return 
}

var same_variable = function (v1, v2){
	return variable(v1) && variable(v2) && v1 === v2;
}

var make_sum = function (a1, a2){
	return list(["+", a1, a2]);
}

var make_product = function (m1, m2){
	return list(["*", m1, m2]);
}

var sum = function (x){
	return pair(x) && car(x) === "+";
}

var addend = function (s){
	return car(cdr(s));
}

var augend = function (s){
	return car(cdr(cdr(s)));
}

var product = function (x){
	return pair(x) && car(x) === "*";
}

var multiplier = function (p){
	return car(cdr(p));
}

var multiplicand = function (p){
	return car(cdr(cdr(p)));
}

var deriv = function (exp, var1){
	if (typeof exp==='number'){
		return 0;
	}else if(variable(exp)){
		if (same_variable(exp, var1)){
			return 1;
		}else{
			return 0;
		}
	}else if(sum(exp)){
		return make_sum(make_product(multiplier(exp), deriv(multiplicand(exp), var1))+
			make_sum(deriv(multiplier(exp),var1),multiplicand(exp)));
	}else {
		console.log("unknown expression type -- DERIV "+exp);
	}
}

var deriv_res1 = deriv()