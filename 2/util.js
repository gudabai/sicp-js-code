"use strict";

const square = x=>x*x;
const odd = x=>x%2===1;
const even = x=>x%2===0;
const sumxy = (x, y)=>x+y;

var cons = function (x, y){
    let dispatch = function (m){
        if (m === 0){
            return x;
        }else if (m === 1){
            return y;
        }else {
            console.log("0 or 1.")
            return;
        }
    }
    return dispatch;
};

var car = function (z){
    // console.log(z);
    return z(0);
};

var cdr = function (z){
    // console.log(z);
    return z(1);
};

var list = function (...items){
    if (items.length === 0){
        return null;
    }else if (items.length === 1){
        return cons(items[0], null);
    }else if (items.length > 1){
        // 这个...很重要!!!
        return cons(items[0], list(...items.slice(1)));
    }else {
        return null;
    }
}


var print_list = function (items){
    if (!items){
        console.log("()");
    }else{
        let tstr = "(";
        while (items){
            tstr += car(items)+",";
            items = cdr(items);
        }
        tstr = tstr.slice(0, -1)+")";
        console.log(tstr);
    }
};

var list_ref = function (items, n){
    if (n === 0){
        return car(items);
    }else {
        return list_ref(cdr(items), n-1);
    }
};

var leng = function (items){
    if (!items){
        return 0;
    }else {
        return leng(cdr(items))+1;
    }
};

var append = function (list1, list2){
    if (!list1){
        return list2;
    }else {
        return cons(car(list1), append(cdr(list1), list2));
    }
};

var mmap = function (proc, items){
    if (!items){
        return null;
    }else {
        return cons(proc(car(items)), mmap(proc, cdr(items)));
    }
};

var pair = function (x){
    if (x.name !== 'dispatch'){
        return false;
    }
    if (car(x) === null && cdr(x) === null){
        return false;
    }
    var result = car(x).name === 'dispatch' || cdr(x) !== null;
    // console.log(result);
    return result;
};

// 获得一个良好的打印形式很难。
// 该方法可完全替代print_list。
// 只能对list用，而不能对cons(1, 2)这样的对象用，这两者之间还是不同的。
var print_tree = function (tree){
    if (typeof tree === 'number'){
        console.log(tree);
        return tree;
    }else if (!tree){
        let res = "()";
        console.log("()");
        return res;
    }else{
        let tstr = "(";
        while (tree){
            if (car(tree) === null){
                // 二叉树中的空子树。
                console.log(1)
                tstr += "(),";
            }else if (car(tree).name === 'dispatch'){
                console.log(2)
                tstr += print_tree(car(tree))+",";
            }else {
                console.log(3)
                tstr += car(tree)+",";
            }
                console.log(4)
                console.log(cdr(tree))
                tree = cdr(tree);
        }
        // 消灭掉最后一个逗号，为了打印好看.
        tstr = tstr.slice(0, -1)+")";
        let res = tstr;
        console.log(tstr);
        return res;
    }
};

var gcd = function (a, b){
    if (b === 0){
        return a;
    }else {
        return gcd(b, a%b)
    }
};

module.exports = {
    cons, car, cdr, list, 
    print_list, mmap, list_ref, leng, 
    append, pair, print_tree, gcd, 
    square, odd, even, sumxy,
}