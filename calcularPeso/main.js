
function IMC(){

    var valtalla=parseFloat(document.getElementById("talla").value);
    var valpeso=parseFloat(document.getElementById("peso").value);
    var imc=valpeso/(valtalla*valtalla);
    return imc;
}
function calcularPeso(){
    var nombre=document.getElementById("nombre").value;
    var imc= IMC();
   if(imc >0){
    if (imc < 18.5){
        alert (nombre +  " bajo de peso");

    }else{
        if (imc >=18.5 && imc < 24.9){
            alert(nombre + " peso normal");
        }else {
            if (imc >=25 && imc < 30 ) {
                alert(nombre + " sobrepeso")
            }else{
                if(imc >= 30){
                    alert(nombre + " obesidad")
                }
            }
        }
    }
   }else{
    alert("ingrese un numero mayor a 0")
   }

}