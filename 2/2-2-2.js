"use strict";

let [cons, car, cdr, list, print_list, mmap, list_ref, leng, append, pair] = require('./util.js');

// var x = list([list([1,2]), list([3,4])]);
// console.log(leng(x));
// print_list(x);
// console.log(car(x));


var count_leaves = function (x){
    if (!x){
        return 0;
    }else if (!pair(x)){
        // console.log(x);
        return 1;
    }else {
        return count_leaves(car(x))+count_leaves(cdr(x));
    }
};

var tree2 = list([list([1,2]), list([3,4])])
var tree1 = list([1,2,3, list([5,6])])
var count_leaves_res = count_leaves(tree1);
// console.log(count_leaves_res);

var scale_tree = function (tree, factor){
    if (!tree){
        return null;
    }else if (!pair(tree)){
        return tree*factor;
    }else {
        // console.log(car(tree));
        // console.log(cdr(tree));
        return cons(scale_tree(car(tree), factor), scale_tree(cdr(tree), factor));
    }
};

var thetree = list([1,list([2,list([3,4]),5]),6,7])
var scale_tree_res = scale_tree(thetree, 10);
// var count_leaves_res2 = count_leaves(thetree)
// console.log(count_leaves_res2)
// // print_list(car(scale_tree_res))
console.log(cdr(car(cdr(car(cdr(scale_tree_res))))));

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
console.log(car(cdr(car(cdr(car(cdr(scale_tree_v2_res)))))));
// print_list(car(scale_tree_v2_res));
// print_list(cdr(scale_tree_v2_res));
// console.log(scale_tree_v2_res);