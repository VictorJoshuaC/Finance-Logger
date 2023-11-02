"use strict";
const grate = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
console.log('testing');
grate(9, 1, 99);
const log = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
const infor = { name: "Ryder", uid: 85999996 };
log('0u9yl', 'bag');
greetAgain(infor);
//function signatures
// eg 1
let gate;
gate = (name, gateIn) => {
    console.log(`${name} says ${gateIn}`);
};
// eg 2
let calc;
calc = (one, two, action) => {
    if (action === 'four') {
        return one + two;
    }
    else {
        return one - two;
    }
};
