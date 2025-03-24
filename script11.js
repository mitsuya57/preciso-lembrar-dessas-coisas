let saida = document.getElementById("saida");
let num,res;
num=parseInt(prompt("Digite um número inteiro"));
res=(num%2==0)?"par" : "impar";
saida.innerHTML=`${num} é ${res}`;