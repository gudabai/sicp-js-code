"use strict";

let {cons, car, cdr, list, print_list, mmap, list_ref, leng, append} = require('./util.js');

var memq = function (item, x){
    if (!x){
        return false;
    }else if (item === car(x)){
        return x;
    }else{
        return memq(item, cdr(x));
    }
}

var a = list("fyb", 1, "hp");
print_list(a);
print_list(memq(1, a));
print_list(memq("naninani", a));
print_list(memq("hp", a));