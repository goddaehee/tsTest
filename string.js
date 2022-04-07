"use strict";
let fullName = `Bob Bobbington`;
let age = 38;
let sentence = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month. `;
// template string을 사용하지 않을 경우
let sentence2 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
