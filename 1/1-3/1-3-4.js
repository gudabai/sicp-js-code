"use strict";

var func1_3_3 = require("./1-3-3.js");
var close_enough = func1_3_3.close_enough;
var fixed_point = func1_3_3.fixed_point;

const dx = 0.00001;

// 其作用在于，给一个原型函数，返回它的平均阻尼函数。这样就不用人再去构造了.
// 比如说，之前，有y=x/y，但它直接放到fixed_point中是不合适的，此时必需传入y=>0.5*(y+x/y)这一平均阻尼形式来代替，
// 而现在，输入原型，自动生成平均阻尼函数，再传入fixed_poiint.
var average_damp = function (f){
    return function (x){
        return 0.5*(x+f(x));
    };
};

// var square_res = average_damp(x=>x*x)(10);
// console.log(square_res);

var sqrt = function (x){
    return fixed_point(
        average_damp(y=>x/y),
        1.0
        );
};

// var sqrt_res = sqrt(4);
// console.log(sqrt_res);

var cute_root = function (x){
    return fixed_point(
        average_damp(y=>x/(y*y)),
        1.0
        )
};

// var cute_root_res = cute_root(8);
// console.log(cute_root_res);

// 得到Dg(x).
var deriv = function (g){
    return function (x){
        return (g(x+dx)-g(x))/dx;
    };
};

// var deriv_cute_res = deriv(x=>x*x*x)(5);
// console.log(deriv_cute_res);

// 得到x-g(x)/Dg(x).
var newton_transform = function (g){
    return function (x){
        return x-g(x)/deriv(g)(x);
    };
};

var newtons_method = function (g, guess){
    return fixed_point(
        newton_transform(g),
        guess
        );
};

// 这个很难理解，y=>x/y的不动点就是y=>y*y-x的零点，故，找到后者的零点即为找到了前者的不动点。
// 根据牛顿法，后者零点，与另一个方和f(x)的不动点同，而牛顿法主要是在构造f(x)，之后传入fixed_point.
var newton_sqrt = function (x){
    return newtons_method(
        y=>y*y-x,
        1.0
        )
}

// var newton_sqrt_res = newton_sqrt(4);
// console.log(newton_sqrt_res);
// 终归是要用fixed_point来求y=>x/y的不动点，而，直接传入此函数会出问题。
// 故这里涉及到两种转化，1是平均阻尼，2是通过牛顿法，传入转化后的函数是为了避免上述的问题。
var fixed_point_of_transform = function (g, transform, guess){
    return fixed_point(
        transform(g),
        guess
        )
}

// 更高一层的抽象.
var last_sqrt = function (x){
    return fixed_point_of_transform(
        y=>x/y,
        average_damp,
        1.0
        )
}

var real_last_sqrt = function (x){
    return fixed_point_of_transform(
        y=>y*y-x,
        newton_transform,
        1.0
        )
}

var last_sqrt_res = last_sqrt(36);
console.log(last_sqrt_res);

var real_last_sqrt_res = real_last_sqrt(49);
console.log(real_last_sqrt_res);

module.exports = real_last_sqrt;