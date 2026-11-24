# 🌍 Way Beyond — Viagens com Propósito

> *"Menos pressa. Mais presença."*

O **Way Beyond** é uma landing page minimalista, responsiva e acessível focada em turismo de contemplação e roteiros desenhados com calma, profundidade e um novo olhar sobre o mundo.

---

## ✨ Funcionalidades Principais

- **Modo Escuro / Claro (Dark/Light Mode):** Alternância dinâmica de tema com persistência no `localStorage` e suporte nativo via Bootstrap 5.3+ (`data-bs-theme`).
- **Identidade Visual Adaptativa:** Logótipo, contrastes e componentes ajustam-se automaticamente conforme o tema selecionado.
- **Curadoria Dinâmica de Destinos:** Renderização automática dos cartões de destinos a partir de um módulo de dados desacoplado (`destinations-data.js`), com animações suaves e scroll interativo.
- **Design Responsivo:** Layout fluido adaptado para desktop, tablet e mobile, com barra de navegação fixa e menu colapsável em ecrãs menores.
- **Acessibilidade e Inclusão (VLibras):** Navegação por teclado com foco visível, atributos semânticos (`ARIA`) e integração com o assistente oficial **VLibras** para tradução em Língua Brasileira de Sinais.
- **Formulário de Contato Interativo:** Validação acessível, máscara para WhatsApp, integração com os cartões de destinos e modal de confirmação de envio.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico** — Estruturação limpa e acessível
- **Bootstrap 5.3** — Sistema de grid, utilitários responsivos, modais e gerenciamento de temas
- **CSS3 Customizado** — Transições, efeitos de glassmorphism no cabeçalho e refinamentos visuais
- **Vanilla JavaScript (ES6+)** — Manipulação do DOM, renderização dinâmica, validação de formulário e controle de estado
- **VLibras Widget** — Recurso de acessibilidade em Libras
- **Google Fonts & Material Symbols** — Tipografia *Plus Jakarta Sans* e ícones de interface
- **Font Awesome 6** — Ícones de redes sociais
- **Cloudflare Pages** — Hospedagem estática e entrega global via CDN

---

## 📁 Estrutura do Projeto

```text
web-waybeyond/
├── assets/
│   ├── images/
│   │   ├── brand/
│   │   │   ├── logo-way-beyond-favicon.png
│   │   │   └── logo-way-beyond-transparent.png
│   │   ├── destinations/
│   │   │   ├── amalfitana.jpg
│   │   │   ├── bariloche.jpg
│   │   │   ├── kyoto.jpg
│   │   │   ├── noronha.jpg
│   │   │   ├── reynisdrangar.jpg
│   │   │   └── santorini.jpg
│   │   └── hero-cherry-blossom.jpg
│   └── js/
│       ├── destinations-data.js
│       └── main.js
├── index.html
└── README.md
```

---

## 🌐 Hospedagem & Visualização

O projeto está preparado para deploy contínuo como site estático no **Cloudflare Pages**:
Link do site hospedado: https://web-way-beyond.vinicius-s-silva026.workers.dev/

- **Framework preset:** `None` (HTML/CSS/JS estático)
- **Build command:** *(vazio)*
- **Build output directory:** `/`

### Como executar localmente

1. Clone ou descarregue este repositório:

```bash
git clone [https://github.com/vschmidt-dev/web-way-beyond.git](https://github.com/vschmidt-dev/web-way-beyond.git)
```

2. Aceda à pasta do projeto:

```bash
cd web-waybeyond-main
```

3. Abra o ficheiro `index.html` no navegador ou utilize um servidor local (como a extensão **Live Server** no VS Code).

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio. Sinta-se à vontade para explorar e adaptar.
