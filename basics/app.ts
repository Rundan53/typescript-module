"use strict";
const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const addBtn = document.querySelector('button')!;

const numResult: Array<number> = [];
const textResult: string[] = [];

type NumOrString = number | string
type ResultObj = {val: number, timestamp: Date}

function add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return Number(num1) + Number(num2);
}

function printResult(object: ResultObj) {
    console.log(object.val);
}

addBtn.addEventListener('click', () => {
    console.log('inside eventlistener');
    const num1 = input1.value;
    const num2 = input2.value;

    const answer1 = add(Number(num1), Number(num2));
    console.log(answer1);
    numResult.push(answer1 as number);

    const answer2 = add(num1, num2);
    console.log(answer2);
    textResult.push(answer2 as string);

    printResult({ val: Number(answer1), timestamp: new Date() });
    console.log(numResult, textResult);
});


//generics
function funn <t>(arg1: t) {
    return arg1;
} 

const ans = funn(424);
console.log(ans);


const promise = new Promise <string>((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved');
    }, 5000);
});

promise.then((result) => {
    console.log(result.split(' '));
});




//interface
interface ResultObj2{
    val: number,
    timeStamp: Date
}