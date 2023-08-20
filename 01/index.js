//Sistema de correção de provas
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva (prova) {
    let corretas = 0;
    for (let item of prova.questoes){
        if (item.resposta === item.correta){
            corretas += 1;
        };
    };
    let nota = corretas * 2;
    console.log (`O(a) aluno(a) ${prova.aluno} acertou ${corretas} questões e obteve nota ${nota}.`);
};

corrigirProva (prova);