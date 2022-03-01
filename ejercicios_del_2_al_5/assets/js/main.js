
function ejercicio2() {

    /* EJERCICIO 2 */
    /* Obtener valores */

    var valor1 = parseInt(prompt("Ingresa el valor número 1"));
    var valor2 = parseInt(prompt("Ingresa el valor número 2"));

    if (valor1 !== valor2 && valor1 > 0 && valor2 > 0) {
        /* Si es verdadero
        Presentar informacion con los datos originales */
        document.write("VALOR 1 es: " + valor1 + ", VALOR 2 es: " + valor2);
        document.write("<br>-----------------------------------------<br>");
        document.write("<br>SUMA : " + (valor1 + valor2));
        document.write("<br>RESTA : " + (valor1 - valor2));
        document.write("<br>DIVISION : " + (valor1 / valor2));
        document.write("<br>MULTIPLICACION : " + (valor1 * valor2));
        document.write("<br>MODULO : " + (valor1 % valor2));
    } else {
        alert("No se cumplen los parámetros de entrada, valores iguales o menores a 1");
    }

}

function ejercicio3() {

    /* EJERCICIO 3  GRADOS FARERNHEIT */
    /* Obtener valores */
    var tempC = parseInt(prompt("Ingresa la temperatura en grados Celsius :"));

    const K = 273.15;
    const F = 32;

    var tempF = (tempC * (9 / 5) + F);
    var tempK = tempC + K;

    /* Presentar informacion con los datos originales */
    document.write("<br>TEMPERATURA CELSIUS : " + tempC);
    document.write("<br>TEMPERATURA FARENHEIT : " + tempF);
    document.write("<br>TEMPERATURA KELVIN : " + tempK);

}

function ejercicio4() {

    /* EJERCICIO 4 DIAS  */
    /* Obtener valores */
    var dias = parseInt(prompt("Ingresa la cantidad de dias :"));

    /* Definir constantes */
    const ANNO = 365;
    const SEM = 7;

    /* Calculos */
    var annosdias = dias / ANNO;
    var anno_final = Math.floor(annosdias)
    var resto_anno = dias - (anno_final * ANNO);

    var semanasdias = resto_anno / SEM;
    var semanas_final = Math.floor(semanasdias);
    var resto_semanas = dias - (anno_final * ANNO) - (semanas_final * SEM);

    /* Presentacion */
    document.write("<br>Los " + dias + " dias ingresados representan :" + anno_final + " año(s), " + semanas_final + " semanas, " + resto_semanas + " dias.");

}

function ejercicio5() {

    /* EJERCICIO 5 - */

    function sumar(p1, p2, p3, p4, p5) {
        var suma = num1 + num2 + num3 + num4 + num5;
        return suma;
    }

    // definir variables y parseo

    var num1 = parseInt(prompt("A continuación se le solicita que ingrese 5 números. El primer número es: "));
    var num2 = parseInt(prompt("Por favor ingrese el segundo número: "));
    var num3 = parseInt(prompt("El tercer número es: "));
    var num4 = parseInt(prompt("El cuarto número es: "));
    var num5 = parseInt(prompt("El quinto número que ingresará es: "));

    // operaciones 
    var suma = sumar(num1, num2, num3, num4, num5);
    var promedio = suma / 5;
    // presentar resultados 
    document.write("<br>La suma de los cinco números ingresados es : " + suma);
    document.write("<br>El promedio de los cinco números ingresados es : " + promedio);

}