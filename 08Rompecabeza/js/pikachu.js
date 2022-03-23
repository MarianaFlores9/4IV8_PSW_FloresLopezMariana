//Obtener piezas

var piezas = document.getElementsByClassName('movil');

var tamañoWidth = [134, 192, 134, 163, 134, 163, 192, 134];
var tamañoHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

//asignarlo a las piezas

for(var i = 0; i < piezas.length; i++){
    piezas[i].setAttribute("width", tamañoWidth);
    piezas[i].setAttribute("height", tamañoHeight);
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+i));
    piezas[i].setAttribute("y", Math.floor((Math.random()*400)+i));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;

function seleccionarElemento(evt){
    elementSelect = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPostX = parseFloat(elementSelect.getAttribute("x"));
    currentPostY = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");

}

function moverElemento(evt){
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    
    currentPostX = currentPostX + dx;
    currentPostY = currentPostX + dy;

    elementSelect.setAttribute("x", currentPostX);
    elementSelect.setAttribute("y", currentPostY);

    currentX = evt.clientX;
    currentY = elementSelect.clientY;

    elementSelect.setAttribute("onmouseout", "desseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "desseleccionarElemento(evt)");
    iman();
}

function desseleccionarElemento(evt){
    //saber si ya esta en donde debe de estar la pieza
    testing();
    if(elementSelect !=0){
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }
}

var entorno = document.getElementById('entorno');

function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.CloneNode(true);
    var id = padre.getAttribute("id");

    entorno.removeChild(document.getElementById(id));

    entorno.appendChild(clone);

    return entorno.lastChild.firstChild;
}

var orgiX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
var orgiY = [100, 100, 100, 233, 204, 233, 337, 336, 337];

function iman(){
    for( var i = 0; i < piezas.length; i++){
        if(Math.abs(currentPostX - orgiX[i]) < 15
        && Math.abs(currentPostY - orgiY[i]) > 15){
            elementSelect.setAttribute("x", orgiX[i]);
            elementSelect.setAttribute("y", orgiY[i]);
        }
    }
}

var win = document.getElementById("win");

function testing (){
    var bien_ubicada = 0;
    var padres = document.getElementsByClassName('padre');

    for(var i =0; i < piezas.length; i++){
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));

        var ide = padres[i].getAttribute("id");
        if(orgiX[ide] == posx && orgiY[ide] == posy){
            bien_ubicada = bien_ubicada + 1;
        }
    }

    if(bien_ubicada == 9){
        win.onplay();
    }
}