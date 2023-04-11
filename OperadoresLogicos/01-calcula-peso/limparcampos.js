// limpa os campos dos elementos
function limparCampos() {
  document.getElementById('inNome').value = "";
  document.getElementById('rdMasculino').checked = false;
  document.getElementById('rdFeminino').checked = false;
  document.getElementById('inAltura').value = "";
  document.getElementById('outResposta').textContent = "";

  // posiciona joga o foco no elemento inNome
  document.getElementById("inNome").focus();

}
var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener('click', limparCampos)

/* outra forma também de limpar os campos é utilizar uma chamada ao método  location.reload()

function limpar(){
  location.reload()
    // posiciona joga o foco no elemento inNome
  document.getElementById("inNome").focus();

}

*/