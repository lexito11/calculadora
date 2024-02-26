function calculadora() {
    var opcion = prompt(
      "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;
  
    if (opcion !== "5" && opcion !== "7") {
      num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }
  
    alert(
      "la operacion es " +
        opcion +
        " el primer valor es " +
        num1 +
        " el segundo valor es " +
        num2
    );
  }
  function restar(num1, num2){
    let resta = num1 - num2;
    console.log(resta);
}
let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
restar(numero1, numero2);
  
  // Llamar a la función principal
  calculadora();

  function restar(num1, num2) {
    return num1 + num2;
  }
  
  function restar(numero1, numero2){
    let resta = numero1 - numero2
    console.log(resta);
  }
  let num1 = parseFloat(prompt("Ingrese el primer numero"));
  let num2 = parseFloat(prompt("Ingrese el segundo nu mero"));
  restar(num1, num2);
  
  function multiplicar(num1, num2){
    let multi = num1 * num2;
    console.log(multi);
  }
  let numer1 = parseFloat(prompt("Ingrese el primer numero"));
  let numer2 = parseFloat(prompt("Ingrese el segundo numero"));
  multiplicar(numer1, numer2);

  function dividir(num1, num2){
    let divi = num1 / numer2;
    console.log(divi);
  }
  let nume1 = parseFloat(prompt("Ingrese el primer nuemro"));
  let nume2 = parseFloat(prompt("Ingrese el segundo numero"));
  dividir(nume1, nume2);
<
  function exponente(num1, num2){
    expon = num1 ** num2;
    console.log("el resultao es " + expon);
  }
  let elNum1 = parseFloat(prompt("Ingrese el primer numero / la base"));
  let elNum2 = parseFloat(prompt("Ingrese el segundo numero / el exponente"));
  exponente(elNum1, elNum2);<

  // Función principal del programa
  function calculadora() {
    var opcion = prompt(
      "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;
  
    if (opcion !== "5" && opcion !== "7") {
      num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }
    switch (opcion) {
        case "1":
          resultado = sumar(num1, num2);
          break;
        case "2":
          resultado = restar(num1, num2);
          break;
        case "3":
          resultado = multiplicar(num1, num2);
          break;
        case "4":
          resultado = dividir(num1, num2);
          break;
        case "5":
          resultado = factorial(num1);
          break;
        case "6":
          var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
          resultado = exponente(num1, exponenteNum);
          break;
        case "7":
          resultado = raizCuadrada(num1);
          break;
        default:
          resultado = "Opción no válida";
          break;
      }
    
      alert("El resultado es: " + resultado);
    }
    
    // Llamar a la función principal
    calculadora();