// script.js

// Mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo ao projeto: Diferença entre o Clima Urbano e Rural!");
};

// Dados sobre os climas
const clima = {
    urbano: {
        temperatura: "Mais alta",
        vegetacao: "Pouca",
        poluicao: "Alta",
        umidade: "Menor"
    },
    rural: {
        temperatura: "Mais amena",
        vegetacao: "Abundante",
        poluicao: "Baixa",
        umidade: "Maior"
    }
};

// Função para mostrar a comparação
function mostrarComparacao() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h3>Comparação entre os Climas</h3>

        <p><strong>🌆 Clima Urbano</strong></p>
        <ul>
            <li>Temperatura: ${clima.urbano.temperatura}</li>
            <li>Vegetação: ${clima.urbano.vegetacao}</li>
            <li>Poluição: ${clima.urbano.poluicao}</li>
            <li>Umidade: ${clima.urbano.umidade}</li>
        </ul>

        <p><strong>🌳 Clima Rural</strong></p>
        <ul>
            <li>Temperatura: ${clima.rural.temperatura}</li>
            <li>Vegetação: ${clima.rural.vegetacao}</li>
            <li>Poluição: ${clima.rural.poluicao}</li>
            <li>Umidade: ${clima.rural.umidade}</li>
        </ul>
    `;
}

// Evento do botão
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnComparar");

    if (botao) {
        botao.addEventListener("click", mostrarComparacao);
    }
});
