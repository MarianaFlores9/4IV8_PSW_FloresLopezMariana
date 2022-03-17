//funcion que se encargue de validar por expresion regular


function validarn(e){

    var teclado = (document.all)?e.KeyCode : e.which;
    /* vamos aplicar una prueba logica a todo el teclado
    a partir de un patron este patron debe de ser
    numerico y solo acepta 0-9 . todo lo demas lo deja
    escapar */
    if(teclado==8) return true;
    var patron = /[0-9\d]+\.?/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}
//Problema 1
function interes(){

    var valor = document.formulario1.cantidad.value;

    //tipo de dato

    var resul = parseFloat(valor);
    if(document.formulario1.cantidad.value==""){
        alert("Debes llenar todos los campos");
    }else{
        var Floateres = resul*0.02;

        var total = resul + Floateres;

        //vamos a imprimir el resultado

        document.formulario1.sueldoI.value = "$" + total;
    }
}

function borrard(){

    document.formulario1.sueldoI.value = "";
    document.formulario1.cantidad.value = "";
}

//Problema 2
function calcular(){
    var valor1 = document.formulario2.sueldob.value;
    var valor2 = document.formulario2.venta1.value;
    var valor3 = document.formulario2.venta2.value;
    var valor4 = document.formulario2.venta3.value;
    //tipo de dato

    var resul1 = parseFloat(valor1);
    var resul2 = parseFloat(valor2);
    var resul3 = parseFloat(valor3);
    var resul4 = parseFloat(valor4);
    if(valor1=="" || valor2==""
    || valor3=="" || valor4==""){
        alert("Debes llenar todos los campos");
    }else{
    var comision = (resul2 + resul3 + resul4)*.10;
    
    document.formulario2.comisiones.value = "$" + comision;
    
    var totalcom = resul1 + comision;
    document.formulario2.totalc.value = "$" + totalcom;
    }
}
function borrarcom(){
    document.formulario2.totalc.value = "";
    document.formulario2.comisiones.value = "";
    document.formulario2.sueldob.value = "";
    document.formulario2.venta1.value = "";
    document.formulario2.venta2.value = "";
    document.formulario2.venta3.value = "";
    document.formulario2.pom.value = "";
    document.formulario2.poh.value = "";
}

//Problema 3
function descuento(){

    var valor3 = document.formulario3.cantidadt.value;

    //tipo de dato

    var resulc = parseFloat(valor3);
    if(document.formulario3.cantidadt.value==""){
        alert("Debes llenar todos los campos");
    }else{
    var descuento = resulc*0.15;

    var total3 = resulc - descuento;

    //vamos a imprimir el resultado

    document.formulario3.compra.value = "$" + total3;
    }
}

function borrarc(){

    document.formulario3.compra.value = "";
    document.formulario3.cantidadt.value = "";
}
//Problema 4

function calificaciones(){
    var par1 = document.formulario4.parcial1.value;
    var par2 = document.formulario4.parcial2.value;
    var par3 = document.formulario4.parcial3.value;
    var examen = document.formulario4.calfin.value;
    var trabajo = document.formulario4.trabfin.value;

    var calif5 = parseFloat(trabajo);
    var calif1 = parseFloat(par1);
    var calif2 = parseFloat(par2);
    var calif3 = parseFloat(par3);
    var calif4 = parseFloat(examen);

    if(par1==""||par2==""
    ||par3=="" ||examen=="" 
    ||trabajo==""){
        alert("Debes llenar todos los campos");
        
    }else if(calif1 < 0 || calif1>10 ||
            calif2 < 0 ||calif2 >10 ||
            calif3 < 0 || calif3>10 || 
            calif4< 0|| calif4 >10 ||
            calif5< 0 || calif5 >10){
    alert("Introduzca bien los datos"); 
    }else{           
        var califparcial = ((calif1 + calif2 + calif3)*55)/30;

        document.formulario4.prompa.value = califparcial + "%";
        var califexamen = ((calif4)*30)/10;
        document.formulario4.promex.value = califexamen + "%";

        
        var califtrabajo = ((calif5)*15)/10;
        document.formulario4.promtrb.value = califtrabajo + "%";

        var final = ((califparcial + califexamen + califtrabajo)*10)/100;
        document.formulario4.final.value = final;  
        
            
        } 
   
}
function borrarpar(){
    document.formulario4.promtrb.value = "";
    document.formulario4.promex.value = "";
    document.formulario4.prompa.value = "";
    document.formulario4.parcial1.value = "";
    document.formulario4.parcial2 .value = "";
    document.formulario4.parcial3.value = "";
    document.formulario4.calfin.value = "";
    document.formulario4.trabfin.value = "";
    document.formulario4.final.value = "";
}


