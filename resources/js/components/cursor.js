document.addEventListener("DOMContentLoaded", () => {
	// Inicializa o cursor apenas para telas desktop
	if (window.innerWidth <= 1024) return;

	const cursorDot = document.querySelector("[data-cursor-dot]");
	const cursorOutline = document.querySelector("[data-cursor-outline]");

	if (!cursorDot || !cursorOutline) return;

	// Configurando centralização usando GSAP
	gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });
	gsap.set(cursorOutline, { xPercent: -50, yPercent: -50 });

	window.addEventListener("mousemove", (e) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		// O dot central segue o mouse instantaneamente
		gsap.set(cursorDot, {
			x: mouseX,
			y: mouseY,
		});

		// O outline (círculo maior) segue com atraso suave (trail)
		gsap.to(cursorOutline, {
			x: mouseX,
			y: mouseY,
			duration: 0.5,
			ease: "power3.out",
		});
	});

	// Event delegation: detecta hover em elementos interativos,
	// incluindo os injetados dinamicamente (cards de projeto, etc.)
	const interactiveSelectors =
		"a, button, input, textarea, select, .elementor-button, .btn, .btn-filtro, .btn-tab, .btn-seta, .card-servico, .card-processo, .card-projeto, .chip, .step-tab, .upload-area, .color-swatch, .scale-btn, .file-doc-remove";

	document.addEventListener("mouseover", (e) => {
		if (e.target.closest(interactiveSelectors)) {
			cursorOutline.classList.add("hover-actived");
		}
	});

	document.addEventListener("mouseout", (e) => {
		if (e.target.closest(interactiveSelectors)) {
			cursorOutline.classList.remove("hover-actived");
		}
	});
});
