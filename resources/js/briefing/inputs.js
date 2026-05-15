document.querySelectorAll(".chip").forEach((chip) => {
	chip.addEventListener("click", () => {
		const group = chip.dataset.group;
		const isMulti = chip.hasAttribute("data-multi");
		if (!isMulti) {
			document
				.querySelectorAll('.chip[data-group="' + group + '"]')
				.forEach((c) => c.classList.remove("selected"));
		}
		chip.classList.toggle("selected");
	});
});

function getChips(group) {
	return Array.from(
		document.querySelectorAll('.chip[data-group="' + group + '"].selected')
	)
		.map((c) => c.textContent.trim())
		.join(", ");
}

const polarLabels = {
	"polar-trad": ["Tradicional", "Inovadora"],
	"polar-seria": ["Séria", "Divertida"],
	"polar-preco": ["Acessível", "Premium"],
	"polar-visual": ["Minimalista", "Expressiva"],
	"polar-escala": ["Local/regional", "Global"],
	"polar-emocao": ["Racional", "Emocional"],
};

function polarValue(id) {
	const v = parseInt(document.getElementById(id).value);
	const labels = polarLabels[id];
	if (v < 30) return labels[0] + " (forte)";
	if (v < 45) return labels[0] + " (moderada)";
	if (v <= 55) return "Equilibrada";
	if (v < 70) return labels[1] + " (moderada)";
	return labels[1] + " (forte)";
}

function v(id) {
	const el = document.getElementById(id);
	return el ? el.value.trim() : "";
}
