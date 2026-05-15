document.addEventListener("DOMContentLoaded", () => {
	// Seleciona todos os botões de aba e todos os conteúdos de aba
	const tabButtons = document.querySelectorAll(".btn-tab");
	const tabContents = document.querySelectorAll(".tab-content");

	tabButtons.forEach((button) => {
		button.addEventListener("click", () => {
			// 1. Remove a classe 'ativo' de todos os botões
			tabButtons.forEach((btn) => btn.classList.remove("ativo"));
			// 2. Adiciona a classe 'ativo' no botão clicado
			button.classList.add("ativo");

			// 3. Pega o ID do conteúdo que deve aparecer (ex: 'tab-metodologia')
			const targetId = button.getAttribute("data-target");

			// 4. Esconde todos os conteúdos
			tabContents.forEach((content) => {
				content.classList.remove("ativo");
			});

			// 5. Mostra apenas o conteúdo correspondente
			document.getElementById(targetId).classList.add("ativo");
		});
	});
});

// ==========================================
// ANIMAÇÃO DOS CARDS
// ==========================================
const cards = document.querySelectorAll(".card-processo");
let cardAtual = 0;

if (cards.length > 0) {
	setInterval(() => {
		cards[cardAtual].classList.remove("ativo");
		cardAtual = (cardAtual + 1) % cards.length;
		cards[cardAtual].classList.add("ativo");
	}, 2500);
}
