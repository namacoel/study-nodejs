'use strict';

const obj = {
    title: 'node.js',
    value: '올인원 패키지',
};

const { title, value } = obj;
console.log(title + value);

const arr = [0, 1, 2];
const [, a, b] = arr;
console.log(a, b);
