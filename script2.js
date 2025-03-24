let a,b;
let saida = document.getElementById("saida");
a=10; //10 int
b="10";//10 string
saida.innerHTML="Igualdade = "+(a==b)+"<br>"; //true, verdadeiro pois sao o mesmo valor
saida.innerHTML+="Idêntico = "+(a===b)+"<br>"; //false, falso pois sao do mesmo valor mas nao do mesmo tipo
saida.innerHTML+="Não igual = "+(a!=b)+"<br>"; //false se um lado é falso ele é true
saida.innerHTML+="Não Idêntico = "+(a!==b)+"<br>"; //true se um é verdadeiro o outro lado é falso