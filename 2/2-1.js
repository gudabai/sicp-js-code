"use strict";

let {cons, car, cdr, gcd} = require('./util.js');

var make_rat = function (n ,d){
    let g = gcd(n, d);
    return cons(n/g, d/g);
};

var numer = function (x){
    return car(x);
};

var denom = function (x){
    return cdr(x);
};

var add_rat = function (x, y){
    return make_rat(numer(x)*denom(y)+numer(y)*denom(x), denom(x)*denom(y));
};

var sub_rat = function (x, y){
    return make_rat(numer(x)*denom(y)-numer(y)*denom(x), denom(x)*denom(y));
};

var mul_rat = function (x, y){
    return make_rat(numer(x)*numer(y), denom(y)*denom(x));
};

var div_rat = function (x, y){
    return make_rat(numer(x)*denom(y), denom(x)*numer(x));
};

var equal_rat = function (x, y){
    return numer(x)*denom(y) === numer(y)*denom(x);
};

var print_rat = function (x){
    console.log(numer(x)+'/'+denom(x));
};

var one_half = make_rat(1, 2);
// print_rat(one_half);

var one_third = make_rat(1, 3);
// print_rat(add_rat(one_half, one_third));
// print_rat(mul_rat(one_half, one_third));
// print_rat(add_rat(one_third, one_third));
// print_rat(div_rat(make_rat(2, 4), make_rat(1, 2)));
