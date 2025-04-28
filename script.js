function rollDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1;

  // Atualiza resultado principal
  document.getElementById('result').innerHTML = `<p>Resultado: 🎲 ${result}</p>`;

  // Toca o som
  const diceSound = document.getElementById('diceSound');
  diceSound.currentTime = 0;
  diceSound.play();

  // Atualiza o histórico
  const historyList = document.getElementById('historyList');
  const listItem = document.createElement('li');
  listItem.textContent = `d${sides}: ${result}`;
  
  // Coloca o novo no topo
  historyList.insertBefore(listItem, historyList.firstChild);

  // Limita histórico para 10 últimos lançamentos
  if (historyList.children.length > 10) {
    historyList.removeChild(historyList.lastChild);
  }
}
