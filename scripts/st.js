var number = 0
var contador = 0;

function comprobar() {
    var input = document.getElementById("idNumero").value;
    if (input > number) {
        alert("Prueba con uno mas chico");
        contador += 1;
    } else if (input < number) {
        alert("Prueba con una mas grande");
        contador += 1;
    } else if (input == number) {
        alert("Excelente ese era el numero | Intentos: " + contador);
        document.getElementById("Show").value = number;
    }
}

function randnm() {
    number = Math.round(Math.random() * 100);
    alert("Adivina el numero");
}

function start() {
    document.getElementById("container").style.visibility = "visible";
    randnm()
}