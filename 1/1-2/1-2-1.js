"use strict";

// 此为递归过程，且为递归计算过程.
var factorial = function (n){
    if (n === 1){
        return 1;
    }else{
        return n*factorial(n-1);
    };
};

// var factorial_res = factorial(5);
// console.log(factorial_res);
// 此为递归过程，迭代计算过程。
var fact_iter = function (product, counter, max_count){
    if (counter > max_count){
        // 递归出口.
        return product;
    }else{
        return fact_iter(product*counter, counter+1, max_count)
    };
};

var factorial_iter = function (n){
    return fact_iter(1, 1, n);
}

// var factorial_iter_res = factorial_iter(5);
// console.log(factorial_iter_res);

