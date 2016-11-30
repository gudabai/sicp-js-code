"use strict";

var super_sum = function(term, a, next, b){
    if (a > b){
        return 0;
    }else{
        return eval(term(a))+super_sum(term, eval(next(a)), next, b);
    }
}

var pi_sum = function (a, b){
    return super_sum(
        x=>1/(x*(x+2)),
        a,
        x=>x+4,
        b
        );
}

// var res_pi_sum = pi_sum(1, 10000)
// console.log(res_pi_sum)

var integral = function (f, a, b, dx){
    return dx*super_sum(
        f,
        a+dx/2,
        x=>x+dx,
        b
        );
}

// var integral_res = integral(x=>x*x*x, 0, 1, 0.001)
// console.log(integral_res)

// f(x, y) = x(1+xy)^2+y(1-y)+(1+xy)(1-y) 
var f = function (x, y){
    let a = 1+x*y;
    let b = 1-y;
    console.log(a);
    console.log(b);
    return x*a*a+y*b+a*b;
}

// var f_res = f(1, 2)
// console.log(f_res)

var f = function (g){
    console.log(g);
    return g(2);
}

// console.log(f(x=>x*x))
// console.log(f(x=>(x*(x+1))))
// 一种递归吧.
// console.log(f(f))
