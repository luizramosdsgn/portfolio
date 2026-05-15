// ==========================================
// BANCO DE DADOS DE PROJETOS
// Adicione ou edite seus projetos aqui.
// Cada objeto vira um card E uma página.
// ==========================================

const meusProjetos = [
	{ // 2026 - Site - Gesteq
		id: "site-gesteq",
		categoria: "web-design",

		imagem: "./resources/assets/img/projects/gesteq/site-gesteq.webp",
		titulo: "Site Institucional — Gesteq",
		descricao:
			"Design e desenvolvimento de plataforma institucional focada em autoridade e captação de leads para consultoria empresarial.",
		tags: ["Web Design", "Site Institucional"],

		cliente: "Gesteq",
		ano: "2026",
		servicos: [
			"Web Design",
			"Site Institucional",
			"Desenvolvimento",
			"Responsividade",
			"Vanilla JS",
		],
		descricaoLonga: `Desenvolvido em parceria com a Audácia Mkt&Co, este projeto teve como objetivo posicionar a Gesteq — uma consultoria especializada em gestão — no ambiente digital com autoridade e clareza.<br><br> A interface foi projetada com um design minimalista e moderno, priorizando a experiência do usuário (UX) e a otimização para conversão (CRO). Desenvolvido com Vanilla JS, o site entrega altíssima performance, navegação fluida e total responsividade.<br><br> A estrutura da página foi desenhada para guiar o visitante de forma intuitiva, destacando os serviços da consultoria e facilitando o contato direto para o fechamento de novos negócios.`,
		galeria: [
			"./resources/assets/img/projects/gesteq/site-gesteq-desktop.webp",
			"./resources/assets/img/projects/gesteq/site-gesteq-mobile.webp",
		],
		linkExterno: "https://luizramosdsgn.github.io/site-gesteq/",
	},

	{ // 2026 - Social Media - Otimiza Projetos
		id: "sm-otimiza-projetos",
		categoria: "sm",

		imagem:
			"./resources/assets/img/projects/otimiza-projetos/sm-otimiza-projetos.webp",
		titulo: "Social Media — Otimiza Projetos",
		descricao:
			"Estratégia visual e design de conteúdo digital para consultoria especializada no setor farmacêutico.",
		tags: ["Social Media", "Design Editorial"],

		cliente: "Otimiza Projetos",
		ano: "2026",
		servicos: ["Social Media", "Design de Conteúdo", "Identidade Visual"],
		descricaoLonga: `Projeto de posicionamento digital executado durante minha atuação na Audácia Mkt&Co para a Otimiza Projetos, consultoria focada em gestão de farmácias.<br><br> Ao longo de quase um ano de acompanhamento (julho de 2025 a maio de 2026), o desafio foi traduzir a complexidade e a seriedade do setor farmacêutico em uma comunicação visual acessível, moderna e altamente engajadora.<br><br> O foco do design foi a humanização da marca e a criação de uma identidade forte nas redes sociais, utilizando layouts dinâmicos que destacam a autoridade da empresa e aproximam os consultores do seu público-alvo.`,
		galeria: [
      "./resources/assets/img/projects/otimiza-projetos/posts/01-10-2025.webp", // 1
      "./resources/assets/img/projects/otimiza-projetos/posts/02-03-2026.webp", // 2
      "./resources/assets/img/projects/otimiza-projetos/posts/03-03-2026.webp", // 3
      "./resources/assets/img/projects/otimiza-projetos/posts/03-04-2026.webp", // 4
      "./resources/assets/img/projects/otimiza-projetos/posts/04-03-2026.webp", // 5
      "./resources/assets/img/projects/otimiza-projetos/posts/05-01-2026.webp", // 6
      "./resources/assets/img/projects/otimiza-projetos/posts/05-11-2025.webp", // 7
      "./resources/assets/img/projects/otimiza-projetos/posts/05-12-2025.webp", // 8
      "./resources/assets/img/projects/otimiza-projetos/posts/06-02-2026.webp", // 9
      "./resources/assets/img/projects/otimiza-projetos/posts/07-01-2026.webp", // 10
      "./resources/assets/img/projects/otimiza-projetos/posts/08-03-2026.webp", // 11
      "./resources/assets/img/projects/otimiza-projetos/posts/08-04-2026.webp", // 12
      "./resources/assets/img/projects/otimiza-projetos/posts/08-10-2025.webp", // 13
      "./resources/assets/img/projects/otimiza-projetos/posts/08-12-2025.webp", // 14
      "./resources/assets/img/projects/otimiza-projetos/posts/09-01-2026.webp", // 15
      "./resources/assets/img/projects/otimiza-projetos/posts/09-02-2026.webp", // 16
      "./resources/assets/img/projects/otimiza-projetos/posts/10-04-2026.webp", // 17
      "./resources/assets/img/projects/otimiza-projetos/posts/10-11-2025.webp", // 18
      "./resources/assets/img/projects/otimiza-projetos/posts/10-12-2025.webp", // 19
      "./resources/assets/img/projects/otimiza-projetos/posts/12-01-2026.webp", // 20
      "./resources/assets/img/projects/otimiza-projetos/posts/12-11-2025.webp", // 21
      "./resources/assets/img/projects/otimiza-projetos/posts/12-12-2025.webp", // 22
      "./resources/assets/img/projects/otimiza-projetos/posts/13-02-2026.webp", // 23
      "./resources/assets/img/projects/otimiza-projetos/posts/13-10-2025.webp", // 24
      "./resources/assets/img/projects/otimiza-projetos/posts/14-01-2026.webp", // 25
      "./resources/assets/img/projects/otimiza-projetos/posts/14-11-2025.webp", // 26
      "./resources/assets/img/projects/otimiza-projetos/posts/15-04-2026.webp", // 27
      "./resources/assets/img/projects/otimiza-projetos/posts/15-10-2025.webp", // 28
      "./resources/assets/img/projects/otimiza-projetos/posts/15-12-2025.webp", // 29
      "./resources/assets/img/projects/otimiza-projetos/posts/16-02-2026.webp", // 30
      "./resources/assets/img/projects/otimiza-projetos/posts/17-04-2026.webp", // 31
      "./resources/assets/img/projects/otimiza-projetos/posts/17-10-2025.webp", // 32
      "./resources/assets/img/projects/otimiza-projetos/posts/17-11-2025.webp", // 33
      "./resources/assets/img/projects/otimiza-projetos/posts/17-12-2025.webp", // 34
      "./resources/assets/img/projects/otimiza-projetos/posts/19-01-2026.webp", // 35
      "./resources/assets/img/projects/otimiza-projetos/posts/19-02-2026.webp", // 36
      "./resources/assets/img/projects/otimiza-projetos/posts/19-11-2025.webp", // 37
      "./resources/assets/img/projects/otimiza-projetos/posts/19-12-2025.webp", // 38
      "./resources/assets/img/projects/otimiza-projetos/posts/20-10-2025.webp", // 39
      "./resources/assets/img/projects/otimiza-projetos/posts/21-01-2026.webp", // 40
      "./resources/assets/img/projects/otimiza-projetos/posts/21-11-2025.webp", // 41
      "./resources/assets/img/projects/otimiza-projetos/posts/23-02-2026.webp", // 42
      "./resources/assets/img/projects/otimiza-projetos/posts/24-11-2025.webp", // 43
      "./resources/assets/img/projects/otimiza-projetos/posts/25-02-2026.webp", // 44
      "./resources/assets/img/projects/otimiza-projetos/posts/25-12-2025.webp", // 45
      "./resources/assets/img/projects/otimiza-projetos/posts/26-01-2026.webp", // 46
      "./resources/assets/img/projects/otimiza-projetos/posts/28-01-2026.webp", // 47
      "./resources/assets/img/projects/otimiza-projetos/posts/29-10-2025.webp", // 48
      "./resources/assets/img/projects/otimiza-projetos/posts/29-10-2025 (2).webp", // 49
      "./resources/assets/img/projects/otimiza-projetos/posts/29-10-2025 (3).webp", // 50
      "./resources/assets/img/projects/otimiza-projetos/posts/30-01-2026.webp", // 51
      "./resources/assets/img/projects/otimiza-projetos/posts/31-12-2025.webp", // 52
		],
		linkExterno: "https://www.instagram.com/otimizaprojetos/",
	},

	{ // 2025 - Social Media - SPV Benefícios
		id: "sm-spv",
		categoria: "sm",

		imagem: "./resources/assets/img/projects/spv/sm-spv.webp",
		titulo: "Social Media — SPV Benefícios",
		descricao:
			"Identidade visual para redes sociais focada na atração, educação e engajamento de associados.",
		tags: ["Social Media", "Design Digital"],

		cliente: "SPV Benefícios",
		ano: "2025",
		servicos: ["Social Media", "Design Visual", "Criação de Conteúdo"],
		descricaoLonga: `Projeto de comunicação visual desenvolvido em parceria com a AEG Media para a SPV Benefícios, uma associação focada em proteção e vantagens exclusivas para seus membros.<br><br> Durante a execução da campanha, o objetivo foi criar uma linha editorial visualmente impactante que transmitisse confiança, segurança e proximidade. As artes foram estrategicamente pensadas para educar o público sobre as vantagens dos serviços e estimular o engajamento diário.<br><br> O resultado é um feed harmônico, moderno e com hierarquia de informações clara, focado na atração e conversão de novos associados.`,
		galeria: [
			"./resources/assets/img/projects/spv/posts/01-02-2025.webp", // 1
			"./resources/assets/img/projects/spv/posts/02-02-2025.webp", // 2
			"./resources/assets/img/projects/spv/posts/03-02-2025.webp", // 3
			"./resources/assets/img/projects/spv/posts/04-02-2025.webp", // 4
			"./resources/assets/img/projects/spv/posts/05-02-2025.webp", // 5
			"./resources/assets/img/projects/spv/posts/06-02-2025.webp", // 6
			"./resources/assets/img/projects/spv/posts/07-02-2025.webp", // 7
			"./resources/assets/img/projects/spv/posts/08-02-2025.webp", // 8
			"./resources/assets/img/projects/spv/posts/09-02-2025.webp", // 9
			"./resources/assets/img/projects/spv/posts/10-02-2025.webp", // 10
			"./resources/assets/img/projects/spv/posts/11-02-2025.webp", // 11
			"./resources/assets/img/projects/spv/posts/12-02-2025.webp", // 12
			"./resources/assets/img/projects/spv/posts/01-03-2025.webp", // 13
			"./resources/assets/img/projects/spv/posts/02-03-2025.webp", // 14
			"./resources/assets/img/projects/spv/posts/03-03-2025.webp", // 15
			"./resources/assets/img/projects/spv/posts/04-03-2025.webp", // 16
			"./resources/assets/img/projects/spv/posts/05-03-2025.webp", // 17
			"./resources/assets/img/projects/spv/posts/06-03-2025.webp", // 18
			"./resources/assets/img/projects/spv/posts/07-03-2025.webp", // 19
			"./resources/assets/img/projects/spv/posts/08-03-2025.webp", // 20
			"./resources/assets/img/projects/spv/posts/09-03-2025.webp", // 21
			"./resources/assets/img/projects/spv/posts/10-03-2025.webp", // 22
			"./resources/assets/img/projects/spv/posts/11-03-2025.webp", // 23
			"./resources/assets/img/projects/spv/posts/12-03-2025.webp", // 24
			"./resources/assets/img/projects/spv/posts/01-04-2025.webp", // 25
			"./resources/assets/img/projects/spv/posts/02-04-2025.webp", // 26
			"./resources/assets/img/projects/spv/posts/03-04-2025.webp", // 27
			"./resources/assets/img/projects/spv/posts/04-04-2025.webp", // 28
			"./resources/assets/img/projects/spv/posts/05-04-2025.webp", // 29
			"./resources/assets/img/projects/spv/posts/06-04-2025.webp", // 30
			"./resources/assets/img/projects/spv/posts/07-04-2025.webp", // 31
			"./resources/assets/img/projects/spv/posts/08-04-2025.webp", // 32
			"./resources/assets/img/projects/spv/posts/09-04-2025.webp", // 33
			"./resources/assets/img/projects/spv/posts/10-04-2025.webp", // 34
			"./resources/assets/img/projects/spv/posts/11-04-2025.webp", // 35
			"./resources/assets/img/projects/spv/posts/12-04-2025.webp", // 36
		],
		linkExterno: "https://www.instagram.com/spvbeneficios/",
	},

	{ // 2024 - Landing Page - Escudo Mais
		id: "lp-escudo-mais",
		categoria: "web-design",

		imagem: "./resources/assets/img/projects/escudo-mais/lp-escudo-mais.webp",
		titulo: "Landing Page — Escudo Mais",
		descricao:
			"Landing page de alta conversão projetada para impulsionar a captação de leads de um clube de vantagens.",
		tags: ["Web Design", "Landing Page", "UI/UX"],

		cliente: "Escudo Mais",
		ano: "2024",
		servicos: [
			"Web Design",
			"Landing Page",
			"WordPress",
			"Elementor",
			"Otimização (CRO)",
		],
		descricaoLonga: `Criada em colaboração com a AEG Media, esta Landing Page foi desenvolvida exclusivamente para maximizar a conversão de leads da Escudo Mais, um clube de benefícios em expansão.<br><br> O design foi estruturado com técnicas avançadas de interface (UI) e copywriting visual. Cada dobra da página foi desenhada para quebrar objeções e destacar o valor do serviço, utilizando WordPress e Elementor para garantir uma base de código sólida e de fácil manutenção.<br><br> Com navegação intuitiva, responsividade impecável e Call-to-Actions (CTAs) persuasivos, a página atua como uma verdadeira máquina de captação de associados 24 horas por dia.`,
		galeria: [
			"./resources/assets/img/projects/escudo-mais/lp-escudo-mais-desktop.webp",
			"./resources/assets/img/projects/escudo-mais/lp-escudo-mais-mobile.webp",
		],
		linkExterno: "https://luizramosdsgn.github.io/landing-page-escudo-mais/",
	},

	{ // 2024 - Landing Page - Ouro Car
		id: "lp-ouro-car",
		categoria: "web-design",

		imagem: "./resources/assets/img/projects/ouro-car/lp-ouro-car.webp",
		titulo: "Landing Page — Ouro Car",
		descricao:
			"Interface com foco agressivo em performance e conversão para associação de proteção veicular.",
		tags: ["Web Design", "Landing Page", "Conversão"],

		cliente: "Ouro Car",
		ano: "2024",
		servicos: ["Web Design", "Landing Page", "WordPress", "Elementor", "UI/UX"],
		descricaoLonga: `Projeto de página de vendas desenvolvido juntamente com a AEG Media para a Ouro Car, referência no setor de proteção veicular.<br><br> O objetivo central desta interface é transmitir credibilidade instantânea e converter tráfego pago em cotações reais. Aplicamos uma arquitetura de informação direta, unindo um visual arrojado a um carregamento otimizado para não perder nenhum clique.<br><br> A landing page oferece uma experiência 'mobile-first' fluida, garantindo que o usuário consiga entender as coberturas e solicitar sua cotação via WhatsApp com o mínimo de fricção possível.`,
		galeria: [
			"./resources/assets/img/projects/ouro-car/lp-ouro-car-desktop.webp",
			"./resources/assets/img/projects/ouro-car/lp-ouro-car-mobile.webp",
		],
		linkExterno: "https://luizramosdsgn.github.io/landing-page-ouro-car/",
	},
];

// ==========================================
// GERAÇÃO DOS CARDS (HTML)
// ==========================================
function gerarHTMLCards(projetos) {
	let htmlCards = "";

	projetos.forEach((projeto) => {
		let htmlTags = "";
		projeto.tags.forEach((tag) => {
			htmlTags += `<span>${tag}</span>`;
		});

		htmlCards += `
        <a class="card-projeto" data-category="${projeto.categoria}" href="./projeto.html?id=${projeto.id}">
            <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-bg" loading="lazy">
            <div class="projeto-overlay"></div>
            <div class="projeto-info">
                <div class="projeto-textos">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </div>
                <div class="projeto-tags">
                    ${htmlTags}
                </div>
            </div>
        </a>
    `;
	});

	return htmlCards;
}

const htmlCards = gerarHTMLCards(meusProjetos);

// Verifica se estamos na HOME (tem carrossel) e injeta
const trackCarrossel = document.getElementById("carrossel-track");
if (trackCarrossel) {
	trackCarrossel.innerHTML = htmlCards;
}

// Verifica se estamos no PORTFÓLIO (tem grade) e injeta
const gridPortfolio = document.getElementById("grid-projetos");
if (gridPortfolio) {
	gridPortfolio.innerHTML = htmlCards;
}
