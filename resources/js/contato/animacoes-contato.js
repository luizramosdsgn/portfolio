document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);

	const tlContato = gsap.timeline();

	// 1. Anima o Header
	tlContato
		.from(".cabecalho", {
			y: -50,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		})
		// 2. Anima os Títulos da Página
		.from(
			".contato-header > *",
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: "power3.out",
			},
			"-=0.4",
		)
		// 3. Anima a caixa principal do formulário (o vidro fosco)
		.from(
			".form-wrapper",
			{
				y: 40,
				opacity: 0,
				duration: 0.8,
				ease: "power3.out",
			},
			"-=0.4",
		)
		// 4. Anima os campos aparecendo em cascata
		.from(
			".form-group, .form-submit",
			{
				y: 20,
				opacity: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: "power3.out",
				clearProps: "all", // Importante para não bugar o :focus (clique) do CSS!
			},
			"-=0.4",
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
