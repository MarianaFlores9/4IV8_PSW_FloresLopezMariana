function limpiar(){
    document.getElementById(interesForm).reset();

}
function calcular(){
    var x = parseInt(document.getElementById('valor').value);
    var y = parseInt(document.getElementById('CuotaI').value);
    document.getElementById('Capital').innerHTML = (x-y);
}