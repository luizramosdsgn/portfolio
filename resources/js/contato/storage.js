const CONTATO_DRAFT_KEY = "contato_draft_data";

function saveContatoDraft() {
	const data = {
		inputs: {},
		checkboxes: {}
	};

	// 1. Salvar campos de texto comuns, telefone, email, select, textarea
	const fields = document.querySelectorAll(
		'#form-contato input:not([type="checkbox"]), #form-contato textarea, #form-contato select'
	);
	fields.forEach(field => {
		if (field.id) {
			data.inputs[field.id] = field.value;
		}
	});

	// 2. Salvar estado dos checkboxes (quais serviços foram selecionados)
	const checkboxes = document.querySelectorAll('#form-contato input[type="checkbox"]');
	checkboxes.forEach(chk => {
		if (chk.value) {
			data.checkboxes[chk.value] = chk.checked;
		}
	});

	localStorage.setItem(CONTATO_DRAFT_KEY, JSON.stringify(data));
}

function restoreContatoDraft() {
	const raw = localStorage.getItem(CONTATO_DRAFT_KEY);
	if (!raw) return;

	try {
		const data = JSON.parse(raw);

		// Restaurar campos textuais
		if (data.inputs) {
			Object.entries(data.inputs).forEach(([id, value]) => {
				const el = document.getElementById(id);
				if (el) {
					el.value = value;
				}
			});
		}

		// Restaurar checkboxes
		if (data.checkboxes) {
			const checkboxes = document.querySelectorAll('#form-contato input[type="checkbox"]');
			checkboxes.forEach(chk => {
				if (data.checkboxes[chk.value] !== undefined) {
					chk.checked = data.checkboxes[chk.value];
				}
			});
		}
	} catch (error) {
		console.warn("Erro ao ler dados em cache do formulário de contato:", error);
	}
}

// Configurar auto-save 
document.addEventListener("DOMContentLoaded", () => {
	const formContato = document.getElementById("form-contato");
	if (!formContato) return;

	restoreContatoDraft();

	// Dispara o saveDraft logo após o usuário preencher algo
	formContato.addEventListener("input", saveContatoDraft);
	formContato.addEventListener("change", saveContatoDraft);
});
