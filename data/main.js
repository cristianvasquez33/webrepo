var button1=document.getElementById("mi_boton");
var mitexto =document.getElementById("mi_texto");
var count =0;

button1.onclick=function () {
    count++;
    mitexto.innerHTML=count
}