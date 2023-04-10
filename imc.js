function calculate(){
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
    
var imc = weight / height ** 2;
var text=""
if (imc < 18.5) {
    text="Vc está magro"
 }   else if(imc<24.9){
    text="vc está na media"
 }   else if(imc<29.9){
    text="vc está com sobrepeso"
 }   else if(imc<39.9){
    text="vc está com obesidade"
 }   else if(imc>39.9){
    text="vc está com obsidade alta"
 }
 document.getElementById("text_area").innerText=text
}