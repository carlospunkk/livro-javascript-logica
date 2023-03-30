function converterDuracao() {
  //criar referencia dos elementos da pagina
  var intTitulo = document.getElementById('inTitulo')
  var inDuracao = document.getElementById('inDuracao')
  var outTitulo = document.getElementById('outTitulo')
  var outResposta = document.getElementById('outResposta')

  // obtem conteudos dos campos de entrada
  var titulo = intTitulo.value;
  var duracao = Number(inDuracao.value);

  //arredonda para baixo
  var horas = Math.floor(duracao / 60);

  //obtem o resto da divisão
  var minutos = duracao % 6

  // altera o conteudo dos paragrafos de resposta
  outTitulo.textContent = titulo
  outResposta.textContent = ` horas ${horas} e ${minutos} minutos(s)`




}

// registra um evento associado ao btn para carregar a função
var btn = document.getElementById('btConverter')
btn.addEventListener('click', converterDuracao);