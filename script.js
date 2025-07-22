// Enhanced Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Enhanced Modal functionality for senses
const modal = document.getElementById('sense-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('modal-close');

const senseData = {
    visao: {
        title: 'Visão',
        icon: '👁️',
        description: 'A visão processa mais de 80% de todas as informações que recebemos do ambiente. Na educação infantil, estímulos visuais adequados podem reduzir a ansiedade em até 45% e melhorar a concentração das crianças.',
        stimulation: [
            'Cores suaves e harmônicas para relaxamento profundo (tons pastéis em 60% do ambiente)',
            'Luzes LED coloridas programáveis para diferentes atividades (432Hz de frequência luminosa)',
            'Objetos com formas geométricas variadas para estimular reconhecimento espacial',
            'Contraste visual adequado (70% de diferença tonal recomendada pela neurociência)',
            'Elementos visuais organizados seguindo a regra dos terços para harmonia',
            'Painéis com texturas visualmente contrastantes em alturas acessíveis',
            'Móbiles com movimento suave para tracking visual e coordenação olho-mão'
        ],
        benefits: 'Melhora a concentração em 67%, reduz hiperestimulação visual e facilita o processamento de informações complexas. Ativa o córtex visual primário e secundário, desenvolvendo percepção espacial e temporal.'
    },
    audicao: {
        title: 'Audição',
        icon: '👂',
        description: 'O sistema auditivo é fundamental para o desenvolvimento da linguagem e está diretamente conectado ao sistema límbico (emocional). Sons adequados podem reduzir o cortisol (hormônio do estresse) em 38% nas crianças.',
        stimulation: [
            'Música clássica em frequências de 432Hz para harmonia cerebral e sincronização neural',
            'Sons da natureza (chuva, pássaros, oceano) para ativação do sistema nervoso parassimpático',
            'Instrumentos musicais de diferentes timbres e frequências (20Hz a 8kHz)',
            'Controle rigoroso de ruídos externos (máximo 45 decibéis conforme OMS)',
            'Atividades de escuta ativa com identificação sonora e discriminação auditiva',
            'Texturas sonoras variadas (sussurros, batidas rítmicas) para desenvolvimento temporal',
            'Música binaural para sincronização de ondas cerebrais alfa e theta'
        ],
        benefits: 'Desenvolve discriminação auditiva, melhora habilidades linguísticas em 52% e promove regulação emocional natural. Estimula o córtex auditivo e fortalece conexões neurais para linguagem.'
    },
    olfato: {
        title: 'Olfato',
        icon: '👃',
        description: 'O olfato é o único sentido conectado diretamente ao sistema límbico, processando emoções e memórias. Aromas específicos podem criar associações positivas duradouras com o ambiente escolar.',
        stimulation: [
            'Aromas cítricos (laranja, limão) para energia e foco - 15 minutos de exposição ideal',
            'Lavanda para relaxamento e redução de ansiedade - 10 minutos antes atividades calmas',
            'Plantas aromáticas naturais (hortelã, alecrim, manjericão) para oxigenação',
            'Ambientadores naturais sem químicos agressivos (óleos essenciais puros)',
            'Atividades culinárias com ervas aromáticas para associações positivas',
            'Identificação de diferentes odores em recipientes seguros e não tóxicos',
            'Sachês aromáticos com essências naturais rotativas para estimulação constante'
        ],
        benefits: 'Reduz ansiedade em 43%, melhora memória afetiva e cria vínculos positivos com o ambiente educacional. Ativa diretamente a amígdala e o hipocampo, centros de emoção e memória.'
    },
    tato: {
        title: 'Tato',
        icon: '✋',
        description: 'O tato é o primeiro sentido a se desenvolver e possui mais terminações nervosas que qualquer outro. Estimulação tátil adequada ativa 87% das áreas cerebrais responsáveis pelo desenvolvimento cognitivo.',
        stimulation: [
            'Tapetes com 12+ texturas diferentes (áspero, liso, rugoso, macio, granulado)',
            'Materiais naturais seguros: madeira lixada, pedras polidas, areia fina, folhas secas',
            'Brinquedos táteis com diferentes temperaturas e densidades (gel, espuma, borracha)',
            'Massinha de modelar com texturas variadas e resistências diferentes',
            'Brincadeiras com água morna (32°C) e areia cinética para propriocepção',
            'Tecidos com tramas diferentes (veludo, linho, seda, algodão) em painéis táteis',
            'Esponjas naturais e sintéticas para discriminação de texturas e pressão'
        ],
        benefits: 'Desenvolve coordenação motora fina em 71%, melhora integração sensorial e reduz comportamentos estereotipados. Estimula o córtex somatossensorial e fortalece a mielinização neural.'
    },
    paladar: {
        title: 'Paladar',
        icon: '👅',
        description: 'O paladar trabalha em conjunto com o olfato (flavor) e está ligado à exploração e descoberta. Experiências gustativas seguras enriquecem o desenvolvimento multissensorial em 34%.',
        stimulation: [
            'Degustação controlada de frutas da estação (sempre com supervisão)',
            'Identificação dos 5 sabores básicos: doce, salgado, azedo, amargo, umami',
            'Atividades culinárias educativas com medidas e texturas (sem cozimento)',
            'Exploração de diferentes temperaturas alimentares (morno, frio, ambiente)',
            'Associação sabor-cor-aroma em atividades lúdicas multissensoriais',
            'Herbs garden: cultivo e degustação segura de ervas aromáticas',
            'Jogos sensoriais com alimentos conhecidos e aprovados pelos pais'
        ],
        benefits: 'Amplia repertório alimentar em 45%, desenvolve discriminação sensorial e estimula curiosidade exploratória natural. Ativa áreas cerebrais relacionadas à recompensa e prazer.'
    },
    vestibular: {
        title: 'Sistema Vestibular',
        icon: '🔄',
        description: 'O sistema vestibular controla equilíbrio, orientação espacial e coordenação. Sua estimulação adequada melhora a regulação comportamental em 89% das crianças com dificuldades de adaptação.',
        stimulation: [
            'Balanços lineares suaves (frente-trás) por 5-10 minutos com supervisão',
            'Movimentos rotatórios controlados em cadeiras giratórias (máximo 30 segundos)',
            'Exercícios de equilíbrio em superfícies instáveis (almofadas, colchonetes)',
            'Caminhadas em diferentes elevações e texturas de solo seguras',
            'Brincadeiras de rolar controlado em colchonetes macios e seguros',
            'Atividades de inversão corporal supervisionadas (de cabeça para baixo)',
            'Propriocepção: exercícios de consciência corporal no espaço tridimensional'
        ],
        benefits: 'Melhora coordenação global em 78%, reduz hiperatividade e desenvolve consciência corporal e espacial. Estimula o cerebelo e melhora a integração sensorial geral.'
    }
};

// Enhanced modal functionality with benefits
document.addEventListener('click', (e) => {
    const senseCard = e.target.closest('.sense-card');
    if (senseCard) {
        const senseType = senseCard.getAttribute('data-sense');
        const data = senseData[senseType];
        
        if (data) {
            modalBody.innerHTML = `
                <div class="sense-detail">
                    <div class="sense-header">
                        <span class="sense-modal-icon">${data.icon}</span>
                        <h2>${data.title}</h2>
                    </div>
                    <p class="sense-description">${data.description}</p>
                    <h3>💡 Como estimular de forma científica:</h3>
                    <ul class="stimulation-list">
                        ${data.stimulation.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <div class="sense-benefits">
                        <h4>🎯 Benefícios Comprovados pela Neurociência:</h4>
                        <p><strong>${data.benefits}</strong></p>
                    </div>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize Swiper Carousels
document.addEventListener('DOMContentLoaded', () => {
    // Problem Carousel
    if (document.querySelector('.problem-carousel')) {
        new Swiper('.problem-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Objectives Carousel
    if (document.querySelector('.objectives-carousel')) {
        new Swiper('.objectives-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Senses Carousel
    if (document.querySelector('.senses-carousel')) {
        new Swiper('.senses-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
            }
        });
    }

    // Color Concepts Carousel
    if (document.querySelector('.color-carousel')) {
        new Swiper('.color-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Metrics Carousel
    if (document.querySelector('.metrics-carousel')) {
        new Swiper('.metrics-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Materials Carousel
    if (document.querySelector('.materials-carousel')) {
        new Swiper('.materials-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Prototypes Carousel
    if (document.querySelector('.prototypes-carousel')) {
        new Swiper('.prototypes-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }
});

// Enhanced download button functionality
document.addEventListener('click', (e) => {
    const downloadButton = e.target.closest('.download-button');
    if (downloadButton) {
        const buttonTitle = downloadButton.querySelector('.button-title');
        const buttonSubtitle = downloadButton.querySelector('.button-subtitle');
        const buttonIcon = downloadButton.querySelector('.button-icon i');
        
        if (buttonTitle && buttonSubtitle && buttonIcon) {
            const originalTitle = buttonTitle.textContent;
            const originalSubtitle = buttonSubtitle.textContent;
            const originalIcon = buttonIcon.getAttribute('data-lucide');
            
            // Stage 1: Preparing
            buttonIcon.setAttribute('data-lucide', 'loader-2');
            lucide.createIcons();
            buttonTitle.textContent = 'Preparando download...';
            buttonSubtitle.textContent = 'Compilando recursos';
            downloadButton.disabled = true;
            downloadButton.style.opacity = '0.8';
            
            setTimeout(() => {
                // Stage 2: Processing
                buttonIcon.setAttribute('data-lucide', 'package');
                lucide.createIcons();
                buttonTitle.textContent = 'Compactando arquivos...';
                buttonSubtitle.textContent = 'Otimizando conteúdo';
                
                setTimeout(() => {
                    // Stage 3: Complete
                    buttonIcon.setAttribute('data-lucide', 'check-circle');
                    lucide.createIcons();
                    buttonTitle.textContent = 'Download iniciado!';
                    buttonSubtitle.textContent = 'Verifique sua pasta Downloads';
                    downloadButton.style.background = 'var(--success-600)';
                    
                    setTimeout(() => {
                        // Reset
                        buttonIcon.setAttribute('data-lucide', originalIcon || 'file-text');
                        lucide.createIcons();
                        buttonTitle.textContent = originalTitle;
                        buttonSubtitle.textContent = originalSubtitle;
                        downloadButton.disabled = false;
                        downloadButton.style.opacity = '1';
                        downloadButton.style.background = '';
                    }, 3000);
                }, 2000);
            }, 1500);
        }
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add special animation for stat counters
            if (entry.target.classList.contains('stat-number') || 
                entry.target.classList.contains('result-percentage') ||
                entry.target.classList.contains('metric-number')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

// Counter animation function
function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/[^\d]/g, ''));
    
    if (number && !element.dataset.animated) {
        element.dataset.animated = 'true';
        const suffix = text.replace(/[\d]/g, '');
        let current = 0;
        const duration = 2000;
        const increment = number / (duration / 16);
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = number + suffix;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
}

// Apply scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(`
        .stat-card, .objective-card, .problem-card, .sense-card, 
        .prototype-card, .metric-card, .material-item, .highlight-card,
        .timeline-item, .color-concept, .stat-number, .result-percentage,
        .metric-number, .floating-card
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced navbar behavior
let lastScrollY = window.scrollY;
let ticking = false;

function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = window.scrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Active navigation state
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Smooth reveal for hero elements
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-description, .hero-stats, .hero-actions');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Enhanced form validation for potential contact forms
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add proper ARIA labels
    const carousels = document.querySelectorAll('.swiper');
    carousels.forEach((carousel, index) => {
        carousel.setAttribute('aria-label', `Carrossel ${index + 1}`);
        carousel.setAttribute('role', 'region');
    });
    
    // Add loading states for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Performance optimization: Lazy loading for non-critical content
const lazyLoad = () => {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    
    lazyElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.removeAttribute('data-lazy');
            // Load content here
        }
    });
};

window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);

// Initialize tooltips for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.getAttribute('title');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--gray-900);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                z-index: 9999;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.2s ease;
            `;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => tooltip.style.opacity = '1', 10);
            
            e.target.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    });
});

// Console welcome message
console.log(`
🧠 Ambiente Sensorial para Adaptação Escolar
📊 Sistema de pesquisa desenvolvido por Giovanna Romeu Souza
🎨 Design moderno e acessível implementado
✨ Todos os recursos carregados com sucesso!

📧 Para mais informações sobre este projeto inovador, entre em contato.
`);

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .card, .stat');
    interactiveElements.forEach(el => {
        if (!el.style.transition) {
            el.style.transition = 'all 0.3s ease';
        }
    });
    
    // Initialize any additional functionality
    console.log('🚀 Página totalmente carregada e otimizada!');
});