// js/components.js

// 1. O HTML DO SEU HEADER
const headerHTML = `
<header class="cabecalho">
        <div class="container nav-container">
            
            <a href="https://instagram.com/luizramos.07" target="_blank" class="link-insta" rel="noopener noreferrer">
              <div class="meu-insta">
               <img class="img-insta" src="./resources/assets/img/global/foto-insta.webp" alt="Minha Foto de perfil">
                <div class="textos-insta">
                 <p class="meu-nome-insta">
                   Luiz Ramos | Designer
                 </p>
                 <p class="meu-arroba-insta">
                   @luizramos.07
                 </p>
               </div>
             </div>
           </a>

            <nav class="nav-menu">
                <ul class="nav-links">
                    <li><a href="index.html#inicio">Início</a></li>
                    <li><a href="index.html#servicos">Serviços</a></li>
                    <li><a href="portfolio.html">Portfólio</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>

                <button id="btn-tema" class="btn-tema" aria-label="Alternar Tema">
                    <img src="./resources/assets/icons/global/icone-sol.svg" alt="Mudar para Tema Claro" class="icone-sol">
                    <img src="./resources/assets/icons/global/icone-lua.svg" alt="Mudar para Tema Escuro" class="icone-lua">
                </button>
                <button id="btn-mobile" class="btn-mobile" aria-label="Abrir Menu">
                    <span class="hamburguer"></span>
                </button>
            </nav>

        </div>
    </header>
`;

// 2. O HTML DO SEU FOOTER
const footerHTML = `
    <footer class="rodape">
        <div class="container rodape-container">
            <div class="rodape-links">
                <a href="https://linkedin.com/in/luizramosdsgn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/luizramosdsgn" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://instagram.com/luizramos.07" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            
            <div class="rodape-copy">
                <p>&copy; 2026 Luiz Ramos. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
`;

// 3. INJETANDO NA TELA
// Assim que este arquivo carregar, ele procura as divs vazias e preenche com o HTML
const headerContainer = document.getElementById("header-container");
if (headerContainer) {
	headerContainer.innerHTML = headerHTML;
}

const footerContainer = document.getElementById("footer-container");
if (footerContainer) {
	footerContainer.innerHTML = footerHTML;
}
