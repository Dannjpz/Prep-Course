// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
var nuevaString = ('Hola'); //nice 1

// Crea una variable numérica, puede ser cualquier número:
var nuevoNum = 11; //nice 2

// Crea una variable booleana:
var nuevoBool = false; //nice 3

// Resuelve el siguiente problema matemático:
var nuevaResta = 10 - 5 === 5; //nice 4

// Resuelve el siguiente problema matemático:
var nuevaMultiplicacion = 10 * 4 === 40 ; //nice 5

// Resuelve el siguiente problema matemático:
var nuevoModulo = 21 % 5 === 1; //nice 6


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
    return str; //nice 7
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = (x + y);
  return suma; //nice 8
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta = (x - y);
  return resta; //nice 9
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicacion = (x*y);
  return multiplicacion; //nice 10
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var division = (x/y);
  return division; //nice 11
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var iguales = (x == y); //nice 12
  return iguales;
}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
  // Tu código:
  //if (str1.lenght == str2.lenght){
  //  variable_interna = true
  //} else {variable_interna = false}
  //return variable_interna
  var longitud = (str1.lenght ==str2.lenght);
  return longitud
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var menosquenoventa =  num;
    if (num < 90){
      return true;
    }
    return false; //nice 13
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var mayoquecincuenta = num;
    if (num > 50){
      return true;
    }
    return false; //nice 14
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var obrenerresto1 = x;
  var obtenerresto2 = y;
    return (x % y) //nice 15
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var espar = num;
    if (num%2==0){
      return true;
    }
    return false; //nice 16
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var espar = num;
  if (num%2==1){
    return true;
  }
  return false; //nice 17
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var elevaralcuadrado = num;
    return (num * num) //nice 18
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var elevaralcubo = num; //nice 19
  return (num * (num * num)) 
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevado = Math.pow(num, exponent); //nice 20
  return (elevado)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondearnumero = Math.round(num); //nice 21
  return (redondearnumero)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondearhaciarriba = Math.ceil(num); //nice 22
  return (redondearhaciarriba)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numerorandom = Math.random(); //nice 23
  return (numerorandom)
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero>0){
    return ('Es positivo')
  } else if (numero<0){
    return ('Es negativo')
  } else {
    return false; //nice 24
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var nombre = str;
 return (str + '!') //nice 25
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
 var completo = nombre + ' ' + apellido;
  return (completo) //nice 26 
}


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = nombre;
    return ('Hola ' + nombre + '!') //nice 27
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var altura = alto;
  var largo = ancho; //nice 28
    return (alto * ancho)
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var lado1 = lado;
    return (lado * 4 ) //nice 29
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
var piso = base;
var largo = altura;
  return ((base * altura)/2) //nice 30
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var dinero = euro;
    return (euro * 1.20) //nice 31
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
var esvocal = letra;
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    return ('Es vocal')
  } else if (letra.lenght !== 1){
    return ('Dato incorrecto')
  } else {(letra !== 'a' || letra !== 'e' || letra !== 'i' || letra !== 'o' || letra !== 'u')
    return ('Dato incorrecto')
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
