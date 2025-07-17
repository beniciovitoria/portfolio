const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".modal .close");

const overlayButtons = document.querySelectorAll(".projeto");

const conteudos = [
  `
    <h3>Escape Room Virtual</h3>
    <p>Desenvolvido com base no conceito do "escape 60", onde os participantes devem resolver desafios para avançar entre as salas, o jogo é composto por uma sequência de quatro ambientes virtuais. Para progredir de um ambiente para o outro, o usuário precisa responder a perguntas que validam seu conhecimento sobre o tema da integridade. Esses ambientes foram especialmente criados para o jogo e refletem o universo Klabin, com elementos personalizados. Além das perguntas, cada ambiente inclui elementos interativos adicionais, como pistas em alguns cenários, para reforçar o caráter lúdico da proposta.</p>
    <p>As etapas que foram realizadas pela equipe, incluem o planejamento, arquitetura da informação, criação do design gráfico e a implementação técnica.</p>
    <p>Lançado em 2023, o jogo foi reconhecido com o Prêmio Aberje na categoria Ética, Integridade e Compliance. Este prêmio, concedido pela Associação Brasileira de Comunicação Empresarial, destaca iniciativas que promovem práticas éticas e integridade nas organizações, valorizando projetos que contribuem significativamente para a cultura de compliance e transparência.</p>
  `,
  `
    <h3>123 anos da Klabin</h3>
    <p><em>“O futuro tem as cores da nossa história”</em> foi o tema escolhido para a campanha comemorativa dos 123 anos da Klabin. Para marcar esta celebração, convidamos a artista Marina Amaral para selecionar fotos históricas do acervo da empresa e aplicar sua técnica de colorização digital para resgatar a rica história da Klabin.</p>
    <p>Marina Amaral é uma especialista em adicionar cor manualmente a fotografias em preto e branco, "dando vida ao passado". Seu trabalho recebeu destaque em veículos renomados, como BBC, New York Times, London Evening Standard, Washington Post e National Geographic Magazine.</p>
    <p>Essa parceria foi uma experiência incrível, tornando o projeto não apenas produtivo, mas também muito divertido e criativo. Como resultado, muitos momentos históricos da trajetória centenária ganharam vida, refletindo os pilares de inovação, ética e compromisso que definem a história da Klabin.</p>
    <p>Diversas peças foram criadas com base no conceito visual (KV) proposto para a campanha, e divulgadas nos canais sociais e de comunicação da empresa. No site, foi desenvolvido um banner interativo, onde os usuários podiam movimentar uma barrinha para visualizar a transformação.</p>
  `,
  `
    <h3>Blog Klabin</h3>
    <p>Pensado para ser um portal independente do site institucional, o Blog Klabin ganhou mais liberdade visual e espaço para funcionalidades interativas. Entre os recursos implementados, estão a exibição de posts mais populares, produtos relacionados, notícias filtradas por tags e muito mais. Tudo pensado para oferecer uma experiência de navegação funcional, atrativa e responsiva. Também foram incluídas opções de interação, como curtir e compartilhar conteúdos para engajar os usuários.</p>
    <p>Além disso, para garantir que o Blog Klabin tivesse grande potencial de alcance e visibilidade orgânica, contamos com o suporte de uma equipe especializada em SEO, para seguirmos as melhores práticas e estratégias para maximizar o desempenho nas buscas, aumentando a captação de novos públicos e o engajamento com os conteúdos.</p>
    <p>O blog reforça o papel de liderança em sustentabilidade e inovação da Klabin, fortalecendo sua comunicação com diferentes públicos por meio de uma plataforma relevante, acessível e informativa.</p>
  `
];

// Abre o modal
overlayButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalText.innerHTML = conteudos[index];
    modal.classList.add("show");
  });
});

// Fecha com o X
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Fecha clicando fora
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Fecha com Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});

//////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    // Cria o elemento tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = 'Clique para ver mais';
    document.body.appendChild(tooltip);

    // Seleciona todos os elementos com a classe .projeto
    const projetos = document.querySelectorAll('.projeto');

    projetos.forEach(projeto => {
        // Quando o mouse entra no elemento .projeto
        projeto.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });

        // Quando o mouse se move dentro do elemento .projeto
        projeto.addEventListener('mousemove', e => {
            tooltip.style.top = `${e.clientY + 20}px`;
            tooltip.style.left = `${e.clientX + 20}px`;
        });

        // Quando o mouse sai do elemento .projeto
        projeto.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    });
});
