

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