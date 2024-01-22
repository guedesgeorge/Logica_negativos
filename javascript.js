var numero = prompt("Digite um numero");

numero = parseFloat(numero);

if (isNaN(numero)) { 
  alert("Por favor insira um número valido");

}else if (numero > 0) {
  alert("O número é positivo");

}else if (numero < 0) {
  alert("O numero é negativo");

}else {
  alert("O número é zero");
}