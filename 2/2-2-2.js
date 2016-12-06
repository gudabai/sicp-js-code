"use strict";

let {cons, car, cdr, list, mmap, list_ref, leng, append, print_tree, pair} = require('./util.js');

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

var tree1 = list(list(1, 2), list(3, 4));
// print_tree(tree1);
var tree2 = list(1,2,3, list(5,6))
// print_tree(tree2);
var count_leaves_res = count_leaves(tree2);
// console.log(count_leaves_res);

// 此处有问题！！！
var scale_tree = function (tree, factor){
    if (!tree){
        return null;
    }else if (!pair(tree)){
        if (tree.name === 'dispatch'){
            tree = car(tree);
            // 这个细节太隐密！！
            return cons(tree*factor, null);
        }
        console.log(tree);
        return tree*factor;
    }else {
        return cons(scale_tree(car(tree), factor), scale_tree(cdr(tree), factor));
    }
};

var thetree = list(1,list(2,list(3,4),5),6,7);
// print_tree(thetree)
var scale_tree_res = scale_tree(thetree, 10);
// print_tree(scale_tree_res);
// var count_leaves_res2 = count_leaves(thetree)
// print_tree(thetree);
// console.log(count_leaves_res2)

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

// var scale_tree_v2_res = scale_tree_v2(thetree, 10);
// print_tree(scale_tree_v2_res);