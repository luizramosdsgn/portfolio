const DRAFT_KEY = "briefing_draft_data";

function saveDraft() {
	const data = {
		inputs: {},
		chips: {}
	};

	// 1. Salvar inputs, textareas, selects e ranges
	const fields = document.querySelectorAll('input:not([type="file"]), textarea, select');
	fields.forEach(field => {
		if (field.id) {
			data.inputs[field.id] = field.value;
		}
	});

	// 2. Salvar os chips selecionados
	const selectedChips = document.querySelectorAll('.chip.selected');
	selectedChips.forEach(chip => {
		const group = chip.dataset.group;
		if (!data.chips[group]) {
			data.chips[group] = [];
		}
		data.chips[group].push(chip.textContent.trim());
	});

	localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
}

function restoreDraft() {
	const raw = localStorage.getItem(DRAFT_KEY);
	if (!raw) return;

	try {
		const data = JSON.parse(raw);

		// 1. Restaurar inputs normais
		if (data.inputs) {
			Object.entries(data.inputs).forEach(([id, value]) => {
				const el = document.getElementById(id);
				if (el) {
					el.value = value;
				}
			});
		}

		// 2. Restaurar chips selecionados
		if (data.chips) {
			document.querySelectorAll('.chip').forEach(chip => {
				const group = chip.dataset.group;
				const text = chip.textContent.trim();
				
				if (data.chips[group] && data.chips[group].includes(text)) {
					chip.classList.add('selected');
				}
			});
		}
	} catch (error) {
		console.warn("Erro ao ler dados em cache do briefing:", error);
	}
}

// Configurar os gatilhos e iniciar a restauração automática
document.addEventListener("DOMContentLoaded", () => {
	restoreDraft();

	// Sempre que houver uma digitação ou troca de valor, salva os inputs
	document.addEventListener("input", saveDraft);
	document.addEventListener("change", saveDraft);

	// Sempre que o usuário clicar num chip, esperar a troca visual de classe e depois salvar
	document.addEventListener("click", (e) => {
		if (e.target.closest(".chip")) {
			// Timeout super curto apenas para garantir que a classe 'selected' já foi aplicada/removida pelo inputs.js
			setTimeout(saveDraft, 50);
		}
	});
});
