//problema 1
function problema1(){
    var datos = document.querySelector('#p1-input').value;
     
        var cambio = datos.split('').reverse().join('');
        //Metodo reverse() invierte el orden de los elementos de un array
        // join()unira todos los elementos dados en una cadena y devuelve esta cadena. 
        document.querySelector('#p1-output').textContent = cambio;
}

function validar(f){

    var teclado = (document.all)?f.KeyCode : f.which;
    /* , cuando el cuerpo se encuentra en movimiento, 
    se pueden considerar las magnitudes con: Sentido positivo: 
    El vector tiene igual sentido que el movimiento. 
    Sentido negativo: El vector tiene sentido contrario al movimiento.*/
    if(teclado==8) return true;
    var patron = /[0-9\d.]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}

//problema 2
function problema2(){
    var datox1 = document.querySelector('#p2-x1').value;
    var datox2 = document.querySelector('#p2-x2').value;
    var datox3 = document.querySelector('#p2-x3').value;
    var datox4 = document.querySelector('#p2-x4').value;
    var datox5 = document.querySelector('#p2-x5').value;
    var datoy1 = document.querySelector('#p2-y1').value;
    var datoy2 = document.querySelector('#p2-y2').value;
    var datoy3 = document.querySelector('#p2-y3').value;
    var datoy4 = document.querySelector('#p2-y4').value;
    var datoy5 = document.querySelector('#p2-y5').value;


    var valorx1 = parseFloat(datox1);
    var valorx2 = parseFloat(datox2);
    var valorx3 = parseFloat(datox3);
    var valorx4 = parseFloat(datox4);
    var valorx5 = parseFloat(datox5);
    var valory1 = parseFloat(datoy1);
    var valory2 = parseFloat(datoy2);
    var valory3 = parseFloat(datoy3);
    var valory4 = parseFloat(datoy4);
    var valory5 = parseFloat(datoy5);
    
    if(datox1 =="" ||datox2 ==" " ||datox3 =="" ||datox4 =="" ||
    datox5 =="" || datoy1==" " || datoy2=="" || datoy3==""
    || datoy4=="" || datoy5==""){
       alert("Completa todos los campos");
    }else{
        var resultado = ((valorx1*valory1)+(valorx2*valory2)+(valorx3*valory3)+
        (valorx4*valory4)+(valorx5*valory5));
        document.querySelector('#p2-output').textContent = "El minimo producto escalar es: " + resultado;
    }
    
}



//problema 3

function problema3(){

    //definir un alfabeto
    var alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T',
                    'U','V','W','X','Y','Z']
    
    //Vamos obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function(palabra){
        //crear una expresion quem e recupere las palabras
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //tengo que calcular cuantos caracteres unicos hay
    var p3_res = '';

    p3_palabras.forEach(function(palabra, i){
        //separar las palabras actuales del array que
        //contiene cada letras de dicha palabra
        var letras_unicas = [];
        var palabras_array = palabra.split('');

        //itereacion
        alfabeto.forEach(function(letra,J){
            //itero la palabra
            palabras_array.forEach(function(letras_palabras, k){

                //comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado 
                    //la agregamos a un array para contar
                    //las letras unicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: '+ palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;

}
function Validar(e){
    var cambio = '';
    //Se añaden las letras validas
    var patron = 'abcdefghijklmnñopqrstuvwxyz'+'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';
	
    for (var i=0; i<e.length; i++)
       if (patron.indexOf(e.charAt(i)) != -1) 
	     cambio += e.charAt(i);
    return cambio;
}