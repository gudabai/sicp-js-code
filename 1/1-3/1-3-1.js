"use strict";

// var sum_integers = function (a, b){
//     if (a > b){
//         return 0;
//     }else{
//         return a + sum_integers(a + 1, b)
//     }
// }

// var res = sum_integers(1, 5)
// console.log(res)

// var sum_cube = function (a, b){
//     if (a > b){
//         return 0
//     }else{
//         return a*a*a + sum_cube(a+1, b)
//     }
// }

// var res1 = sum_cube(1, 5)
// console.log(res1)

// var pi_sum = function (a, b){
//     if (a > b){
//         return 0
//     }else{
//         return 1/(a*(a+2))+pi_sum(a+4, b)
//     }
// }

// var res2 = pi_sum(1, 10000)
// console.log(res2)

var super_sum = function(term, a, next, b){
    if (a > b){
        return 0
    }else{
        return eval(term(a))+super_sum(term, eval(next(a)), next, b)
    }
}

var super_sum_cube = function (a, b){
    let inc = function (n){
        return n+1
    }
    let cube = function (n){
        return n*n*n
    }
    return super_sum(cube, a, inc, b)
}

// var res3 = super_sum_cube(1, 10)
// console.log(res3)

var super_pi_sum = function (a,b){
    let pi_term = function (x){
        return 1/(x*(x+2))
    }
    let pi_next = function (y){
        return y+4
    }
    return super_sum(pi_term, a, pi_next, b)
}

// var res4 = super_pi_sum(1, 10000)
// console.log(res4)

var integral = function (f, a, b, dx){
    let add_dx = function (x){
        return x+dx
    }
    return dx*super_sum(f, (a+dx/2), add_dx, b)
}

// var res5 = integral(x=>x*x*x, 0, 1, 0.001)
// console.log(res5)