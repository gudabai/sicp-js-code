"use strict";

let [cons, car, cdr, list, print_list, mmap, list_ref, leng, append, pair, print_tree] = require('./util.js');

var element_of_set_v1 = function (x, set){
    if (!set){
        return false;
    }else if (x === car(set)){
        return true;
    }else {
        return element_of_set_v1(x, cdr(set));
    }
};

var element_of_set = function (x, set){
    if (!set){
        return false;
    }else if (car(set) === x){
        return true;
    }else if (x<car(set)){
        return false;
    }else{
        return element_of_set(x, cdr(set));
    }
}

var adjoin_set = function (x, set){
    if (element_of_set(x, set)){
        return set;
    }else {
        return cons(x, set);
    }
};

var intersection_set_v1 = function (set1, set2){
    if (!set1 || !set2){
        return null;
    }else if (element_of_set(car(set1), set2)){
        return cons(car(set1), intersection_set_v1(cdr(set1), set2));
    }else {
        return intersection_set_v1(cdr(set1), set2);
    }
}

// 此版本无法将字符串与数字放到一起用，因判断大小之故。
var intersection_set = function (set1, set2){
    if (!set1 || !set2){
        return null;
    }else {
        let x1 = car(set1);
        let x2 = car(set2);
        if (x1 === x2){
            return cons(x1, intersection_set(cdr(set1), cdr(set2)));
        }else if (x1<x2){
            return intersection_set(cdr(set1), set2);
        }else if (x1 >x2){
            return intersection_set(set1, cdr(set2));
        }
    }
}

var set1 = list([1,3,5,6,9,"fyb",20,"hp"]);
var set2 = list([3,5,2,7, "hp", "js",20, "py"]);
// var adjoin_set_res = adjoin_set(10, set1);
// print_list(adjoin_set_res);
// console.log(element_of_set(3, set1));
// console.log(element_of_set("hp", set1));
// console.log(element_of_set("fyj", set1));
// var intersection_set_res = intersection_set(set1, set2);
// print_list(intersection_set_res);

var entry = function (tree){
    return car(tree);
}

var left_branch = function (tree){
    return car(cdr(tree));
}

var right_branch = function (tree){
    return car(cdr(cdr(tree)));
}

var make_tree = function (entry, left, right){
    return list([entry, left, right]);
}

var element_of_tree = function (x, set){
    if (!tree){
        return false;
    }else if (entry(tree) === x){
        return true;
    }else if (x < entry(tree)){
        return element_of_set(x, left_branch(tree));
    }else if (x > entry(tree)){
        return element_of_set(x, right_branch(tree));
    }
};

