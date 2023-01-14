var saida = document.getElementById("mes");
var imprecao= "";
var meses = ["Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
for (var i=0; i<meses.length; i++){
     imprecao += meses[i] + "<br>";
     
}
saida.innerHTML = imprecao;