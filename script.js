idade = prompt("Digite sua idade!");

if (idade < 18) {
  alert("Você não pode jogar!");
} else {
  alert("Você pode jogar!");

  escolhaJogador = prompt("Escolha: 1-Pedra, 2-Papel, 3-Tesoura?");
  
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Converter números em palavras
  let escolhaJogadorTexto;
  let escolhaComputadorTexto;

  if (escolhaJogador == 1) {
    escolhaJogadorTexto = "Pedra";
  } else if (escolhaJogador == 2) {
    escolhaJogadorTexto = "Papel";
  } else if (escolhaJogador == 3) {
    escolhaJogadorTexto = "Tesoura";
  }

  if (escolhaComputador == 1) {
    escolhaComputadorTexto = "Pedra";
  } else if (escolhaComputador == 2) {
    escolhaComputadorTexto = "Papel";
  } else if (escolhaComputador == 3) {
    escolhaComputadorTexto = "Tesoura";
  }

  // Verificando empate
  if (escolhaJogador == escolhaComputador) {
    alert("Empate!! Ambos escolheram " + escolhaJogadorTexto + ".");
  } else if (escolhaJogador == 1 && escolhaComputador == 2) {
    alert("Computador venceu!! " + escolhaComputadorTexto + " vence " + escolhaJogadorTexto + ".");
  } else if (escolhaJogador == 1 && escolhaComputador == 3) {
    alert("Jogador venceu!! " + escolhaJogadorTexto + " vence " + escolhaComputadorTexto + ".");
  } else if (escolhaJogador == 2 && escolhaComputador == 1) {
    alert("Jogador venceu!! " + escolhaJogadorTexto + " vence " + escolhaComputadorTexto + ".");
  } else if (escolhaJogador == 2 && escolhaComputador == 3) {
    alert("Computador venceu!! " + escolhaComputadorTexto + " vence " + escolhaJogadorTexto + ".");
  } else if (escolhaJogador == 3 && escolhaComputador == 1) {
    alert("Computador venceu!! " + escolhaComputadorTexto + " vence " + escolhaJogadorTexto + ".");
  } else if (escolhaJogador == 3 && escolhaComputador == 2) {
    alert("Jogador venceu!! " + escolhaJogadorTexto + " vence " + escolhaComputadorTexto + ".");
  }

  alert("Computador escolheu: " + escolhaComputadorTexto);
}