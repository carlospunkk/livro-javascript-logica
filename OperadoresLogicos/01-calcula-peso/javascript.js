
function calcularPeso() {
  // cria referencia aos elementos
  var inNome = document.getElementById("inNome")
  var rdMasculino = document.getElementById("rdMasculino")
  var rdFeminino = document.getElementById("rdFeminino")
  var inAltura = document.getElementById("inAltura")
  var outResposta = document.getElementById("outResposta")

  // obtem os conteudos dos campos da página
  var nome = inNome.value
  var masculino = rdMasculino.checked
  var feminino = rdFeminino.checked
  var altura = Number(inAltura.value)

  // verifica se nome foi preenchido e sexo selecionado 
  if (nome == "" || (masculino == false && feminino == false)) {
    alert("por favor , informe o nome e selecione o sexo...");
    inNome.focus()//posiciona(joga o foco no campo de edição inNome)
    return;
  }

  // se altura vazio (0)ou NAN:NOT-a-Number(um texto for informado , por exemplo)
  if (altura === 0 || isNaN(altura) || altura >= 2.38 && altura <= 0.54) {
    alert("por favor , informe a altura corretamente...");
    inAltura.focus();
    return;
  }

  // se masculino (significa se masculino == true) faça isso
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2);//Math.pow eleva ao quadrado
  } else {
    peso = 21 * Math.pow(altura, 2)
  }


  // apresenta a resposta 
  outResposta.textContent = ` ${nome} : Seu Peso ideal é ${peso.toFixed(2)} Kg`
}

// referencia ao elemento btCalcular e registrar evento associado a calcularPeso
var btResultado = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPeso)

