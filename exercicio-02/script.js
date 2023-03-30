// exercicio 2 Revenda de veiculos

function MostrarPromo() {
  // tipo e preco veiculo

  var inVeiculo = document.getElementById('inVeiculo').value
  var inPreco = document.getElementById('inPreco').value

  //saidas
  var outVeiculo = document.getElementById('outVeiculo')
  var outEntrada = document.getElementById('outEntrada')
  var outParcela = document.getElementById('outParcela')

  //modelo veiculo
  outVeiculo.textContent = `Promoção ${inVeiculo}`

  // calculo entrada
  var calEntrada = inPreco * 0.5
  outEntrada.textContent = `com entrada de R$:${calEntrada.toFixed(2)}`

  // calculo Parcela
  var calcParcela = (calEntrada) / 12
  outParcela.textContent = `suas parcelas ficam + 12x R$:${calcParcela.toFixed(2)}`






}
// botao ver promoção
var btn = document.getElementById('btVerPromocao')
btn.addEventListener('click', MostrarPromo)