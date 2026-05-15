let currentStep = 0;
const totalSteps = 7;

function goTo(step) {
	const tabs = document.querySelectorAll(".step-tab");

	// Remove o estado ativo da etapa atual
	document.getElementById("step-" + currentStep).classList.remove("active");
	tabs[currentStep].classList.remove("active");

	// Marca como "done" somente ao avançar; ao voltar, remove o "done"
	if (step > currentStep) {
		tabs[currentStep].classList.add("done");
	} else {
		tabs[currentStep].classList.remove("done");
	}

	currentStep = step;
	document.getElementById("step-" + currentStep).classList.add("active");

	tabs.forEach((t, i) => {
		if (i === step) {
			t.classList.add("active");
			t.classList.remove("done");
		}
	});

	document.getElementById("header-progress").textContent =
		"Etapa " + (step + 1) + " de " + totalSteps;
	window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
	// Clicks nas abas do cabeçalho
	document.querySelectorAll(".step-tab").forEach((tab, i) => {
		tab.addEventListener("click", () => {
			goTo(i);
			if (i === 6 && typeof buildSummary === "function") buildSummary();
		});
	});

	// Clicks nos botões Próximo / Anterior via data-goto
	document.addEventListener("click", (e) => {
		const btn = e.target.closest("[data-goto]");
		if (!btn) return;
		const step = parseInt(btn.dataset.goto, 10);
		goTo(step);
		if (btn.hasAttribute("data-build-summary") && typeof buildSummary === "function") {
			buildSummary();
		}
	});
});
