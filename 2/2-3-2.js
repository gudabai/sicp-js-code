"use strict";

let {cons, car, cdr, list, print_list, mmap, list_ref, leng, append, pair, print_tree} = require('./util.js');


var variable = function (x){
	return typeof x === 'string';
}

var same_variable = function (v1, v2){
	return variable(v1) && variable(v2) && v1 === v2;
}

var make_sum_v1 = function (a1, a2){
	return list("+", a1, a2);
}

var make_sum = function (a1, a2){
	if (a1 === 0){
		return a2;
	}else if (a2 === 0){
		return a1;
	}else if (typeof a === 'number' && typeof b === 'number'){
		return a1+a2;
	}else {
		return list("+", a1, a2)
	}
}

var make_product_v1 = function (m1, m2){
	return list("*", m1, m2);
}

var make_product = function (m1, m2){
	if (m1 === 0 || m2 === 0){
		return 0;
	}else if (m1 === 1){
		return m2;
	}else if (m2 === 1){
		return m1;
	}else if (typeof m1 === 'number' && typeof m2 === 'number'){
		return m1*m2;
	}else {
		return list("*", m1, m2);
	}
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
	}else if (sum(exp)){
		return make_sum(
			deriv(addend(exp), var1), 
			deriv(augend(exp), var1)
			);
	}else if (product(exp)){
		return make_sum(
			make_product(
				multiplier(exp), 
				deriv(multiplicand(exp), var1)
				),
			make_product(
				deriv(multiplier(exp), var1), 
				multiplicand(exp)
				)
			);
	}else {
		print_tree(exp);
		console.log("unknown expression type -- DERIV "+exp);
	}
}

// 获得一个良好的打印形式很难。
// var deriv_res0 = deriv("x", "x");
// console.log(deriv_res0);
// var deriv_res1 = deriv(list("+", "x", 3), "x");
// print_tree(deriv_res1)
// console.log(deriv_res1)
// var deriv_res1_v2 = deriv(list("+", list("*", 3, "x"), 3), "x");
// console.log(deriv_res1_v2);
// var deriv_res1_v3 = deriv(list("*", 3, "x"), "x");
// console.log(deriv_res1_v3);
// var deriv_res2 = deriv(list("*", "x", "y"), "x");
// deriv_res2为数字无法用print_tree()打印.
// console.log(deriv_res2)
// var deriv_res3 = deriv(list("*", list("*", "x", "y"), list("+", "x", 3) ), "x");
// print_tree(deriv_res3);

// 调试用.
// var exp = list("*", 3, "x");
// var var1 = "x";
// var res1 = make_product(
// 				multiplier(exp), 
// 				deriv(multiplicand(exp), var1))
// console.log(res1);
// var res2 = make_product(
// 				deriv(multiplier(exp), var1), 
// 				multiplicand(exp)
// 				)
// console.log(res2)
