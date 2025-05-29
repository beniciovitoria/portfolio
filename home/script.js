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
    <p>Para atender à necessidade da Klabin de compartilhar conteúdos relevantes com seus públicos, desenvolvemos o Blog Klabin, um portal dedicado que foi lançado em junho de 2023. O blog reúne e organiza temas fundamentais para a empresa, como “Sustentabilidade”, “Indústria e Tecnologia”, “Negócios e Produtos” e “E-commerce”. A Klabin, com seus 125 anos de história, é uma referência mundial em desenvolvimento sustentável, além de ser a maior produtora e exportadora de papéis para embalagens no Brasil.</p>
    <p>Com o objetivo de ampliar a presença digital da Klabin e alcançar novos públicos, o blog foi criado como uma plataforma independente do site principal, permitindo um foco maior em conteúdos informativos e de valor. O layout do Blog Klabin foi projetado com atenção especial à otimização para SEO, garantindo que os conteúdos sejam facilmente encontrados e acessados. Entre as funcionalidades, destacam-se a exibição de posts mais populares, produtos relacionados, e-books para download, e notícias filtradas por tags, tudo projetado para proporcionar uma navegação intuitiva e interativa, especialmente em dispositivos móveis.</p>
    <p>Além de funcionar como um repositório de informações atualizadas e relevantes, o Blog Klabin proporciona uma experiência de navegação atraente e funcional, com recursos que facilitam o compartilhamento e a interação com os conteúdos, como a opção de curtir postagens. Os artigos e materiais disponíveis são claros, bem explicados e têm um forte caráter informativo, refletindo o compromisso da Klabin em fornecer conteúdos de educação ambiental, social e econômica. Com essa plataforma, a Klabin não apenas amplia sua presença digital, mas também reafirma seu papel como líder em sustentabilidade e inovação no mercado global.</p>
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

/////////////////////////////////////////////
