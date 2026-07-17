// 1. Variáveis: Criando uma lista (array) de heróis com diferentes XPs para testar
let listaDeHerois = [
    { nome: "Garen", xp: 850 },     // Vai ser Ferro
    { nome: "Lux", xp: 1500 },      // Vai ser Bronze
    { nome: "Jinx", xp: 4500 },     // Vai ser Prata
    { nome: "Yasuo", xp: 6500 },    // Vai ser Ouro
    { nome: "Ahri", xp: 7500 },     // Vai ser Platina Diamante
    { nome: "Zed", xp: 8500 },      // Vai ser Ascendente
    { nome: "Viper", xp: 9500 },    // Vai ser Imortal
    { nome: "Omen", xp: 12000 }     // Vai ser Radiante
];

// 2. Laços de repetição: O 'for' vai percorrer a lista inteira de heróis
for (let i = 0; i < listaDeHerois.length; i++) {
    
    // Pegando o nome e o XP do herói atual da rodada do laço
    let nomeDoHeroi = listaDeHerois[i].nome;
    let xpDoHeroi = listaDeHerois[i].xp;
    let nivel = "";

    // 3 e 4. Estruturas de decisões e Operadores (>=, <=, &&)
    if (xpDoHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 6000) {
        nivel = "Prata";
    } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        nivel = "Platina Diamante";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        nivel = "Imortal";
    } else if (xpDoHeroi >= 10001) {
        nivel = "Radiante";
    }

    // Saída exigida pelo desafio impressa no terminal
    console.log(`O Herói de nome **${nomeDoHeroi}** está no nível de **${nivel}**`);
}