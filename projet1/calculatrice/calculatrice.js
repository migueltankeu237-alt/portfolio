var a = document.getElementById("text").value=0;
function puissance(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=0;
    }else{
        document.getElementById("texte").value= "^";
    }
    document.getElementById('log').value=document.getElementById("text").value;
}
function un(){ 
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=1;
    } else{
        document.getElementById("text").value=document.getElementById("text").value+1;
        
    }
}
function deux(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=2;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+2;
    }
}
function trois(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=3;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+3;
    }
}
function quatre(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=4;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+4;
    }
}
function cinq() {
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=5;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+5;
    }
}
function six(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=6;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+6;
    }
}
function sept(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=7;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+7;
    }
}
function huit(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=8;
    }else{
        var b = document.getElementById("text").value=document.getElementById("text").value+8;
    }
}
function neuf(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=9;
    }else{
        var a = document.getElementById("text").value=document.getElementById("text").value+9;
    }
}
function zero(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=0;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+0;
    }
}
function plus(){
    if(document.getElementById('text').value==0){
        document.getElementById('text').value=0;
    }else{
      document.getElementById('texte').value= "+";     
     document.getElementById('log').value=document.getElementById('text').value;
    document.getElementById('text').value=0;
}

    if(c=="-"){
        document.getElementById('log').value = parseFloat(document.getElementById('log').value)-document.getElementById('text').value;
       document.getElementById('texte').value="+";
    }
    document.getElementById('log').value=document.getElementById("text").value;
    document.getElementById("text").value=0;
    document.getElementById('texte').value="+";
}
function diviser(){
    if(document.getElementById("text").value==0){
    }else{
        document.getElementById("texte").value="/";
    }
    document.getElementById('log').value=document.getElementById("text").value;
    document.getElementById("text").value=0;
}
function moins(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=0;
    }else{
        document.getElementById("texte").value="-";
    }
    document.getElementById('log').value=document.getElementById("text").value;
    document.getElementById("text").value=0;
}
function fois(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=0;
    }else{
        document.getElementById("texte").value="*";
    }
    document.getElementById('log').value=document.getElementById("text").value;
    document.getElementById("text").value=0;
}
function point(){
    if(document.getElementById("text").value==0){
        document.getElementById("text").value=0;
    }else{
        document.getElementById("text").value=document.getElementById("text").value+".";
    }
}
function slach(){
    document.getElementById("text").value=document.getElementById("text").value*(-1);
}
function egal(){
    var a=parseFloat(document.getElementById("text").value);
    var b=parseFloat(document.getElementById('log').value);
    if(document.getElementById("texte").value=="+"){
        document.getElementById("text").value=(parseFloat(b))+ (parseFloat(a));
    }
    if(document.getElementById("texte").value=="-"){
        document.getElementById("text").value=(parseFloat(b)) - (parseFloat(a));
    }
    if(document.getElementById("texte").value=="*"){
        document.getElementById("text").value=(parseFloat(b)) * (parseFloat(a));
    }
    if(document.getElementById("texte").value=="/"){
        document.getElementById("text").value=(parseFloat(b)) / (parseFloat(a));
    }
    if(document.getElementById("texte").value=="^"){
        document.getElementById("text").value=b+"^"+a+"="+Math.pow(b,a);
    }
}