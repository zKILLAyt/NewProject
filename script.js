function rollDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1;
  document.getElementById('result').innerHTML = `<p>Resultado: 🎲 ${result}</p>`;
}
