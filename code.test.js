const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

//assert(factorial(10) === 3628800);
//assert(e(10) === 2.7182818011463845);

//from last semesters repo
assert(e(10) === 2.7182818011463845);
assert(e(5) >= 2.716 - .1 && e(5) <= 2.716 + .1);
assert(e(100) >= 2.6881 - .1 && e(100) <= 2.6881 + .1);

//added on for new semester 
//definative values
assert.strictEqual(e(0) === 1);
assert.strictEqual(e(1) === 2);
//negative check
assert.strictEqual(e(-1) === 1);
