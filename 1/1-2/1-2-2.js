"use strict";

// 糟糕的树形递归.
var fib = function (n){
    if (n === 0){
        return 0;
    }else if (n === 1){
        return 1;
    }else{
        return fib(n-1)+fib(n-2);
    }
};

// var fib_res = fib(1111);
// console.log(fib_res);

var fib_v2 = function (n){
    return fib_iter(1, 0, n);
};

var fib_iter = function (a, b, count){
    if (count === 0){
        return b;
    }else{
        return fib_iter(a+b, a, count-1);
    }
};

// var fib_v2_res = fib_v2(4);
// console.log(fib_v2_res);

var count_change = function (amount){
    return cc(amount, 5);
};

var cc = function (amount, kinds_of_coins){
    if (amount === 0){
        return 1;
    }else if (amount<0 || kinds_of_coins === 0){
        return 0;
    }else{
                    // 不用第一种硬币的情况总数.    // 使用第一种硬币的情况总数.
        return cc(amount, kinds_of_coins-1)+cc(amount-first_denomination(kinds_of_coins), kinds_of_coins);
    };
};

// 以可用的硬币总数作为输入，返回第一种硬币的币值.
var first_denomination = function (kinds_of_coins){
    if (kinds_of_coins === 1){
        return 1;
    }else if (kinds_of_coins === 2){
        return 5;
    }else if (kinds_of_coins === 3){
        return 10;
    }else if (kinds_of_coins === 4){
        return 25;
    }else if (kinds_of_coins === 5){
        return 50;
    }
};

// var count_change_res = count_change(100);
// console.log(count_change_res);