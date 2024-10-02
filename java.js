alert("adivinhe o número");
let numeroSecreto = 9;
let chute;
let tentativas =1;

while(chute != numeroSecreto){
    chute = prompt("Fale um número e veja um bom anime");
if(chute== numeroSecreto){
console.log("boa")
}
else{
if(numeroSecreto> chute){
alert(" numéro secreto é maior que ${chute}")

}else{
alert("numero secreto é menor que ${chute}")

}
}
}