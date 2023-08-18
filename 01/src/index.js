const express = require('express');
const app = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogada = 0;

app.get('/', (req, res) => {

    if (jogada < jogadores.length) {
        res.send(`É a vez de ${jogadores[jogada]} jogar!`);
        jogada++;
    } else {
        jogada = 0;
        res.send(`É a vez de ${jogadores[jogada]} jogar!`);
        jogada++;
    }
});
app.listen(3000);