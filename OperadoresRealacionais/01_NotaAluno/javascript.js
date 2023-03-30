// entradas
var inNome = document.getElementById("inNome")
var inNotaone = document.getElementById("inNota1")
var inNotadois = document.getElementById("inNota2")

var outMedia = document.getElementById("outMedia")
var outSituacao = document.getElementById("outSituacao")

// função exibir
function exibirmedia() {

  //variaveis
  var nome = (inNome.value)
  var nota1 = Number(inNotaone.value)
  var nota2 = Number(inNotadois.value)

  // calculo media
  var media = Number(nota1 + nota2) / 2
  outMedia.textContent = `${nome} sua media  de notas é : ${media}`

  if (media >= 5 && media <= 10) {
    outSituacao.textContent = `parabéns ${nome} você foi aprovado`
  } else {
    outSituacao.textContent = `${nome} você foi reprovado`
  }

}


// botão exibir media
const btResultado = document.getElementById('btResultado')
btResultado.addEventListener('click', exibirmedia)