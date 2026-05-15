document.addEventListener("DOMContentLoaded", () => {
	// ==========================================
	// LÓGICA DO CARROSSEL
	// ==========================================
	const track = document.getElementById("carrossel-track");
	const btnPrev = document.querySelector(".nav-prev");
	const btnNext = document.querySelector(".nav-next");

	// Função para rolar o carrossel.
	// 424 = 400px do card + 24px do gap
	const scrollAmount = 424;

	btnNext.addEventListener("click", () => {
		track.scrollBy({ left: scrollAmount, behavior: "smooth" });
	});

	btnPrev.addEventListener("click", () => {
		track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
	});
});
