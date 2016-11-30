"use strict";

var list_func = require('./list.js');
var cons = list_func.cons;
var car = list_func.car;
var cdr = list_func.cdr;
var mmap = list_func.mmap;

var x = cons(cons(1, 2), cons(cons(3,9), 4));
// console.log(x);

var pair = function (x){
    return x.length>1;
};

var count_leaves = function (x){
    if (x.length === 0){
        return 0;
    }else if (!pair(x)){
        return 1;
    }else {
        return count_leaves(car(x))+count_leaves(cdr(x));
    }
};

var count_leaves_res = count_leaves(x);
// console.log(count_leaves_res);

var scale_tree = function (tree, factor){
    if (tree.length === 0){
        return undefined;
    }else if (!pair(tree)){
        return tree*factor;
    }else {
        // console.log(car(tree));
        // console.log(cdr(tree));
        return cons(scale_tree(car(tree), factor), scale_tree(cdr(tree), factor));
    }
};

var thetree = [1,[2,[3,4],5],6,7]
var scale_tree_res = scale_tree(thetree, 10);
// console.log(scale_tree_res);

var scale_tree_v2 = function (tree, factor){
    return mmap(
        function (sub_tree){
            if (pair(sub_tree)){
                return scale_tree_v2(sub_tree, factor);
            }else {
                return sub_tree*factor;
            }
        },
        tree
        )
};

var scale_tree_v2_res = scale_tree_v2(thetree, 10);
// console.log(scale_tree_v2_res);