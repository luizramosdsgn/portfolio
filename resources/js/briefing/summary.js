function buildSummary() {
	const data = collectData();
	let html = "";

	const sections = [
		{
			title: "1. Contexto",
			rows: [
				[
					"Nome / marca",
					(data.nome || "") + (data.fantasia ? " (" + data.fantasia + ")" : ""),
				],
				["Segmento", data.segmento],
				["Tempo de existência", data.tempo],
				["Tamanho", data.tamanho],
				["Motivação do projeto", data.motivo],
				["Entregas esperadas", data.entrega],
				["Prazo", data.prazo + (data.prazObs ? " — " + data.prazObs : "")],
			],
		},
		{
			title: "2. Negócio",
			rows: [
				["Essência / proposta", data.essencia],
				["Principal produto/serviço", data.principalProduto],
				["Processo/método", data.processo],
				["Concorrentes", data.concorrentes],
				["Diferenciais", data.diferencial],
				["Marcas admiradas", data.admira],
				["Canais de uso", data.canais],
			],
		},
		{
			title: "3. Posicionamento",
			rows: [
				["Propósito", data.proposito],
				["Valores", data.valores],
				["Personalidade da marca", data.personaMarca],
				["Tom de comunicação", data.tom],
				["Eixo Tradição / Inovação", polarValue("polar-trad")],
				["Eixo Séria / Divertida", polarValue("polar-seria")],
				["Eixo Acessível / Premium", polarValue("polar-preco")],
				["Eixo Minimalista / Expressiva", polarValue("polar-visual")],
				["Eixo Local / Global", polarValue("polar-escala")],
				["Eixo Racional / Emocional", polarValue("polar-emocao")],
				["O que nunca deve parecer", data.nunca],
			],
		},
		{
			title: "4. Público",
			rows: [
				["Cliente ideal", data.clienteIdeal],
				["Principal dor", data.dorCliente],
				["Desejo profundo", data.desejoCliente],
				["Razão da escolha", data.razaoEscolha],
				["Sensação esperada na primeira impressão", data.sensacao],
				["Melhor caso / projeto", data.melhorCaso],
			],
		},
		{
			title: "5. Estética",
			rows: [
				[
					"Cores atuais",
					data.corAtual + (data.corAtualHex ? ": " + data.corAtualHex : ""),
				],
				["Famílias de cor preferidas", data.corFamilia],
				["Cores proibidas", data.corProibida],
				["Estilo tipográfico", data.tipo],
				["Estilo de forma", data.forma],
				["Objeto que representa a marca", data.objeto],
				["Espaço/ambiente da marca", data.ambiente],
				["Símbolo/elemento visual", data.simbolo],
			],
		},
		{
			title: "6. Referências",
			rows: [
				[
					"Arquivos enviados",
					typeof uploadedFiles !== 'undefined' && uploadedFiles.length > 0
						? uploadedFiles.length + " arquivo(s)"
						: "Nenhum arquivo",
				],
				["Links de referência", data.linksRef],
				["Links de concorrentes", data.linksConcorr],
				["Fio condutor estético", data.fioCondutor],
				["O que não quer ver", data.naoQuero],
				["Informações adicionais", data.extras],
			],
		},
	];

	sections.forEach((sec) => {
		html += '<div class="summary-block"><h4>' + sec.title + "</h4>";
		sec.rows.forEach((row) => {
			const val = row[1] || '<em style="color:var(--ink3)">—</em>';
			html +=
				'<div class="summary-row"><div class="summary-key">' +
				row[0] +
				'</div><div class="summary-val">' +
				val +
				"</div></div>";
		});
		html += "</div>";
	});

	document.getElementById("summary-output").innerHTML = html;
}

function collectData() {
	return {
		nome: v("nome"),
		fantasia: v("fantasia"),
		segmento: v("segmento"),
		tempo: getChips("tempo"),
		tamanho: getChips("tamanho"),
		motivo: getChips("motivo"),
		entrega: getChips("entrega"),
		prazo: v("prazo"),
		prazObs: v("prazo-obs"),
		essencia: v("essencia"),
		principalProduto: v("principal-produto"),
		processo: v("processo"),
		concorrentes: v("concorrentes"),
		diferencial: v("diferencial"),
		admira: v("admira"),
		canais: getChips("canais"),
		proposito: v("proposito"),
		valores:
			getChips("valores") +
			(v("valores-outros") ? ", " + v("valores-outros") : ""),
		personaMarca: v("persona-marca"),
		tom: getChips("tom"),
		nunca: v("nunca"),
		clienteIdeal: v("cliente-ideal"),
		dorCliente: v("dor-cliente"),
		desejoCliente: v("desejo-cliente"),
		razaoEscolha: v("razao-escolha"),
		sensacao: getChips("sensacao"),
		melhorCaso: v("melhor-caso"),
		corAtual: getChips("cor-atual"),
		corAtualHex: v("cor-atual-hex"),
		corFamilia: getChips("cor-familia"),
		corProibida: v("cor-proibida"),
		tipo: getChips("tipo"),
		forma: getChips("forma"),
		objeto: v("objeto"),
		ambiente: v("ambiente"),
		simbolo: v("simbolo"),
		linksRef: v("links-ref"),
		linksConcorr: v("links-concorr"),
		fioCondutor: v("fio-condutor"),
		naoQuero: v("nao-quero"),
		extras: v("extras"),
	};
}

