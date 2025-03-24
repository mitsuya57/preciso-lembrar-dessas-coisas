let a,b,c,d;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=!((a>=b) || (a<=c));//true mesmo se inverter ele continua true//se negar o resultado total ele vira false
saida.innerHTML=`OR d = ${d}`;
