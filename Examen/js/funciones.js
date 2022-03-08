
function calcular(){
    var x = parseInt(document.getElementById('valor').value);
    var y = parseInt(document.getElementById('CuotaI').value);
    var z = parseInt(document.getElementById('Periodo').value);
    if (form.valor.value>=  100000  &&  form.valor.value <= 1000000){                  
        if(form.CuotaI.value >= 0.10*form.valor.value){
            if(form.Periodo.value == 3 ||form.Periodo.value == 6 || form.Periodo.value == 9 || form.Periodo.value== 12 || form.Periodo.value== 18){
        document.getElementById('Capital').innerHTML = (x-y)*((1+0.0394)**z);
           
        var c = parseFloat(document.getElementById('Capital').innerHTML);
        document.getElementById('Cuota').innerHTML = (c/z);
    }
        else{
            alert("El periodo es solamente de 3, 6, 9, 12 ó 18 meses")
            form.CuotaI.focus();
            return false;
        }
    }
    else{
        alert("La cuota inicial tiene que ser minimo 10% del valor capital")
        form.CuotaI.focus();
        return false;
    }
}
else{
    alert("Estas ingresando un valor fuera del rango de $100,000.00 a $1,000,000.00")
    form.valor.focus();
    return false;
}
}
