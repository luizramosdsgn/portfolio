document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);

	// ==========================================
	// ANIMAÇÕES DA SEÇÃO HERO
	// ==========================================
	const tlHero = gsap.timeline();

	tlHero
		.from(".cabecalho", {
			y: -50,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		})
		.from(
			".hero-text-side > *",
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: "power3.out",
			},
			"-=0.4",
		)
		.from(
			".hero-foto",
			{
				x: 30,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			},
			"-=0.6",
		)
		.from(
			".bullet",
			{
				scale: 0,
				opacity: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: "back.out(1.7)",
				clearProps: "all", // <-- ADICIONE ESTA LINHA AQUI!
			},
			"-=0.5",
		);

	// ==========================================
	// ANIMAÇÕES DE SCROLL (DEMAIS SEÇÕES)
	// ==========================================

	// Seção Serviços
	gsap.from(".servicos-header", {
		scrollTrigger: {
			trigger: ".servicos",
			start: "top 80%",
		},
		y: 30,
		opacity: 0,
		duration: 0.8,
		ease: "power3.out",
	});

	gsap.from(".card-servico", {
		scrollTrigger: {
			trigger: ".servicos-cards",
			start: "top 85%",
		},
		y: 50,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
		ease: "power3.out",
		clearProps: "all", // Remove as injeções de estilo do GSAP após animar
	});

	// Seção Últimos Trabalhos
	gsap.from(".trabalhos-header > *, .trabalhos-filtros", {
		scrollTrigger: {
			trigger: ".ultimos-trabalhos",
			start: "top 80%",
		},
		y: 30,
		opacity: 0,
		duration: 0.8,
		stagger: 0.15,
		ease: "power3.out",
	});

	gsap.from(".card-projeto", {
		scrollTrigger: {
			trigger: ".carrossel-track",
			start: "top 85%",
		},
		x: 50,
		opacity: 0,
		duration: 0.8,
		stagger: 0.15,
		ease: "power3.out",
		clearProps: "all", // Previne bugs no carrossel nativo
	});

	// Seção Processo (Metodologia)
	gsap.from(".processo-left > *", {
		scrollTrigger: {
			trigger: ".processo",
			start: "top 80%",
		},
		y: 30,
		opacity: 0,
		duration: 0.8,
		stagger: 0.15,
		ease: "power3.out",
	});

	gsap.from(".processo-right", {
		scrollTrigger: {
			trigger: ".processo",
			start: "top 80%",
		},
		opacity: 0,
		x: 30,
		duration: 1,
		ease: "power3.out",
		delay: 0.2,
	});

	// Seção CTA
	gsap.from(".cta-container > *", {
		scrollTrigger: {
			trigger: ".cta-final",
			start: "top 85%",
		},
		y: 30,
		opacity: 0,
		duration: 0.8,
		stagger: 0.15,
		ease: "power3.out",
	});
});
