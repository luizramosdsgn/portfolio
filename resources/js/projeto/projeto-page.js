// ==========================================
// PÁGINA DE PROJETO — LÓGICA
// Lê o ?id= da URL, encontra no banco e
// renderiza todo o conteúdo da página.
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
	// 1. Lê o ID da URL: projeto.html?id=projeto-1
	const params = new URLSearchParams(window.location.search);
	const projetoId = params.get("id");

	const mainEl = document.querySelector(".pagina-projeto");

	// 2. Procura o projeto no banco
	const indice = meusProjetos.findIndex((p) => p.id === projetoId);
	const projeto = meusProjetos[indice];

	// 3. Se não encontrar, exibe mensagem de erro
	if (!projeto) {
		mainEl.innerHTML = `
			<div class="container">
				<div class="projeto-erro">
					<h1>Projeto não encontrado</h1>
					<p>O projeto que procura não existe ou foi removido.</p>
					<a href="./portfolio.html" class="btn-secundario btn" style="margin-top: 24px;">
						← Ver todos os projetos
					</a>
				</div>
			</div>
		`;
		return;
	}

	// 4. Atualiza o título da aba
	document.title = `${projeto.titulo} | Luiz Ramos`;

	// 5. Monta os HTMLs das seções
	const htmlTags = projeto.tags.map((t) => `<span>${t}</span>`).join("");
	const htmlServicos = projeto.servicos
		.map((s) => `<span>${s}</span>`)
		.join("");

	const htmlGaleria = projeto.galeria
		.map(
			(src, i) =>
				`<img src="${src}" alt="${projeto.titulo} — imagem ${i + 1}" loading="lazy" data-lightbox>`
		)
		.join("");

	const htmlLinkExterno = projeto.linkExterno
		? `<a href="${projeto.linkExterno}" target="_blank" class="projeto-link-externo">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
				Ver projeto ao vivo
			</a>`
		: "";

	// 6. Navegação: projeto anterior e próximo
	const projetoAnterior = indice > 0 ? meusProjetos[indice - 1] : null;
	const projetoProximo =
		indice < meusProjetos.length - 1 ? meusProjetos[indice + 1] : null;

	const htmlBtnAnterior = projetoAnterior
		? `<a href="./projeto.html?id=${projetoAnterior.id}" class="nav-projeto-btn anterior">
				<label>← Projeto anterior</label>
				<strong>${projetoAnterior.titulo}</strong>
			</a>`
		: `<div></div>`; // Placeholder para manter o grid

	const htmlBtnProximo = projetoProximo
		? `<a href="./projeto.html?id=${projetoProximo.id}" class="nav-projeto-btn proximo">
				<label>Próximo projeto →</label>
				<strong>${projetoProximo.titulo}</strong>
			</a>`
		: `<div></div>`;

	// 7. Monta o HTML completo da página e injeta
	mainEl.innerHTML = `
		<!-- HERO -->
		<section class="projeto-hero">
			<img
				src="${projeto.imagem}"
				alt="${projeto.titulo}"
				class="projeto-hero-img"
				id="hero-img-projeto"
			/>
			<div class="projeto-hero-overlay"></div>
			<div class="projeto-hero-conteudo">
				<div class="container">
					<div class="projeto-hero-tags">${htmlTags}</div>
					<h1>${projeto.titulo}</h1>
					<div class="projeto-hero-meta">
						<span>${projeto.cliente}</span>
						<div class="separador"></div>
						<span>${projeto.ano}</span>
					</div>
				</div>
			</div>
		</section>

		<!-- BOTÃO VOLTAR -->
		<div class="container">
			<a href="./portfolio.html" class="btn-voltar">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
				Voltar ao portfólio
			</a>
		</div>

		<!-- SOBRE O PROJETO -->
		<section class="projeto-sobre" id="projeto-sobre">
			<div class="container">
				<div class="projeto-sobre-grid">
					<!-- Descrição longa -->
					<div class="projeto-descricao" id="projeto-descricao">
						<h2>Sobre o projeto</h2>
						<p>${projeto.descricaoLonga}</p>
						${htmlLinkExterno}
					</div>

					<!-- Ficha técnica -->
					<aside class="projeto-ficha" id="projeto-ficha">
						<div class="ficha-item">
							<label>Cliente</label>
							<span>${projeto.cliente}</span>
						</div>
						<div class="ficha-divisor"></div>
						<div class="ficha-item">
							<label>Ano</label>
							<span>${projeto.ano}</span>
						</div>
						<div class="ficha-divisor"></div>
						<div class="ficha-item">
							<label>Serviços</label>
							<div class="ficha-servicos">${htmlServicos}</div>
						</div>
					</aside>
				</div>
			</div>
		</section>

		<!-- GALERIA -->
		<section class="projeto-galeria" id="projeto-galeria">
			<div class="container">
				<h2>Imagens do projeto</h2>
				<div class="galeria-grid" id="galeria-grid">
					${htmlGaleria}
				</div>
			</div>
		</section>

		<!-- NAVEGAÇÃO ENTRE PROJETOS -->
		<div class="projeto-navegacao">
			<div class="container">
				${htmlBtnAnterior}
				${htmlBtnProximo}
			</div>
		</div>
	`;

	// 8. Animação do hero-img após o carregamento
	const heroImg = document.getElementById("hero-img-projeto");
	if (heroImg) {
		if (heroImg.complete) {
			heroImg.classList.add("carregada");
		} else {
			heroImg.addEventListener("load", () =>
				heroImg.classList.add("carregada")
			);
		}
	}

	// 9. GSAP — Animações de entrada (se GSAP estiver disponível)
	if (typeof gsap !== "undefined") {
		const tl = gsap.timeline();

		tl.from(".projeto-hero-tags", {
			y: 20,
			opacity: 0,
			duration: 0.6,
			ease: "power3.out",
			delay: 0.3,
		})
			.from(
				".projeto-hero-conteudo h1",
				{ y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
				"-=0.3"
			)
			.from(
				".projeto-hero-meta",
				{ y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
				"-=0.4"
			)
			.from(
				".btn-voltar",
				{ y: 15, opacity: 0, duration: 0.5, ease: "power3.out" },
				"-=0.2"
			)
			.from(
				"#projeto-descricao",
				{ y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
				"-=0.2"
			)
			.from(
				"#projeto-ficha",
				{ y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
				"-=0.6"
			);

		// Galeria com ScrollTrigger
		gsap.registerPlugin(ScrollTrigger);

		gsap.from("#galeria-grid img", {
			scrollTrigger: {
				trigger: "#projeto-galeria",
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.7,
			stagger: 0.12,
			ease: "power3.out",
		});

		gsap.from(".nav-projeto-btn", {
			scrollTrigger: {
				trigger: ".projeto-navegacao",
				start: "top 90%",
			},
			y: 30,
			opacity: 0,
			duration: 0.6,
			stagger: 0.15,
			ease: "power3.out",
		});
	}

	// 10. Lightbox nas imagens da galeria
	iniciarLightbox();
});

// ==========================================
// LIGHTBOX
// ==========================================
function iniciarLightbox() {
	// Cria o overlay do lightbox (se ainda não existir)
	let lightbox = document.getElementById("lightbox-overlay");
	if (!lightbox) {
		lightbox = document.createElement("div");
		lightbox.id = "lightbox-overlay";
		lightbox.className = "lightbox-overlay";
		lightbox.innerHTML = `
			<button class="lightbox-fechar" id="lightbox-fechar" aria-label="Fechar imagem">✕</button>
			<img id="lightbox-img" src="" alt="Imagem ampliada" />
		`;
		document.body.appendChild(lightbox);
	}

	const lightboxImg = document.getElementById("lightbox-img");
	const btnFechar = document.getElementById("lightbox-fechar");

	function abrirLightbox(src, alt) {
		lightboxImg.src = src;
		lightboxImg.alt = alt;
		lightbox.classList.add("ativo");
		document.body.style.overflow = "hidden";
	}

	function fecharLightbox() {
		lightbox.classList.remove("ativo");
		document.body.style.overflow = "";
		// Limpa src após a transição para não mostrar imagem antiga
		setTimeout(() => (lightboxImg.src = ""), 300);
	}

	// Delegação de eventos: funciona mesmo com imagens injetadas depois
	document.getElementById("galeria-grid")?.addEventListener("click", (e) => {
		const img = e.target.closest("[data-lightbox]");
		if (img) abrirLightbox(img.src, img.alt);
	});

	btnFechar.addEventListener("click", fecharLightbox);

	// Fechar clicando fora da imagem
	lightbox.addEventListener("click", (e) => {
		if (e.target === lightbox) fecharLightbox();
	});

	// Fechar com ESC
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") fecharLightbox();
	});
}
