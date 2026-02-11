// Declaração da matriz de heróis com nome, quantidade de vitórias e derrotas, nivel e partidas.
const heroi = [
    ['Dio', 101, 0, 0, 0],
    ['Lanterna Verde', 9, 1, 0, 0],
    ['Flash', 11, 5, 0, 0],
    ['Homem-aranha', 21, 10, 0, 0],
    ['Homem de ferro', 51, 8, 0, 0],
    ['Mulher maravilha', 81, 5, 0, 0],
    ['Capitão america', 91, 50, 0, 0],
];

// Função para calcular o saldo de partidas ranqueadas.
function calcularPartidasRankeadas(quantidadeVitoria, quantidadeDerrota) {
    const saldoDeRankeadas = quantidadeVitoria - quantidadeDerrota;
    return saldoDeRankeadas;
}

//Função que recebe a quantidade de vitórias e retorne o nível do herói com base na tabela de níveis.
function defineNivel(vitorias){
    let nivel = ''; 
    switch (true) { 
        case (vitorias < 10):
            nivel = 'Ferro';
            break;
        case (vitorias >= 11 && vitorias <= 20):
            nivel = 'Bronze';
            break;
        case (vitorias >= 21 && vitorias <= 50):
            nivel = 'Prata';
            break;
        case (vitorias >= 51 && vitorias <= 80):
            nivel = 'Ouro';
            break;
        case (vitorias >= 81 && vitorias <= 90):
            nivel = 'Diamante';
            break;
        case (vitorias >= 91 && vitorias <= 100):
            nivel = 'Lendário';
            break;
        case (vitorias >= 101):
            nivel = 'Imortal';
            break;
    }
    return nivel;
}

//Preencher o nível e o saldo de partidas ranqueadas para cada herói.
function preencherNivelESaldo(heroi) {
    for (let i = 0; i < heroi.length; i++) {
        const vitorias = heroi[i][1];
        const derrotas = heroi[i][2];
        heroi[i][3] = defineNivel(vitorias);
        heroi[i][4] = calcularPartidasRankeadas(vitorias, derrotas);
    }
}

//Função que imprime o nome, o nível e o saldo de partidas ranqueadas do herói.
function imprimirHeroi(heroi) { 
    for (let i = 0; i < heroi.length; i++) {
        const nome = heroi[i][0];
        const nivel = heroi[i][3];
        const saldo = heroi[i][4];
        console.log(`O Herói de nome ${nome} tem de saldo de **${saldo}** está no nível de **${nivel}**`);
    }
}

//Executar as funções para preencher o nível e o saldo de partidas ranqueadas, e imprimir as informações dos heróis.
preencherNivelESaldo(heroi);
imprimirHeroi(heroi);