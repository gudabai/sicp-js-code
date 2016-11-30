"use strict";

const tolerance = 0.00001

var close_enough = (x, y)=>Math.abs(x-y)<tolerance;

// 二分法查找议程的根.
var search = function (f, neg_point, pos_point){
    let midpoint = (neg_point+pos_point)/2;
    if (close_enough(neg_point, pos_point)){
        return midpoint;
    }else{
        let testvalue = f(midpoint);
        if (testvalue>0){
            return search(f, neg_point, midpoint)
        }else if (testvalue<0){
            return search(f, midpoint, pos_point)
        }else{
            return midpoint
        }
    }
}

var half_interval_method = function (f, a, b){
    let a_value = f(a);
    let b_value = f(b);
    if (a_value<0 && b_value>0){
        return search(f, a, b);
    }else if (a_value>0 && b_value<0){
        return search(f, b, a);
    }else{
        console.log(a_value);
        console.log(b_value);
        console.warn("Values are not of opposite sign");
    }
}

// var half_interval_method_res = half_interval_method(x=>x*x*x-2*x-3, 1.0, 2.0)
// var half_interval_method_res = half_interval_method(Math.sin, 4.0, 2.0)
// console.log(half_interval_method_res)

// 寻找函数的不动点.
var fixed_point = function (f, first_guess){
    let try_ = function (guess){
        let next = f(guess);
        if (close_enough(guess, next)){
            return next
        }else{
            return try_(next);
        }
    };
    // 此句不可忘;
    return try_(first_guess);
}

// var fixed_point_res = fixed_point(Math.cos, 1.0)
// console.log(fixed_point_res)
// var fixed_point_res_v2 = fixed_point(y=>Math.sin(y)+Math.cos(y), 1.0)
// console.log(fixed_point_res_v2)

// fixed_point有两个参数，sqrt是在fixed_point的基础上，传入x用来构造f.
var sqrt = function (x){
    return fixed_point(y=>0.5*(y+x/y), 1.0)
}

// var fixed_point_res_v3 = sqrt(4)
// console.log(fixed_point_res_v3)

module.exports = {
    fixed_point: fixed_point,
    close_enough: close_enough
};