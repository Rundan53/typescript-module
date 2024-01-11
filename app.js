"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const addBtn = document.querySelector('button');
const numResult = [];
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return Number(num1) + Number(num2);
}
function printResult(object) {
    console.log(object.val);
}
addBtn.addEventListener('click', () => {
    console.log('inside eventlistener');
    const num1 = input1.value;
    const num2 = input2.value;
    const answer1 = add(Number(num1), Number(num2));
    console.log(answer1);
    numResult.push(answer1);
    const answer2 = add(num1, num2);
    console.log(answer2);
    textResult.push(answer2);
    printResult({ val: Number(answer1), timestamp: new Date() });
    console.log(numResult, textResult);
});
//generics
function funn(arg1) {
    return arg1;
}
const ans = funn(424);
console.log(ans);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved');
    }, 5000);
});
promise.then((result) => {
    console.log(result.split(' '));
});