function exportarTexto() {
	const data = collectData();
	let txt = "BRIEFING DE IDENTIDADE VISUAL\n";
	txt += "================================\n";
	txt += "Gerado em: " + new Date().toLocaleDateString("pt-BR") + "\n\n";

	txt += "1. CONTEXTO\n─────────────────────────────\n";
	txt +=
		"Nome/marca: " +
		(data.nome || "-") +
		(data.fantasia ? " (" + data.fantasia + ")" : "") +
		"\n";
	txt += "Segmento: " + (data.segmento || "-") + "\n";
	txt += "Tempo de existência: " + (data.tempo || "-") + "\n";
	txt += "Tamanho: " + (data.tamanho || "-") + "\n";
	txt += "Motivação: " + (data.motivo || "-") + "\n";
	txt += "Entregas: " + (data.entrega || "-") + "\n";
	txt += "Prazo: " + (data.prazo || "-") + "\n\n";

	txt += "2. NEGÓCIO\n─────────────────────────────\n";
	txt += "Essência: " + (data.essencia || "-") + "\n";
	txt += "Principal produto: " + (data.principalProduto || "-") + "\n";
	txt += "Processo/método: " + (data.processo || "-") + "\n";
	txt += "Concorrentes: " + (data.concorrentes || "-") + "\n";
	txt += "Diferenciais: " + (data.diferencial || "-") + "\n";
	txt += "Marcas admiradas: " + (data.admira || "-") + "\n";
	txt += "Canais: " + (data.canais || "-") + "\n\n";

	txt += "3. POSICIONAMENTO\n─────────────────────────────\n";
	txt += "Propósito: " + (data.proposito || "-") + "\n";
	txt += "Valores: " + (data.valores || "-") + "\n";
	txt += "Personalidade: " + (data.personaMarca || "-") + "\n";
	txt += "Tom: " + (data.tom || "-") + "\n";
	txt +=
		"Eixos: Tradição/Inovação=" +
		polarValue("polar-trad") +
		" | Séria/Divertida=" +
		polarValue("polar-seria") +
		" | Acessível/Premium=" +
		polarValue("polar-preco") +
		"\n";
	txt +=
		"       Minimalista/Expressiva=" +
		polarValue("polar-visual") +
		" | Local/Global=" +
		polarValue("polar-escala") +
		" | Racional/Emocional=" +
		polarValue("polar-emocao") +
		"\n";
	txt += "Nunca deve parecer: " + (data.nunca || "-") + "\n\n";

	txt += "4. PÚBLICO\n─────────────────────────────\n";
	txt += "Cliente ideal: " + (data.clienteIdeal || "-") + "\n";
	txt += "Dor principal: " + (data.dorCliente || "-") + "\n";
	txt += "Desejo profundo: " + (data.desejoCliente || "-") + "\n";
	txt += "Razão da escolha: " + (data.razaoEscolha || "-") + "\n";
	txt += "Sensação esperada: " + (data.sensacao || "-") + "\n\n";

	txt += "5. ESTÉTICA\n─────────────────────────────\n";
	txt +=
		"Cores atuais: " +
		(data.corAtual || "-") +
		(data.corAtualHex ? ": " + data.corAtualHex : "") +
		"\n";
	txt += "Famílias preferidas: " + (data.corFamilia || "-") + "\n";
	txt += "Cores proibidas: " + (data.corProibida || "-") + "\n";
	txt += "Tipografia: " + (data.tipo || "-") + "\n";
	txt += "Forma/estilo: " + (data.forma || "-") + "\n";
	txt += "Objeto símbolo: " + (data.objeto || "-") + "\n";
	txt += "Ambiente/espaço: " + (data.ambiente || "-") + "\n";
	txt += "Elemento visual: " + (data.simbolo || "-") + "\n\n";

	txt += "6. REFERÊNCIAS\n─────────────────────────────\n";
	txt +=
		"Arquivos: " +
		(typeof uploadedFiles !== 'undefined' && uploadedFiles.length > 0
			? uploadedFiles.length + " arquivo(s)"
			: "Nenhum") +
		"\n";
	txt += "Links ref: " + (data.linksRef || "-") + "\n";
	txt += "Links concorrentes: " + (data.linksConcorr || "-") + "\n";
	txt += "Fio condutor: " + (data.fioCondutor || "-") + "\n";
	txt += "Não quer ver: " + (data.naoQuero || "-") + "\n";
	txt += "Extras: " + (data.extras || "-") + "\n";

	const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download =
		"briefing-" +
		(data.nome || "identidade").replace(/\s/g, "-").toLowerCase() +
		".txt";
	a.click();
}

function imprimirBriefing() {
	window.print();
}
