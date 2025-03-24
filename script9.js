let a,b,c,d,e;
let saida = document.getElementById("saida");
a=100;
b=120;
c=200;
d=!(a<=b) ? "OK" : "Só que nao";//d="verdadeiro" o primeiro sempre é verdadeiro ou falso, depende do que for colocado na sequencia
e=!(a>=c) ? "Blz" : "Zoado";//e="falso"
saida.innerHTML=`d = ${d}<br>`;
saida.innerHTML+=`e = ${e}`;
