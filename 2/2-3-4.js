"use strict";

let {cons, car, cdr, list, print_list, mmap, list_ref, leng, append, pair, print_tree} = require('./util.js');

var make_leaf = function (symbol, weight){
	return list("leaf", symbol, weight);
}

var leaf = function (object){
	if (object !== null){
		return car(object) === "leaf";
	}
	return false;
}

var symbol_leaf = function (x){
	return car(cdr(x));
}

var weight_leaf = function (x){
	return car(cdr(cdr(x)));
}

var make_huffman_tree = function (iset){
	var make_leaf_set_res = make_leaf_set(iset);
	if (leng(make_leaf_set_res) === 2){
		return make_code_tree()
	}
	// let left = make_code_tree(left, right);
	while (make_leaf_set_res){
		right = car(make_leaf_set_res);
		left = make_code_tree(left, right);
		make_leaf_set_res = cdr(make_leaf_set_res);
	}
}

var make_code_tree = function (left, right){
	return list(
		left, 
		right,
		append(symbols(left), symbols(right)),
		weight(left)+weight(right)
		)
}

var left_branch = function (tree){
	return car(tree);
}

var right_branch = function (tree){
	return car(cdr(tree));
}

var symbols = function (tree){
	if (leaf(tree)){
		return list(symbol_leaf(tree))
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
			return null;
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

// 排序之用.若x较小，则插入到set最前面，否，则递归向后插入.
var adjoin_set = function (x, set){
	if (!set){
		return list(x);
	}else if (weight(x)<weight(car(set))){
		return cons(x, set);
	}else {
		return cons(car(set), adjoin_set(x, cdr(set)));
	}
}

var make_leaf_set = function (pairs){
	if (!pairs){
		return null;
	}else {
		let pair = car(pairs);
		return adjoin_set(
			make_leaf(car(pair), car(cdr(pair))),
			make_leaf_set(cdr(pairs))
			)
	}
}

// var iset = list(list("A", 4), list("B", 2), list("C", 1), list("D", 1));
// print_tree(iset);
// var make_leaf_set_res = make_leaf_set(iset);
// print_tree(make_leaf_set_res);
// console.log(leng(make_leaf_set_res))
// print_tree(car(make_leaf_set_res))
// var huffman_tree = make_code_tree(null, car(make_leaf_set_res));
// print_tree(huffman_tree);
// var huffman_tree = make_code_tree(car(make_leaf_set_res), car(cdr(make_leaf_set_res)));
// print_tree(huffman_tree);
