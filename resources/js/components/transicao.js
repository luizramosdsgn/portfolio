// ==========================================
// TELA DE TRANSIÇÃO (LÓGICA DAS COLUNAS)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
	const overlay = document.getElementById("transicao-overlay");

	if (overlay) {
		// requestAnimationFrame em cascata garante que o CSS renderize primeiro o 'ini-revelando'
		// (escondendo a tela nativamente), depois adiciona animação 'revelando'.
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				overlay.classList.remove("ini-revelando");
				overlay.classList.add("revelando");

				// Limpa as classes para resetar o painel para uso no clique de saídas (as colunas subirão instantaneamente de forma invisível)
				setTimeout(() => {
					overlay.classList.remove("revelando", "ativo");
				}, 1200); // 0.6s animação + 0.4s delay da ultima coluna + 0.2s margem folga
			});
		});
	}

	// Função de verificação para validar se é um link para dentro do próprio site
	function isLinkInterno(href) {
		if (!href) return false;

		// Ignora ligações que não são urls páginas
		if (
			href.startsWith("#") ||
			href.startsWith("javascript:") ||
			href.startsWith("mailto:") ||
			href.startsWith("tel:")
		)
			return false;

		try {
			const url = new URL(href, window.location.origin);
			return url.origin === window.location.origin;
		} catch {
			// Links nativamente relativos (ex: './portfolio.html', 'contato.html')
			return !href.startsWith("http");
		}
	}

	document.addEventListener("click", (e) => {
		const link = e.target.closest("a");
		if (!link) return;

		const href = link.getAttribute("href");

		// Se abre em nova aba não devemos travar e nem transitar a nossa janela atual
		if (link.target === "_blank") return;

		// Tratar âncoras para a página corrente (para scroll não transitar a tela)
		if (href) {
			const currentUrl = new URL(window.location.href);
			try {
				const targetUrl = new URL(href, window.location.origin);
				// Se a pagina base é a mesma e só tem mudança com hash...
				if (currentUrl.pathname === targetUrl.pathname && targetUrl.hash) {
					return; // Permite o scroll smooth regular
				}
			} catch (err) {}
		}

		if (isLinkInterno(href)) {
			e.preventDefault();

			if (overlay) {
				// Ao clicar, bloqueia interações e anima para tapar tudo
				overlay.classList.add("cobrindo", "ativo");

				// Redireciona de verdade apenas após tapar tudo
				setTimeout(() => {
					window.location.href = href;
				}, 1000); // 0.6s de animação + 0.4s de delay máximo da última coluna
			} else {
				window.location.href = href;
			}
		}
	});

	// Se o usuário clicar no botão "Voltar" do navegador (recuperação bfcache Safari/Chrome)
	window.addEventListener("pageshow", (event) => {
		if (event.persisted && overlay) {
			// Garante inicial do load re-criando a animação de revelação.
			overlay.classList.remove("cobrindo");
			overlay.classList.add("ini-revelando", "ativo");

			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					overlay.classList.remove("ini-revelando");
					overlay.classList.add("revelando");
					setTimeout(() => {
						overlay.classList.remove("revelando", "ativo");
					}, 1200);
				});
			});
		}
	});
});
