// calcular o fuso frança

function calcularFuso() {
  // cria a referencia aos elementos da pagina
  var inHoraBrasil = document.getElementById("inHoraBrasil")
  var outHoraFranca = document.getElementById("outHoraFranca")

  //obtem e converte o conteudo do campo inHoraBrasil
  var horaBrasil = Number(inHoraBrasil.value)

  // se não preencheu corretamente Not-a-Number (NaN)
  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("informe a hora no Brasil corretamente");
    inHoraBrasil.focus();//posiciona o focus
    return;
  }
  var horaFranca = horaBrasil + 5 // calcula o horario da frança
  // se passar das 24 horas na frança...
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24 // subtrai 24
  }
  //exibe resposta 
  outHoraFranca.textContent = "Hora França : " + horaFranca.toFixed(2)

}
var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", calcularFuso)