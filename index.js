// Segundo Desafio 

// 1. Variáveis: Criando uma lista de objetos para simular vários jogadores
let listaDeJogadores = [
    { vitorias: 8, derrotas: 2 },     // Saldo: 6 (Ferro)
    { vitorias: 25, derrotas: 10 },   // Saldo: 15 (Bronze)
    { vitorias: 60, derrotas: 15 },   // Saldo: 45 (Prata)
    { vitorias: 80, derrotas: 10 },   // Saldo: 70 (Ouro)
    { vitorias: 100, derrotas: 15 },  // Saldo: 85 (Diamante)
    { vitorias: 110, derrotas: 15 },  // Saldo: 95 (Lendário)
    { vitorias: 130, derrotas: 10 }   // Saldo: 120 (Imortal)
];

// 2. Funções e 3. Operadores: Função para calcular o saldo e classificar
function classificarJogador(vitorias, derrotas) {
    // Calculando o saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 4. Estruturas de decisões: Verificando em qual nível o saldo se encaixa
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    // Retornando a mensagem final formatada
    return `O Herói tem de saldo **${saldoVitorias}** está no nível de **${nivel}**`;
}

// 5. Laços de repetição: Passando por cada jogador da lista e executando a função
for (let i = 0; i < listaDeJogadores.length; i++) {
    // Pegando as vitórias e derrotas do jogador atual
    let vitoriasDoJogador = listaDeJogadores[i].vitorias;
    let derrotasDoJogador = listaDeJogadores[i].derrotas;
    
    // Chamando a função e guardando o resultado numa variável
    let resultadoFinal = classificarJogador(vitoriasDoJogador, derrotasDoJogador);
    
    // Exibindo no terminal
    console.log(resultadoFinal);
}