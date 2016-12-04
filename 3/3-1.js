"use strict";

// 何用.
// var new_withdraw = function (){
//     return function (amount){
//         let balance = 100;
//         if (balance>=amount){
//             balance = balance - amount;
//             return balance;
//         }else {
//             console.log("Insufficient funds.")
//         }
//     };
// };

// 闭包，实现了这种所谓的局部状态变量.
var make_withdraw = function (balance){ 
    return function (amount){
        if (balance>=amount){
            balance = balance - amount;
            return balance;
        }else {
            console.log("Insufficient funds.")
        }
    };
};

// var W1 = make_withdraw(100);
// var W2 = make_withdraw(100);
// console.log(W1(25));
// console.log(W2(49));
// console.log(W1(50));

var make_account = function (balance){
    var withdraw = function (amount){
            if (balance>=amount){
                balance = balance - amount;
                return balance;
            }else {
                console.log("Insufficient funds.")
            }
    };
    var deposit = function (amount){
        balance = balance+amount;
        return balance;
    };
    var dispatch = function (m){
        if (m === "withdraw"){
            return withdraw;
        }else if (m === "deposit"){
            return deposit;
        }else {
            console.log("Unknown request -- MAKE-ACCOUNT");
        }
    };
    return dispatch;
};

var acc = make_account(100);
console.log(acc("withdraw")(20));
console.log(acc("withdraw")(50));
console.log(acc("deposit")(1000));
console.log(acc("withdraw")(600));