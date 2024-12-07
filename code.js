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

function dynaE(n){

    let fact = 1;
    let e = 1;

    for(let i=1; i <= n; i++){

        fact = (fact * i);
        e = (e+(1 / fact));
    }
    return e;

}

//console.log(dynaE(2))
//console.log(dynaE(3))
