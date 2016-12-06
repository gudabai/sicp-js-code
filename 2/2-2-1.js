"use strict";

// 对util.js大部分方法的测试.
let {cons, car, cdr, list, mmap, list_ref, leng, append, print_tree} = require('./util.js');

var scale_list = function (items, factor){
    if (!items){
        return null;
    }else {
        return cons(car(items)*factor, scale_list(cdr(items), factor));
    }
};

var scale_list_map = function (items, factor){
    return mmap(x=>factor*x, items);
};

// var mmap_res = mmap(x=>x*x, list3);

var a = list(1, 2, 3);
var b = list("fyb", "js", "oik", "computer");
var c = list();
var d = cons(1, 2);
// print_tree(a);
// print_tree(b);
// print_tree(c);
// 打印d会出错。
// print_tree(d);

var e = list_ref(b, 0);
// console.log(e);
var f = leng(c);
// console.log(f);
var g = append(a, b);
// print_tree(g);

var h = scale_list(a, 5);
// print_tree(h);

var i = scale_list_map(a, 10);
// print_tree(i);