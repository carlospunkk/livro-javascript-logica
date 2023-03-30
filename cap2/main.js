
//botao mostra
var btn = document.getElementById('mostra')
btn.addEventListener("click", mostraOla)
//btn.onclick = mostraOla

//função mostra
function mostraOla() {
  var nome = document.getElementById('nome').value
  document.getElementById('resposta').textContent = "Olá" + nome
}

