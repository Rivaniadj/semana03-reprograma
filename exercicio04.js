//4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 

//a) números de 1 a 100 

for(let r = 1; r<=100; r++){

  console.log(r)
}

//b) quando chegar no número 50 interrompa a instrução e pare o loop 

for (let r = 1; r<=100; r++){
   if( i === 51) {
       break
   }

   console.log(i)
}

//c) quando chegar no número 50 pule a instrução 

for (let r = 1; r<=100; r++){
   if(r ===50){
       continue
   }
   console.log(r)
} 
