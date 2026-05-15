// ==========================================
// LÓGICA DOS FILTROS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
	const botoesFiltro = document.querySelectorAll(".btn-filtro");

	botoesFiltro.forEach((botao) => {
		botao.addEventListener("click", () => {
			// 1. Remove a classe 'ativo' de todos os botões e põe no clicado
			botoesFiltro.forEach((btn) => btn.classList.remove("ativo"));
			botao.classList.add("ativo");

			// 2. Pega a categoria do botão clicado
			const filtro = botao.getAttribute("data-filter");

			// 3. Busca os cards no momento do clique (já foram injetados pelo banco-projetos.js)
			const cardsProjeto = document.querySelectorAll(".card-projeto");

			cardsProjeto.forEach((card) => {
				const categoriaCard = card.getAttribute("data-category");

				if (filtro === "todos" || filtro === categoriaCard) {
					card.classList.remove("oculto");

					// Animação suave via GSAP ao filtrar (só se disponível)
					if (typeof gsap !== "undefined") {
						gsap.fromTo(
							card,
							{ opacity: 0, scale: 0.95 },
							{ opacity: 1, scale: 1, duration: 0.4 },
						);
					}
				} else {
					card.classList.add("oculto");
				}
			});
		});
	});
});
