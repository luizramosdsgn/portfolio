document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);

	const tlPortfolio = gsap.timeline();

	// 1. Anima o Header descendo
	tlPortfolio
		.from(".cabecalho", {
			y: -50,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		})
		// 2. Anima os Títulos da Página
		.from(
			".header-pagina > *",
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: "power3.out",
			},
			"-=0.4",
		)
		// 3. Anima os Botões de Filtro
		.from(
			".btn-filtro",
			{
				y: 20,
				opacity: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: "power3.out",
				clearProps: "all",
			},
			"-=0.4",
		)
		// 4. Anima os Cards da Grade surgindo de baixo para cima
		.from(
			".portfolio-grid .card-projeto",
			{
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15, // Efeito cascata lindo na grade
				ease: "power3.out",
				clearProps: "all", // Remove o CSS do GSAP após animar para não bugar os filtros
			},
			"-=0.2",
		);

	// Animação de Scroll para o Footer
	gsap.from(".rodape", {
		scrollTrigger: {
			trigger: ".rodape",
			start: "top 90%",
		},
		y: 30,
		opacity: 0,
		duration: 0.8,
		ease: "power3.out",
	});
});
