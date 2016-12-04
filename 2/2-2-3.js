"use strict";

let [cons, car, cdr, list, print_list, mmap, list_ref, leng, append, pair] = require('./util.js');
let fib = require('../1/1-2/1-2-2.js');

// Bad example , zhuan des.
var sum_odd_squares = function (tree){
    if (!tree){
        return 0;
    }else if (!pair(tree)){
        // console.log(tree)
        if (tree.name === 'dispatch'){
            tree = car(tree);
        }
        // console.log(tree)
        if (tree%2 === 1){
            return tree*tree;
        }else{
            return 0;
        }
    }else {
        // console.log(car(tree));
        // console.log(cdr(tree));
        // console.log(car(cdr(tree)))
        // console.log(cdr(cdr(tree)))
        // return
        return sum_odd_squares(car(tree))+sum_odd_squares(cdr(tree));
    }
}

var tree = list([list([1, list([2, 1])]),3, 9]);
// console.log(sum_odd_squares(tree));

// Bad example 2.
var even_fibs = function (n){
    let next = function (k){
        if (k>n){
            return null;
        }else {
            let f = fib(k);
            if (f%2 === 0){
                return cons(f, next(k+1));
            }else {
                return next(k+1);
            }
        }
    }
    return next(0);
};

// var fib_res = fib(7);
// console.log(fib_res);
// var even_fibs_res = even_fibs(8);
// print_list(even_fibs_res);

var filter = function (predicate, sequence){
    if (!sequence){
        return null;
    }else if (predicate(car(sequence))){
        return cons(car(sequence), filter(predicate, (cdr(sequence))));
    }else {
        return filter(predicate, cdr(sequence));
    }
};

// var filter_res = filter(x=>x%2===1, list([1, 2, 3, 4, 5]));
// print_list(filter_res);

var accumulate = function (op, initial, sequence){
    if (!sequence){
        return initial;
    }return op(car(sequence), accumulate(op, initial, cdr(sequence)));
};

var accumulate_res = accumulate((x,y)=>x+y, 0, list([1, 3, 5, 7, 9]));
// console.log(accumulate_res);

var enumerate_interval = function (low, high){
    if (low>high){
        return null;
    }else {
        return cons(low, enumerate_interval(low+1, high));
    }
};

var enumerate_interval_res = enumerate_interval(2, 7);
// print_list(enumerate_interval_res);

var enumerate_tree = function (tree){
    if (!tree){
        return null;
    }else if (!pair(tree)){
        if (tree.name === 'dispatch'){
            tree = car(tree);
        }
        return list([tree]);
    }else {
        return append(enumerate_tree(car(tree)), enumerate_tree(cdr(tree)));
    }
}

var tree1 = list([1, list([2, list([3, 4])]), list([5,9])]);
var enumerate_tree_res = enumerate_tree(tree1);
// print_list(enumerate_tree_res);

var sum_odd_squares_v2 = function (tree){
    return accumulate(
        (x,y)=>x+y,
        0,
        mmap(
            x=>x*x,
            filter(
                x=>x%2===1,
                enumerate_tree(tree)
                )
            )
        )
}

var sum_odd_squares_v2_res = sum_odd_squares_v2(tree);
// console.log(sum_odd_squares_v2_res);

var even_fibs_v2 = function (n){
    return accumulate(
        cons,
        null,
        filter(
            x=>x%2===0,
            mmap(
                fib,
                enumerate_interval(0, n)
                )
            )
        )
}

var even_fibs_v2_res = even_fibs_v2(10);
// print_list(even_fibs_v2_res);

var list_fib_squares = function (n){
    return accumulate(
        // (x,y)=>x+y,
        cons,
        null,
        mmap(
            x=>x*x,
            mmap(
                fib,
                enumerate_interval(0, n)
                )
            )
        )
}

var list_fib_squares_res = list_fib_squares(10);
print_list(list_fib_squares_res);

var product_of_squares_of_odd_elements = function (sequence){
    return accumulate(
        (x,y)=>x*y,
        1,
        mmap(
            x=>x*x,
            filter(
                x=>x%2===1,
                sequence
                )
            )
        )
}

var list1 = list([1,2,3,4,5,6]);
var product_of_squares_of_odd_elements_res = product_of_squares_of_odd_elements(list1);
// console.log(product_of_squares_of_odd_elements_res);

// 这一个未详细定义，但意思很清楚。
var salary_of_highest_paid_programmer = function (records){
    return accumulate(
        max,
        0,
        mmap(
            salary,
            filter(
                programmer,
                records
                )
            )
        )
}

// 嵌套映射.
var flatmap = function (proc, seq){
    return accumulate(
        append,
        null,
        mmap(proc, seq)
        )
}

var prime_sum = function (pair){
    return prime(car(pair)+car(cdr(pair)));
}

// var prime_sum_pairs = function (n){
//     return mmap(
//         make_pair_sum,
//         filter(
//             prime_sum(
//                 flatmap(
//                     function (i){
//                         mmap(
//                             function (j){
//                                 list([i, j])
//                             },
//                             enumerate_interval(1, (i-1))
//                             )
//                     }
//                     )
//                 )
//             )
//         )
// }