//Declaration function
function addPure(a,b){
    return a + b

}
//call function
let sum = addPure(1,6)
//console.log(sum)

let b = 7 
function sideEffect(a){
    return`${a + b}`//Loocall variablr
}
let sum2 = sideEffect(1)
console.log(sum2)