let a,b,res;
let saida = document.getElementById("saida");
a=9;
b=10;
res=(a<b);
saida.innerHTML=`a = ${a} , b = ${b} <br>`;
saida.innerHTML+=`a < b : ${(a<b)} <br>`;
saida.innerHTML+=`!( a < b) : ${!(a<b)}<br>`;
saida.innerHTML+="res : "+typeof(res);