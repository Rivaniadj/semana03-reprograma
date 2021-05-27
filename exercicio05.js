//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma 
//de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

 function calculadora(num1,num2 ) {
 let operacao = "divisao"
 
 switch (operacao){
     case "soma":
         return num1 + num2 
         break;
         case "multiplicacao":
             return num1 * num2 
             break;
             case "divisao":
                 return num1 /num2
                 break;
                 case "subtrair":
                     return num1 - num2
                     break;
                     default:
                         console.log("Deu erro, tenta de novo!")
                        }
}

console.log(calculadora(12,4))
