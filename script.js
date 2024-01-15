/*

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".💡 Para saber o tipo de dado você pode usar o operador `typeof`
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensag

*/

/* Primeira questão*/
alert("Hello World!")

/*Segunda questão */
let firstNumber = Number(prompt("Informe um número:"))
let secondNumber = Number(prompt("Informe um número:"))

alert(`Resultado da soma: ${firstNumber + secondNumber}`)

/*Terceira questão */
let isANumber = prompt("Digite qualquer coisa:")

if(!isNaN(isANumber)){
  alert(`"${isANumber}" é um número`)
}else{
  alert(`"${isANumber}" não é um número`)
}

/*Quarta questão */
let isAString = prompt("Digite qualquer coisa:")

if(isNaN(isAString)){
  alert(`"${isAString}" é uma string`)
}else{
  alert(`"${isAString}" não é uma string`)
}

/*Quinta questão */
let isBoolean = true;

if(typeof isBoolean === 'boolean'){
  alert(`"${isBoolean }" é um boleano`)
}else{
  alert(`"${isBoolean }" não é boleano`)
}

/*Sexta questão */
firstNumber = Number(prompt("Informe um número:"))
secondNumber = Number(prompt("Informe um número:"))

alert(`Resultado da subtração: ${firstNumber - secondNumber}`)

/*Setima questão */
firstNumber = Number(prompt("Informe um número:"))
secondNumber = Number(prompt("Informe um número:"))

alert(`Resultado da multiplicação: ${firstNumber * secondNumber}`)

/*Oitava questão */
firstNumber = Number(prompt("Informe um número:"))
secondNumber = Number(prompt("Informe um número:"))

alert(`Resultado da divisão: ${firstNumber / secondNumber}`)

/*Nona e decima questão  */

let parOuIpar = Number(prompt("Informe um número:"))

if(parOuIpar % 2 == 0){
  alert("Esse número é par")
}else{
  alert("Esse número é impar")
}
