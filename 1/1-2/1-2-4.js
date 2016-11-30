"use strict";

// 快速求幂.
var fast_expt = function (b, n){
    if (n === 0){
        return 1;
    }else if (n%2 === 0){
        return Math.pow(fast_expt(b, (n/2)), 2);
    }else if (n%2 === 1){
        return b*fast_expt(b, (n-1));
    }
};

// var fast_expt_res = fast_expt(3, 10);
// console.log(fast_expt_res);

var gcd = function (a, b){
    if (b === 0){
        return a;
    }else {
        return gcd(b, a%b)
    }
};

// var gcd_res = gcd(150, 30);
// console.log(gcd_res);