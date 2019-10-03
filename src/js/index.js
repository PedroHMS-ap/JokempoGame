const computadorEscolha1 = document.querySelector('#computadorEscolha1');
const computadorEscolha2 = document.querySelector('#computadorEscolha2');
const computadorEscolha3 = document.querySelector('#computadorEscolha3');
const jogadorEscolha1 = document.querySelector('#jogadorEscolha1');
const jogadorEscolha2 = document.querySelector('#jogadorEscolha2');
const jogadorEscolha3 = document.querySelector('#jogadorEscolha3');
const mensagens = document.querySelector('#mensagens');
const jogadorPlacar = document.querySelector('#jogadorPlacar');
const computadorPlacar = document.querySelector('#computadorPlacar');
const jogadorNome = document.querySelector('#jogadorNome')

let jogadorPontuacao = 0;
let computadorPontuacao = 0;
let entrada = 0;

if (entrada <= 1) {
    do {
        nome = prompt("Qual o seu nome?");
    } while (nome == null || nome == "");
    jogadorNome.innerHTML = nome;
}

function jogar(jogadorEscolha) {
    const computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
    let ganhador = -1;

    // 1 - Papel
    // 2 - Pedra
    // 3 - Tesoura

    if (jogadorEscolha == 1 && computadorEscolha == 1) {
        ganhador = 0;
    } else if (jogadorEscolha == 1 && computadorEscolha == 2) {
        ganhador = 1;
        jogadorPontuacao++;
    } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
        ganhador = 2;
        computadorPontuacao++;
    }

    if (jogadorEscolha == 2 && computadorEscolha == 1) {
        ganhador = 2;
        computadorPontuacao++;
    } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
        ganhador = 0;
    } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
        ganhador = 1;
        jogadorPontuacao++;
    }

    if (jogadorEscolha == 3 && computadorEscolha == 1) {
        ganhador = 1;
        jogadorPontuacao++;
    } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
        ganhador = 2;
        computadorPontuacao++;
    } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
        ganhador = 0;
    }

    computadorEscolha1.classList.remove('selecionado');
    computadorEscolha2.classList.remove('selecionado');
    computadorEscolha3.classList.remove('selecionado');

    jogadorEscolha1.classList.remove('selecionado');
    jogadorEscolha2.classList.remove('selecionado');
    jogadorEscolha3.classList.remove('selecionado');

    document.getElementById("jogadorEscolha" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computadorEscolha" + computadorEscolha).classList.add('selecionado');

    if (ganhador == 0) {
        mensagens.innerHTML = 'Empate';
    } else if (ganhador == 1) {
        mensagens.innerHTML = 'Você ganhou';
    } else if (ganhador == 2) {
        mensagens.innerHTML = 'Máquina ganhou';
    }

    jogadorPlacar.innerHTML = jogadorPontuacao;
    computadorPlacar.innerHTML = computadorPontuacao;
}