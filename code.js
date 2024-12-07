/*
function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}
*/

function e(n) {

    let fact = 1;
    let dynaE = 1;

    for(let i=1; i <= n; i++){

        fact = (fact * i);
        dynaE = (dynaE+(1 / fact));
    }

    return dynaE;

}

//console.log(e(2))
//console.log(dynaE(3))
