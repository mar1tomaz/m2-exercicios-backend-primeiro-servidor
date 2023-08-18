const express = require('express');
const app = express();

const interval = 1000;
const numeroRaiz = 67;
let numero = 0;
let rodando = false;
let setIntervalDisparado = false;

function atualizarTextoCronometro() {
    const textoCronometro = `${((parseInt(numero / 60).toString()).padStart(2, "0"))} minutos e ${((parseInt(numero % 60).toString()).padStart(2, "0"))} segundos`;
    return textoCronometro;
}

function iniciarCronometro() {
    rodando = true;
    if (!setIntervalDisparado) {
        setInterval(() => {
            if (rodando) {
                numero++;
            }
        }, interval);

        setIntervalDisparado = true;
    }
}

app.get('/', (req, res) => {
    const textoCronometro = atualizarTextoCronometro();
    res.send(`Tempo atual do cronômetro: ${textoCronometro}`);
});

app.get('/iniciar', (req, res) => {
    iniciarCronometro();
    res.send(`Cronômetro iniciado!`);
});

app.get('/pausar', (req, res) => {
    rodando = false;
    res.send(`Cronômetro foi pausado!`);
});

app.get('/continuar', (req, res) => {
    rodando = true;
    res.send(`Cronômetro continuando!`);
});

app.get('/zerar', (req, res) => {
    numero = 0;
    res.send(`Cronômetro zerado!`);
});

app.listen(8000);
