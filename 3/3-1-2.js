"use strict";

var rand = function (){
    let x = random_init;
    return function {
        x = rand_update(x);
        return x;
    }
}