document.addEventListener("DOMContentLoaded", () => {
    // Função para animar o contador de pontos (Até os 20 pontos descritos na imagem)
    const animarContador = () => {
        const elementoPontos = document.getElementById("contador-pontos");
        const objetivoPontos = 20;
        let pontoAtual = 0;

        const intervalo = setInterval(() => {
            if (pontoAtual < objetivoPontos) {
                pontoAtual++;
                elementoPontos.innerText = pontoAtual;
            } else {
                clearInterval(intervalo);
            }
        }, 50); // Velocidade da animação em milissegundos
    };

    // Executa a animação do contador ao carregar a página
    animarContador();

    // Evento interativo no botão de validação
    const botaoInteragir = document.getElementById("btn-Interagir");
    botaoInteragir.addEventListener("click", () => {
        alert("🚀 Projeto validado com sucesso! Código limpo, otimizado e pronto para o 1º Lugar no Agrinho 2026!");
    });
});
