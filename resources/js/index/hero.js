// ==========================================
// ANIMAÇÃO DOS BULLETS (SEÇÃO HERO)
// ==========================================
const bullets = document.querySelectorAll(".bullet");
let bulletAtual = 0;

// Guard: só executa se houver bullets na página
if (bullets.length > 0) {
	setInterval(() => {
		bullets[bulletAtual].classList.remove("ativo");
		bulletAtual = (bulletAtual + 1) % bullets.length;
		bullets[bulletAtual].classList.add("ativo");
	}, 2500);
}
