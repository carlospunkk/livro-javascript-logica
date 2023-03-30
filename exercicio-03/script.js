// Restaurante a Quilo






// função calcular 
function btCalculo() {

  // entradas
  var inQuilo = document.getElementById('inQuilo')
  var inConsumo = document.getElementById('inConsumo')
  //saida
  var outValor = document.getElementById('outValor')


  // variaveis recebendo valores
  var Quilo = Number(inQuilo.value)
  var Consumo = Number(inConsumo.value)

  var valor = (Quilo / 1000) * Consumo;
  outValor.textContent = 'o valor a pagar é R$: ' + valor.toFixed(2);
}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', btCalculo)
