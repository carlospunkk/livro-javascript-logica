// funcoes matematicas

/*1- Retorna o valor absoluto de um número, ou seja, se o valor for
negativo, ele será convertido para positivo. Se positivo, o valor
permanece o mesmo.
Exemplo: Math.abs(-3) => 3
Veja uma aplicação de Math.abs() no Exemplo 8.3*/

/*var resultado = Math.abs(-3)
console.log(resultado)*/


/*
2-Arredonda o valor para cima. Dessa forma, se o valor possuir
decimais, retorna o próximo número inteiro do valor analisado.
Exemplo: Math.ceil(4.2) => 5
Veja uma aplicação de Math.ceil() no Exemplo 9.2

Math.floor(5.2) arredonda para baixo
=> 5

*/

/*var resultado = Math.ceil(4.2)
console.log(resultado)*/

/* 
3- arredonda para baixo
var resultado = Math.ceil(7.9)
console.log(resultado)

*/

/*

4- Base elevada ao expoente
Math.pow(3,2)

*/

/*
5- Math.random() retoran um numero aleatório entre 0 e 1 com várias casas decimais
*/

/*
6- Math.round() Arredonda o valor para o inteiro mais próximo. A partir de .5 na
parte fracionária, o valor é arredondado para cima. Anterior a .5,
é arredondado para baixo.
Exemplo: Math.round(2.7) => 3
Veja uma aplicação de Math.round() no Exemplo 6.10
*/

/* 
7- Math.sqrt(num)  Retorna a raiz quadrada do número (square root).
Exemplo: Math.sqrt(16) => 4
Veja uma aplicação de Math.sqrt() no Exemplo 3.5
*/

// testes de formulas

var x = 10 / 2 * Math.sqrt(9) - 4;
alert(x)