//Problema5
function validar(f){

    var teclado = (document.all)?f.KeyCode : f.which;
    /* vamos aplicar una prueba logica a todo el teclado
    a partir de un patron este patron debe de ser
    numerico y solo acepta 0-9 . todo lo demas lo deja
    escapar */
    if(teclado==8) return true;
    var patron = /[0-9\d]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}

function porcentaje(){
    var valorh = document.formulario5.hombres.value;
    var valorm = document.formulario5.mujeres.value;
    //tipo de dato

    var resul1 = parseFloat(valorh);
    var resul2 = parseFloat(valorm);
    if(document.formulario5.hombres.value=="" ||document.formulario5.mujeres.value==""){
        alert("Debes llenar todos los campos");
    }else{
    var totalgrupo = resul1 + resul2;
    
    document.formulario5.total.value = totalgrupo;
    
    var porcentajeh = (resul1*100)/totalgrupo;
    document.formulario5.poh.value = porcentajeh + "%";
    
    var porcentajem = (resul2*100)/totalgrupo;
    document.formulario5.pom.value = porcentajem  + "%"; 
    }  
}
function borrarp(){
    document.formulario5.total.value = "";
    document.formulario5.hombres.value = "";
    document.formulario5.mujeres.value = "";
    document.formulario5.pom.value = "";
    document.formulario5.poh.value = "";
}

//Problema 6

function edad(){
    var dia1 = document.formulario6.dian.value;
    var mes1 = document.formulario6.mesn.value;
    var año1 = document.formulario6.añon.value;
    var dia2 = document.formulario6.diap.value;
    var mes2 = document.formulario6.mesp.value;
    var año2 = document.formulario6.añop.value;

    var dn = parseFloat(dia1);
    var mn = parseFloat(mes1);
    var an = parseFloat(año1);
    var dp = parseFloat(dia2);
    var mp = parseFloat(mes2);
    var ap = parseFloat(año2);

    if(dia1==""||mes1=="" ||año1=="" ||dia2==""||mes2=="" ||año2=="" ){
        alert("Debes llenar todos los campos");
        
    }else if(dn < 1 || dn>31 ||dp < 1 || dp>31 ){
        alert("Dia invalido. Rango de días: 1 - 31"); 
    }else if(mn < 1 || mn>12 ||mp < 1 ||mp>12 ){
        alert("Mes invalido. Rango de mes: 1 - 12");
    }else if(an < 1900  ||ap < 2022  ){
        alert("Año invalido. Rango del año nacimiento: apartir de 1900.Rango del año nacimiento: apartir de 2022 Dato Interesante:El título de récord de la persona viva más longeva le pertenece a Kane Tanaka (Japón), con 122 años");           
    }else if (an<ap){
        if(mn>mp){
            var añof = ap - an -1;
        }else if(mn=mp && dn>dp){
            var añof = ap - an -1 ;
        }else{
            var añof = ap - an;
        }
    
    document.formulario6.edadf.value = añof + " año/s";
    }else if (an=ap){
        if(mp>mn){
            var mes = mp-mn;
            document.formulario6.edadf.value = mes + " mes/es";
        }else if(mp=mn && dn<dp){
                var dia2 = dp-dn;  
                document.formulario6.edadf.value = dia2 + " dias";
                
        }else if(mp=mn && dn==dp){
                var dia = 1;  
                document.formulario6.edadf.value = dia + " dia";        
        }else{
           alert("Indroduzca bien la fecha de nacimiento");
        }
    
        
    }
}
function borraredad(){
    document.formulario6.edadf.value = "";
    document.formulario6.mesn.value = "";
    document.formulario6.mesp.value = "";
    document.formulario6.dian.value = "";
    document.formulario6.diap .value = "";
    document.formulario6.añon.value = "";
    document.formulario6.añop.value = "";
    document.formulario6.dian.value = "";
    document.formulario6.diap.value = "";
}
