//const arrayNums =[1,2,3,4]
//function multiplicaPorDez(num) {
    //return num * 10
//}

//const arraySomada = arrayNums.map(multiplicaPorDez)

//console.log(arraySomada)

//const arraySomada = arrayNums.map(num => num * 10)

//console.log(arraySomada)

const numeros = [43, 50, 65, 12]

//const soma = numeros.reduce((acum, atual) => atual+ acum, 0)

//console.log(soma) //170

function operacaoNumerica(acum, atual)  {
    return atual + acum
}

const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma)