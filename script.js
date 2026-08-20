const perguntas = [
    {
        pergunta: "Se um vídeo de uma pessoa famosa mostra ela piscando de forma estranha e com bordas desfocadas no rosto, pode ser uma Deepfake?",
        respostaCorreta: true,
        explicacao: "Correto! Inconsistências no piscar de olhos e falhas nas bordas do rosto são sinais comuns de manipulação por IA."
    },
    {
        pergunta: "Se uma notícia importante chegou em um grupo de mensagem sem link para a fonte original, devo repassar imediatamente?",
        respostaCorreta: false,
        explicacao: "Exato! Nunca compartilhe informações sem antes verificar a fonte primária em canais oficiais."
    },
    {
        pergunta: "Softwares de inteligência artificial conseguem clonar a voz de uma pessoa com apenas alguns segundos de áudio original?",
        respostaCorreta: true,
        explicacao: "Correto! Ferramentas atuais conseguem clonar vozes com pouquíssimas amostras, tornando os golpes por áudio mais comuns."
    }
];

let indiceAtual = 0;

function carregarPergunta() {
    const q = perguntas[indiceAtual];
    document.getElementById("pergunta").innerText = q.pergunta;
    document.getElementById("resultado").innerText = "";
    document.getElementById("btn-proximo").style.display = "none";
}

function responder(respostaUsuario) {
    const q = perguntas[indiceAtual];
    const resultadoElemento = document.getElementById("resultado");

    if (respostaUsuario === q.respostaCorreta) {
        resultadoElemento.innerText = "✅ Resposta Certa! " + q.explicacao;
        resultadoElemento.style.color = "green";
    } else {
        resultadoElemento.innerText = "❌ Resposta Incorreta. " + q.explicacao;
        resultadoElemento.style.color = "red";
    }

    document.getElementById("btn-proximo").style.display = "inline-block";
}

function proximaPergunta() {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h3>🎉 Parabéns! Você concluiu o desafio dos Guardiões Digitais!</h3>";
    }
}

// Inicializa a primeira pergunta ao carregar a página
carregarPergunta();
