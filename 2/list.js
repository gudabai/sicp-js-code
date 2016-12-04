"use strict";

let [cons, car, cdr, list, print_list, mmap, list_ref, leng, append] = require('./util.js');

var list = function (items){
    if (items.length === 1){
        return cons(items[0], null);
    }else if (items.length > 1){
        return cons(items[0], list(items.slice(1)));
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
            tstr += car(items)+", ";
            items = cdr(items);
        }
        tstr += ")";
        console.log(tstr);
    }
};

var a = list([1, 2, 3]);
var b = list(["fyb", "js", "oik", "computer"]);
// print_list(cdr(b));
// print_list(b);
// print_list(a);
// console.log(typeof a);
// console.log(car(a));
// console.log(car(cdr(a)));
// console.log(car(cdr(cdr(a))));
// console.log(cdr(cdr(cdr(a))))

var list_ref = function (items, n){
    if (n === 0){
        return car(items);
    }else {
        return list_ref(cdr(items), n-1);
    }
};

var squares = list([1,4,9,16,25]);
// var squares = list([]);
// console.log(list_ref(squares, 3));

var leng = function (items){
    if (!items){
        return 0;
    }else {
        return leng(cdr(items))+1;
    }
};

// var leng_res = leng(squares);
// console.log(leng_res);

var append = function (list1, list2){
    if (!list1){
        return list2;
    }else {
        return cons(car(list1), append(cdr(list1), list2));
    }
};

var list2 = list([9,8,7]);
var append_res = append(squares, list2);
// console.log(print_list(append_res));
// console.log(car(append_res));
// console.log(cdr(append_res));

var scale_list = function (items, factor){
    if (!items){
        return null;
    }else {
        return cons(car(items)*factor, scale_list(cdr(items), factor));
    }
};

var scale_list_res = scale_list(list2, 10);
// console.log(car(scale_list_res));
// console.log(car(cdr(scale_list_res)));

var mmap = function (proc, items){
    if (!items){
        return null;
    }else {
        return cons(proc(car(items)), mmap(proc, cdr(items)));
    }
};

var list3 = list([-1,2,-3,89]);
var mmap_res = mmap(x=>x*x, list3);
// console.log(car(mmap_res));

var scale_list_map = function (items, factor){
    return mmap(x=>factor*x, items);
};

// var scale_list_map_res = scale_list_map(list3, 23);
// // console.log(scale_list_map_res);

// 数组版.弃之不用.
// var cons = function (x, y){
//     return [x].concat(y);
// };

// var car = function (items){
//     return items[0];
// };

// var cdr = function (items){
//     return items.slice(1);
// };

module.exports = [list, mmap, print_list]
