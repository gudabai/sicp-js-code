"use strict";

// 数组版.
var cons = function (x, y){
    return [x].concat(y);
};

var car = function (items){
    return items[0];
};

var cdr = function (items){
    return items.slice(1);
};
var list_ref = function (items, n){
    if (n === 0){
        return car(items);
    }else {
        return list_ref(cdr(items), n-1)
    }
};

var squares = [1,4,9,16,25];
// console.log(list_ref(squares, 3));

var leng = function (items){
    if (items.length === 0){
        return 0;
    }else {
        return leng(cdr(items))+1;
    }
};

var leng_res = leng(squares);
// console.log(leng_res);

var append = function (list1, list2){
    if (list1.length === 0){
        return list2;
    }else {
        return cons(car(list1), append(cdr(list1), list2));
    }
};

var list2 = [9,8,7];
var append_res = append(squares, list2);
// console.log(car(append_res));
// console.log(cdr(append_res));

var scale_list = function (items, factor){
    if (items.length === 0){
        return [];
    }else {
        return cons(car(items)*factor, scale_list(cdr(items), factor));
    }
};

var scale_list_res = scale_list(list2, 10);
// console.log(scale_list_res);

var mmap = function (proc, items){
    if (items.length === 0){
        return [];
    }else {
        return cons(proc(car(items)), mmap(proc, cdr(items)));
    }
};

var list3 = [-1,2,-3,89]
var mmap_res = mmap(x=>x*x, list3);
// console.log(mmap_res);

var scale_list_map = function (items, factor){
    return mmap(x=>factor*x, items);
};

var scale_list_map_res = scale_list_map(list3, 23);
// console.log(scale_list_map_res);

module.exports = {
    cons: cons,
    car: car,
    cdr: cdr,
    mmap: mmap
}