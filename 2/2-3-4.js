"use strict";

let [cons, car, cdr, list, print_list, mmap, list_ref, leng, append, pair, print_tree] = require('./util.js');

var make_leaf = function (symbol, weight){
	return list(["leaf", symbol, weight]);
}

var leaf = function (object){
	return car(object) === "leaf";
}

var symbol_leaf = function (x){
	return car(cdr(x));
}

var weight_leaf = function (x){
	return car(cdr(cdr(x)));
}

var make_code_tree = function (left, right){
	return list([
		left, 
		right,
		append(
			symbols(left),
			symbols(right),
			),
		weight(left)+weight(right)
		])
}

var left_branch = function (tree){
	return car(tree);
}

var right_branch = function (tree){
	return car(cdr(tree));
}

var symbols = function (tree){
	if (leaf(tree)){
		return list([symbol_leaf(tree)])
	}else {
		return car(cdr(cdr(tree)));
	}
}

var weight = function (tree){
	if (leaf(tree)){
		return weight_leaf(tree);
	}else {
		return car(cdr(cdr(cdr(tree))));
	}
}

var decode = function(bits, tree){
	let decode_l = function (bits, current_branch){
		if (!bits){
			return "()";
		}else {
			let next_branch = choose_branch(car(bits), current_branch);
			if (leaf(next_branch)){
				return cons(symbol_leaf(next_branch), decode_l(cdr(bits), next_branch));
			}else {
				return decode_l(cdr(bits), next_branch)
			}
		}
	}
	return decode_l(bits, tree);
}

var choose_branch = function (bit, branch){
	if (bit === 0){
		return left_branch(branch);
	}else if (bit === 1){
		return right_branch(branch);
	}else {
		console.log("bad bit -- CHOOSE-BRANCH "+bit);
	}
}

var adjoin_set = function (x, set){
	if (!set){
		return list([x]);
	}else if (weight(x)<weight(car(set))){
		return cons(x, set);
	}else {
		return cons(car(set), adjoin_set(x, cdr(set)));
	}
}

var = make_leaf_set = function (pairs){
	if (!pairs){
		return "()";
	}else if {
		let pair = car(pairs);
		return adjoin_set(
			make_leaf(car(pair), car(cdr(pair))),
			make_leaf_set(cdr(pairs));
			)
	}
}