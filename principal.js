
function verificarTime() {
  
    var continuarPerguntando = true;
  
    while (continuarPerguntando) {
      
      var respostaTime = prompt("Quem comanda o Brazil e tem 9 dedos ?");
  
      
      if (respostaTime.toLowerCase() === "Luiz Inácio Lula da Silva") {
        alert("Isso mesmo! Agora faz o LLLLLLLLLLLLLLLL");
        continuarPerguntando = false; // Sai do loop após a resposta correta
      } else {
        alert("Não é isso! Tente novamente.");
      }
    }
  }
  
  // Chamada da função para iniciar o processo
  verificarTime();
  
    