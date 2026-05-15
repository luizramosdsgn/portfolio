# 🚀 Portfólio Luiz Ramos | Designer

> Um portfólio web de alta performance, desenvolvido com Vanilla JavaScript e focado em animações fluidas, responsividade e componentização nativa.

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)
![Tecnologia Principal](https://img.shields.io/badge/Tecnologia-Vanilla_JS-yellow)
![Animações](https://img.shields.io/badge/Animações-GSAP_3-green)

## 📖 Sobre o Projeto

Este projeto é o meu portfólio pessoal e profissional, desenhado no Figma e codificado do zero. O objetivo principal foi criar uma experiência premium para o usuário (UI/UX) sem depender de frameworks pesados, garantindo um carregamento ultrarrápido e código limpo.

O site apresenta meus serviços, metodologia de trabalho, um acervo dinâmico de projetos e um formulário de pré-briefing qualificado.

## ✨ Funcionalidades Principais

* **🌗 Dark/Light Mode Nativo:** Sistema de troca de tema com salvamento de preferência no `localStorage` do navegador.
* **🎬 Animações Premium (GSAP):** Entradas em cascata, revelação de elementos ao rolar a página (ScrollTrigger) e transições suaves de estado.
* **🧩 Componentização com Vanilla JS:** Header e Footer são injetados dinamicamente via JavaScript, facilitando a manutenção global do site (DRY principle).
* **🗄️ Injeção Dinâmica de Projetos:** Os cards de portfólio são gerados automaticamente a partir de um "banco de dados" em JS (`banco-projetos.js`), alimentando tanto o carrossel da Home quanto a Grade da página de Portfólio.
* **📱 100% Responsivo:** Layout adaptável para Desktop, Tablet e Mobile utilizando CSS Grid e Flexbox avançados.

## 🛠️ Tecnologias e Arquitetura

O projeto foi construído seguindo as melhores práticas modernas de desenvolvimento web estático:

* **HTML5:** Semântico e acessível.
* **CSS3:** Utilização de Variáveis (`:root`), aninhamento nativo (Nesting) e Glassmorphism.
* **JavaScript (ES6+):** Manipulação de DOM, renderização de arrays e assincronicidade.
* **GSAP (GreenSock):** Biblioteca padrão ouro da indústria para animações (Core + ScrollTrigger v3.12.5).

### 📁 Estrutura de Pastas (Destaque)
A arquitetura de arquivos foi modularizada para escalabilidade:
- `/css`: Arquivos de estilo divididos por componentes, globais, páginas e seções (`hero.css`, `portfolio-grid.css`, etc).
- `/js`: Scripts globais (`components.js`, `nav.js`) e scripts específicos organizados em subpastas (`/index/` e `/portfolio/`).

## 📝 Como Adicionar Novos Projetos

O portfólio consome os projetos dinamicamente a partir de um arquivo JavaScript. Siga o passo a passo abaixo para cadastrar novos trabalhos:

### 1. Onde Adicionar
Edite o arquivo: `resources/js/components/banco-projetos.js` e adicione um novo objeto na array `meusProjetos`.

### 2. Estrutura do Projeto
Copie e cole o modelo abaixo e preencha com os seus dados:

```javascript
{
    id: "meu-novo-projeto", // Slug único para URL (sem espaços ou acentos)
    categoria: "identidade", // Filtros aceitos: "identidade", "sm", "landing-page"

    imagem: "./resources/assets/img/global/thumb-projeto.webp",
    titulo: "Nome do Projeto",
    descricao: "Breve resumo do projeto.",
    tags: ["Branding", "Design"],

    cliente: "Nome do Cliente",
    ano: "2025",
    servicos: ["Branding", "Identidade Visual"],
    descricaoLonga: `Conteúdo em texto detalhando os desafios e a solução. Pode ter múltiplos parágrafos.`,
    galeria: [
        "./resources/assets/img/global/galeria-1.webp",
        "./resources/assets/img/global/galeria-2.webp"
    ],
    linkExterno: "https://behance.net/..." // (Opcional) Deixe vazio ("") para não exibir o botão
}
```

### 3. Recomendações e Boas Práticas

**Dimensões e Tamanho de Imagens:**
* **Formato Ideal:** Utilize `.webp` para todas as imagens (oferece melhor qualidade com menor peso).
* **Imagens de Capa (`imagem`):** 
  * Orientação recomendada: Formato paisagem (ex: 800x600px ou aspect-ratio similar).
  * Peso máximo recomendado: **abaixo de 100 KB** (essencial para carregamento rápido do index).
* **Imagens da Galeria (`galeria`):** 
  * Largura recomendada: 1920px (a altura pode ser livre, de acordo com as pranchas do projeto).
  * Peso máximo recomendado: **abaixo de 250 KB** por imagem.
* **Onde salvar as imagens:** Na pasta `resources/assets/img/global/`.

**Limites de Texto (Caracteres):**
* `titulo`: Ideal até **40 caracteres** para não quebrar o layout do grid.
* `descricao`: Ideal até **120 caracteres**. Aparece na capa do projeto, seja conciso.
* `tags`: Recomendado de **2 a 3 tags** que definam o estilo rapidamente.
* `descricaoLonga`: Sem limite numérico, mas é recomendado usar **2 a 3 parágrafos curtos** para não poluir a leitura da página interna do projeto. Mantenha espaçamentos entre parágrafos no próprio código `banco-projetos.js`.
