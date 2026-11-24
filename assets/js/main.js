/* WAY BEYOND - LÓGICA PRINCIPAL, RENDERIZAÇÃO E ROLAGEM SUAVE */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Renderização dinâmica dos destinos em destaque
    const renderizarDestinos = () => {
        const container = document.getElementById('destinos-grid');
        
        if (!container || typeof destinosData === 'undefined') return;

        container.innerHTML = destinosData.map(destino => `
            <div class="col">
                <div class="card h-100 border border-light rounded-4 overflow-hidden bg-white shadow-sm">
                    <div class="position-relative overflow-hidden">
                        <span class="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 text-white px-2 py-1 rounded-pill fw-light small" style="font-size: 0.7rem;">
                            ${destino.numero}
                        </span>
                        <img src="${destino.imagem}" class="card-img-top object-fit-cover" alt="${destino.titulo}" loading="lazy" style="height: 240px; image-rendering: auto; -webkit-backface-visibility: hidden;">
                    </div>
                    <div class="card-body p-3 d-flex flex-column justify-content-between bg-white">
                        <div>
                            <span class="text-uppercase small fw-semibold text-muted d-block mb-1 tracking-wider" style="font-size: 0.7rem;">
                                ${destino.pais}
                            </span>
                            <h3 class="card-title h6 fw-bold text-dark mb-2">${destino.titulo}</h3>
                            <p class="card-text text-muted fw-light small mb-3 lh-sm" style="font-size: 0.82rem;">
                                ${destino.descricao}
                            </p>
                        </div>
                        <a href="#contato-form" class="btn-descobrir text-dark text-decoration-none fw-semibold small align-self-start" data-titulo="${destino.titulo}" data-pais="${destino.pais}">
                            Descobrir &rarr;
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    };

    // 2. Comportamento de navegação e rolagem suave (Smooth Scroll)
    const inicializarNavegacaoSuave = () => {
        const linkInicio = document.getElementById('link-inicio');
        const linkDestinos = document.getElementById('link-destinos');
        const linkContato = document.getElementById('link-contato');
        const btnVerDestinos = document.getElementById('btn-ver-destinos');

        if (linkInicio) {
            linkInicio.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const rolarParaSecao = (idSecao) => {
            const alvo = document.getElementById(idSecao);
            if (alvo) {
                alvo.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (linkDestinos) linkDestinos.addEventListener('click', (e) => { e.preventDefault(); rolarParaSecao('secao-destinos'); });
        if (btnVerDestinos) btnVerDestinos.addEventListener('click', (e) => { e.preventDefault(); rolarParaSecao('secao-destinos'); });
        if (linkContato) linkContato.addEventListener('click', (e) => { e.preventDefault(); rolarParaSecao('contato-form'); });
    };

    // 3. Integração dinâmica dos cartões com o formulário de contato
    const inicializarInteratividadeCards = () => {
        document.querySelectorAll('.btn-descobrir').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const titulo = btn.getAttribute('data-titulo');
                const pais = btn.getAttribute('data-pais');
                
                const inputDestino = document.getElementById('destino');
                const inputMensagem = document.getElementById('mensagem');
                const secaoContato = document.getElementById('contato-form');

                if (inputDestino && titulo) {
                    inputDestino.value = pais ? `${titulo}, ${pais}` : titulo;
                }

                if (inputMensagem && titulo) {
                    inputMensagem.value = `Olá! Gostaria de obter mais informações sobre o roteiro exclusivo para ${titulo}.`;
                }

                if (secaoContato) {
                    secaoContato.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    };

    // 4. Gestão do menu mobile (hambúrguer)
    const inicializarMenuMobile = () => {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');

        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener('click', () => {
                navMenu.classList.toggle('open');
                hamburgerBtn.classList.toggle('active');
            });
        }
    };

    // 5. Máscara de formatação para telefone/WhatsApp
    const inicializarMascaraWhatsApp = () => {
        const whatsappInput = document.getElementById('whatsapp');

        if (whatsappInput) {
            whatsappInput.addEventListener('input', (e) => {
                let valor = e.target.value.replace(/\D/g, '');

                if (valor.length > 11) valor = valor.slice(0, 11);

                if (valor.length > 7) {
                    valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
                } else if (valor.length > 2) {
                    valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
                } else if (valor.length > 0) {
                    valor = valor.replace(/^(\d*)/, '($1');
                }

                e.target.value = valor;
            });
        }
    };

    // 6. Manipulação, validação e exibição do Modal de Sucesso Customizado
    const inicializarFormularioContato = () => {
        const contactForm = document.getElementById('contact-form');

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // Dispara o Modal do Bootstrap de forma elegante
                const modalElement = document.getElementById('modalSucesso');
                if (modalElement && typeof bootstrap !== 'undefined') {
                    const modalSucesso = new bootstrap.Modal(modalElement);
                    modalSucesso.show();
                }

                contactForm.reset();
            });
        }
    };

    // 7. Monitoramento de rolagem para efeitos de cabeçalho e menu ativo
    const inicializarEfeitosScroll = () => {
        const mainHeader = document.getElementById('main-header');
        const navLinks = document.querySelectorAll('.nav-link-anim');
        const secoes = [
            { id: 'inicio', link: document.getElementById('link-inicio') },
            { id: 'secao-destinos', link: document.getElementById('link-destinos') },
            { id: 'contato-form', link: document.getElementById('link-contato') }
        ];

        const atualizarEstadoScroll = () => {
            if (mainHeader) {
                if (window.scrollY > 30) {
                    mainHeader.classList.add('scrolled');
                } else {
                    mainHeader.classList.remove('scrolled');
                }
            }

            const posicaoScroll = window.scrollY + 150;
            secoes.forEach(secao => {
                const elemento = document.getElementById(secao.id);
                if (elemento && secao.link) {
                    const topo = elemento.offsetTop;
                    const altura = elemento.offsetHeight;
                    if (posicaoScroll >= topo && posicaoScroll < topo + altura) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        secao.link.classList.add('active');
                    }
                }
            });
        };

        window.addEventListener('scroll', atualizarEstadoScroll);
        atualizarEstadoScroll();
    };

    // 8. Sistema de alternância de tema (Dark / Light Mode)
    const inicializarAlternanciaTema = () => {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const htmlElement = document.documentElement;
        const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.material-symbols-outlined') : null;

        const aplicarTema = (tema) => {
            htmlElement.setAttribute('data-bs-theme', tema);
            localStorage.setItem('theme', tema);
        };

        const temaSalvo = localStorage.getItem('theme');
        if (temaSalvo) {
            aplicarTema(temaSalvo);
        }

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const temaAtual = htmlElement.getAttribute('data-bs-theme') || 'light';
                const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
                
                aplicarTema(novoTema);

                if (themeIcon) {
                    themeIcon.style.transition = 'transform 0.3s ease';
                    themeIcon.style.transform = 'rotate(180deg)';
                    setTimeout(() => {
                        themeIcon.style.transform = 'rotate(0deg)';
                    }, 300);
                }
            });
        }
    };

    // Execução dos módulos da aplicação
    renderizarDestinos();
    inicializarInteratividadeCards();
    inicializarNavegacaoSuave();
    inicializarMenuMobile();
    inicializarMascaraWhatsApp();
    inicializarFormularioContato();
    inicializarEfeitosScroll();
    inicializarAlternanciaTema();
});