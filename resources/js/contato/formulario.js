// Somente números + formatação
const inputWhatsapp = document.getElementById("whatsapp");

if (inputWhatsapp) {
	inputWhatsapp.addEventListener("input", () => {
		let value = inputWhatsapp.value.replace(/\D/g, "");
		if (value.length >= 2) {
			value = value.replace(/^(\d{2})(\d)/, "($1) $2");
		}
		if (value.length >= 7) {
			value = value.replace(/(\d{5})(\d)/, "$1-$2");
		}
		inputWhatsapp.value = value;
	});
}



const formContato = document.getElementById("form-contato");

if (formContato) {
	formContato.addEventListener("submit", async (e) => {
		e.preventDefault();

		const btnSubmit = formContato.querySelector(".btn-submit");
		const textoOriginal = btnSubmit.innerHTML;

		// Previne duplo envio
		if (btnSubmit.disabled) return;
		btnSubmit.disabled = true;
		btnSubmit.innerHTML = "Enviando...";
		btnSubmit.style.opacity = "0.7";

		// Coleta todos os dados digitados
		const formData = new FormData(formContato);
		const dados = {};
		for (let [key, value] of formData.entries()) {
			if (dados[key]) {
				if (!Array.isArray(dados[key])) {
					dados[key] = [dados[key]];
				}
				dados[key].push(value);
			} else {
				dados[key] = value;
			}
		}

		try {
			// A URL do webhook é injetada via GitHub Actions (não commitada no repositório)
			// Em desenvolvimento local, crie o arquivo resources/js/contato/config.js com a URL
			const webhookMake = window.APP_CONFIG?.webhookMake || "";

			await fetch(webhookMake, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dados),
			});

			// Sucesso! — redireciona para a página de obrigado
			localStorage.removeItem("contato_draft_data");
			formContato.reset();
			window.location.href = "./obrigado.html?origem=contato";
		} catch (error) {
			alert("Puxa, ocorreu um erro ao enviar. Tente me chamar no WhatsApp!");
			btnSubmit.innerHTML = textoOriginal;
			btnSubmit.style.opacity = "1";
			btnSubmit.disabled = false;
		}
	});
}
