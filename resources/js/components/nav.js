// ==========================================
// TEMA (Claro / Escuro)
// ==========================================
const btnTema = document.getElementById("btn-tema");
const htmlElement = document.documentElement;

if (btnTema) {
	function alternarTema() {
		const temaAtual = htmlElement.getAttribute("data-theme");

		if (temaAtual === "light") {
			htmlElement.removeAttribute("data-theme");
			localStorage.setItem("temaSalvo", "dark");
		} else {
			htmlElement.setAttribute("data-theme", "light");
			localStorage.setItem("temaSalvo", "light");
		}
	}

	btnTema.addEventListener("click", alternarTema);
}

// Aplica tema salvo imediatamente (antes de qualquer interação)
const temaPreferido = localStorage.getItem("temaSalvo");
if (temaPreferido === "light") {
	htmlElement.setAttribute("data-theme", "light");
}

// ==========================================
// MENU MOBILE (Hambúrguer)
// ==========================================
const btnMobile = document.getElementById("btn-mobile");
const navMenu = document.querySelector(".nav-menu");

if (btnMobile && navMenu) {
	function toggleMenu() {
		navMenu.classList.toggle("ativo");
	}

	btnMobile.addEventListener("click", toggleMenu);

	// Fecha o menu ao clicar em algum link
	const linksMenu = document.querySelectorAll(".nav-links a");
	linksMenu.forEach((link) => {
		link.addEventListener("click", () => {
			navMenu.classList.remove("ativo");
		});
	});
}
