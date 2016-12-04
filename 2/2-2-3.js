"use strict";

let [cons, car, cdr, list, print_list, mmap, list_ref, leng, append] = require('./util.js');

// Bad example , zhuan des.
var sum_odd_squares = function (tree){
    if (!tree){
        return 0;
    }else if (!cdr(tree)){
        if (car(tree)%2 === 1){
            return car(tree)*car(tree);
        }else{
            return 0;
        }
    }else {
        print_list(car(tree));
        print_list(cdr(tree));
        return sum_odd_squares(car(tree))+sum_odd_squares(cdr(tree));
    }
}

var tree = list([list([1, 2]), list(3, 9)]);
console.log(sum_odd_squares(tree));