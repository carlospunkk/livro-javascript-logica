
function CalculaRaiz() {
  // cria uma referencia aos elementos da pagina
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  //obtem conteudo do inNumero
  var numero = Number(inNumero.value)

  // condicional com not-a-Number (NaN) ou se não preencheu
  if (numero == 0 || isNaN(numero)) {
    alert("informe um numero válido...")
    inNumero.focus()//posiciona campo numero
    return; // retorna
  }

  var raiz = Math.sqrt(numero) // calcula a raiz quadrada do numero

  // condicional se valor da variavel raiz a este valor arredondado para baixo
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "RAIZ " + raiz// mostra a raiz
    outResposta.style.color = "green"
  } else {
    // senao , exibe msg indicando que não há raiz exata
    outResposta.textContent = "não há raiz exata para " + numero;
  }
}
var btExibe = document.getElementById("Exibir")
btExibe.addEventListener('click', CalculaRaiz)//EVENTO



