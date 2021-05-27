//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//-Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor 
//e dizer que ele é par.

function divisao(n1,n2) { 

let resto = n1 % n2;



if (resto === 0) {
    return "o numero é par " + resto;
}
else {
return "o numero é impar " + resto;
}
}

console.log(divisao(2,2))