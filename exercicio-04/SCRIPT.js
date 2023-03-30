


function Calcular() {
  // entrada 
  var inMedicamento = document.getElementById('inMedicamento')
  var inPreco = document.getElementById('inPreco')


  // saida 
  var outValor = document.getElementById('outvalor')


  var Medicamento = (inMedicamento.value)
  var preco = Number(inPreco.value)

  var valor = Math.floor(preco * 2);
  outValor.textContent = " promomoção de " + Medicamento + " leve 2 por apenas R$ : " + valor.toFixed(2) + " reais";


}

var btcalculo = document.getElementById('btCalcular')
btcalculo.addEventListener('click', Calcular)