// Enhanced Navigation Toggle with Micro-interactions
function toggleNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Haptic feedback simulation
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Sound feedback simulation
    if (window.AudioContext) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
}

// Enhanced Smooth Scrolling with Easing
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Custom easing function
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Advanced Sensory System Data with Scientific Details
const sensoryData = {
    visual: {
        name: "Sistema Visual",
        icon: "eye",
        description: "O sistema visual processa informações luminosas através da retina, permitindo a percepção de cores, formas, movimento e profundidade. É fundamental para a orientação espacial e reconhecimento de padrões.",
        stimulation: [
            "🎨 Paletas de cores calmantes (azul, verde, violeta) para reduzir ansiedade",
            "💡 Iluminação natural ou LED de espectro completo (5000K-6500K)",
            "🌈 Elementos visuais com contraste adequado (mínimo 4.5:1)",
            "🔄 Padrões repetitivos e simétricos para organização visual",
            "📐 Geometrias fractais para estimulação cognitiva suave"
        ],
        benefits: "Melhora foco, reduz fadiga visual, aumenta concentração e cria ambiente acolhedor para aprendizagem.",
        frequency: "Luz: 400-700nm | Refresh: 60-120Hz"
    },
    auditory: {
        name: "Sistema Auditivo",
        icon: "volume-2",
        description: "O sistema auditivo processa ondas sonoras de 20Hz a 20kHz, sendo crucial para comunicação, alerta e regulação emocional. Sons específicos podem induzir estados de calma ou atenção.",
        stimulation: [
            "🎵 Sons da natureza (chuva, oceano, floresta) em 40-60 dB",
            "🎼 Música clássica barroca (Bach, Vivaldi) para concentração",
            "🔔 Frequências binaurais (8-13Hz) para ondas alfa",
            "🤫 Controle de ruído ambiente (<35 dB) para reduzir distrações",
            "🎚️ Variação dinâmica controlada para manter engajamento"
        ],
        benefits: "Reduz estresse, melhora memória, facilita concentração e promove estados meditativos.",
        frequency: "Ideal: 8-13Hz (alfa) | Volume: 40-60dB"
    },
    tactile: {
        name: "Sistema Tátil",
        icon: "hand",
        description: "O sistema tátil processa texturas, temperatura, pressão e vibração através de milhões de receptores na pele. É essencial para regulação emocional e consciência corporal.",
        stimulation: [
            "🧸 Texturas variadas (liso, rugoso, macio) para estimulação sensorial",
            "🌡️ Temperatura controlada (21-24°C) para conforto térmico",
            "💺 Superfícies ergonômicas e materiais naturais (madeira, algodão)",
            "⚡ Vibração suave (10-100Hz) para feedback tátil",
            "🤲 Objetos manipuláveis para propriocepção"
        ],
        benefits: "Reduz ansiedade, melhora regulação emocional, aumenta consciência corporal e facilita aprendizagem multissensorial.",
        frequency: "Vibração: 10-100Hz | Temperatura: 21-24°C"
    },
    olfactory: {
        name: "Sistema Olfativo",
        icon: "flower",
        description: "O sistema olfativo está diretamente conectado ao sistema límbico, influenciando emoções e memória. Aromas específicos podem melhorar performance cognitiva e bem-estar.",
        stimulation: [
            "🌿 Lavanda para relaxamento e redução de ansiedade",
            "🍋 Cítricos (limão, laranja) para energia e concentração",
            "🌲 Eucalipto para clareza mental e foco",
            "🌸 Aromas florais suaves para ambiente acolhedor",
            "🌱 Concentrações baixas (0.1-1%) para evitar sobrecarga sensorial"
        ],
        benefits: "Melhora humor, facilita memória, reduz estresse e cria associações positivas com aprendizagem.",
        frequency: "Concentração: 0.1-1% | Duração: 15-30min"
    },
    gustatory: {
        name: "Sistema Gustativo",
        icon: "candy",
        description: "O sistema gustativo processa cinco sabores básicos e trabalha em conjunto com o olfato. Influencia humor e pode ser usado terapeuticamente em ambientes educacionais.",
        stimulation: [
            "🍯 Sabores doces naturais (mel, frutas) para conforto",
            "🌿 Chás de ervas (camomila, hortelã) para relaxamento",
            "🍊 Sabores cítricos para estimular alerta",
            "💧 Hidratação adequada para função cognitiva",
            "⚖️ Equilíbrio de sabores para estimulação controlada"
        ],
        benefits: "Reduz ansiedade alimentar, melhora humor, facilita regulação emocional e cria experiências multissensoriais positivas.",
        frequency: "pH: 6.5-7.5 | Temperatura: 15-25°C"
    },
    vestibular: {
        name: "Sistema Vestibular",
        icon: "rotate-3d",
        description: "O sistema vestibular, localizado no ouvido interno, controla equilíbrio, orientação espacial e coordenação. É fundamental para estabilidade emocional e atenção.",
        stimulation: [
            "🪑 Assentos com balanço suave para propriocepção",
            "⚖️ Exercícios de equilíbrio para integração sensorial",
            "🌀 Movimentos rotatórios controlados para estimulação vestibular",
            "🧘 Posturas estáveis para reduzir sobrecarga sensorial",
            "🎯 Atividades de coordenação para desenvolvimento motor"
        ],
        benefits: "Melhora equilíbrio emocional, reduz hiperatividade, aumenta foco e facilita autorregulação.",
        frequency: "Movimento: 0.1-2Hz | Amplitude: 5-15°"
    }
};

// Advanced Color Psychology Data
const colorPsychology = {
    blue: {
        name: "Azul Calmante",
        hex: "#4A90E2",
        psychological: "Reduz cortisol em 23%, promove tranquilidade",
        cognitive: "Melhora concentração e memória de trabalho",
        physiological: "Diminui pressão arterial e frequência cardíaca"
    },
    green: {
        name: "Verde Equilibrante",
        hex: "#7ED321",
        psychological: "Reduz fadiga mental, promove bem-estar",
        cognitive: "Aumenta criatividade e pensamento divergente",
        physiological: "Relaxa músculos oculares, reduz tensão"
    },
    purple: {
        name: "Roxo Inspirador",
        hex: "#9013FE",
        psychological: "Estimula imaginação e introspecção",
        cognitive: "Favorece pensamento abstrato e criatividade",
        physiological: "Influencia ritmos circadianos e relaxamento"
    }
};

// Enhanced Modal Functionality with Animations
function openModal(senseType) {
    const modal = document.getElementById('senseModal');
    const data = sensoryData[senseType];
    
    if (!data) return;
    
    // Populate modal content with rich animations
    document.getElementById('modalSenseName').textContent = data.name;
    document.getElementById('modalSenseIcon').setAttribute('data-lucide', data.icon);
    document.getElementById('modalSenseDescription').textContent = data.description;
    
    const stimulationList = document.getElementById('modalStimulationList');
    stimulationList.innerHTML = '';
    
    data.stimulation.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.animationDelay = `${index * 0.1}s`;
        li.classList.add('fade-in-up');
        stimulationList.appendChild(li);
    });
    
    document.getElementById('modalSenseBenefits').textContent = data.benefits;
    document.getElementById('modalSenseFrequency').textContent = data.frequency || 'Variável conforme estímulo';
    
    // Show modal with advanced animation
    modal.style.display = 'flex';
    modal.classList.add('modal-opening');
    document.body.style.overflow = 'hidden';
    
    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate([50, 50, 100]);
    }
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Focus management for accessibility
    setTimeout(() => {
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) closeButton.focus();
    }, 300);
}

function closeModal() {
    const modal = document.getElementById('senseModal');
    modal.classList.add('modal-closing');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('modal-opening', 'modal-closing');
        document.body.style.overflow = '';
    }, 300);
    
    // Return focus to trigger element
    const activeSenseCard = document.querySelector('.sense-card:focus');
    if (activeSenseCard) activeSenseCard.focus();
}

// Enhanced Download Simulation with Stages
async function simulateDownload(button, fileName) {
    const icon = button.querySelector('i[data-lucide]');
    const text = button.querySelector('.button-title');
    const subtitle = button.querySelector('.button-subtitle');
    
    const stages = [
        { icon: 'loader-2', text: 'Preparando...', subtitle: 'Iniciando download', duration: 1000 },
        { icon: 'download', text: 'Baixando...', subtitle: 'Processando arquivo', duration: 2000 },
        { icon: 'check-circle', text: 'Concluído!', subtitle: 'Download finalizado', duration: 1000 }
    ];
    
    button.disabled = true;
    button.style.pointerEvents = 'none';
    
    for (let stage of stages) {
        // Update visual state
        icon.setAttribute('data-lucide', stage.icon);
        text.textContent = stage.text;
        subtitle.textContent = stage.subtitle;
        
        // Add rotation animation for loader
        if (stage.icon === 'loader-2') {
            icon.style.animation = 'spin 1s linear infinite';
        } else {
            icon.style.animation = '';
        }
        
        // Add success glow for completion
        if (stage.icon === 'check-circle') {
            button.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.6)';
            button.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        }
        
        // Re-initialize icons and wait
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        await new Promise(resolve => setTimeout(resolve, stage.duration));
    }
    
    // Reset button after delay
    setTimeout(() => {
        icon.setAttribute('data-lucide', 'download');
        text.textContent = fileName.replace('.pdf', '');
        subtitle.textContent = 'Clique para baixar';
        button.style.boxShadow = '';
        button.style.background = '';
        button.disabled = false;
        button.style.pointerEvents = '';
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 2000);
}

// Advanced Intersection Observer with Multiple Animation Types
function initScrollAnimations() {
    const animationOptions = {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Determine animation type based on element class
                if (target.classList.contains('fade-in')) {
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                } else if (target.classList.contains('slide-in-left')) {
                    target.style.opacity = '1';
                    target.style.transform = 'translateX(0)';
                } else if (target.classList.contains('slide-in-right')) {
                    target.style.opacity = '1';
                    target.style.transform = 'translateX(0)';
                } else if (target.classList.contains('scale-in')) {
                    target.style.opacity = '1';
                    target.style.transform = 'scale(1)';
                } else if (target.classList.contains('rotate-in')) {
                    target.style.opacity = '1';
                    target.style.transform = 'rotate(0deg) scale(1)';
                }
                
                // Add stagger animation for children
                const children = target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                observer.unobserve(target);
            }
        });
    }, animationOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll(`
        .fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in,
        .problem-card, .objective-card, .sense-card, .color-concept,
        .result-highlight, .metric-card, .material-item, .prototype-card,
        .highlight-card, .hero-stat, .timeline-item
    `);

    animatedElements.forEach(el => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Set specific initial transforms
        if (el.classList.contains('slide-in-left')) {
            el.style.transform = 'translateX(-50px)';
        } else if (el.classList.contains('slide-in-right')) {
            el.style.transform = 'translateX(50px)';
        } else if (el.classList.contains('scale-in')) {
            el.style.transform = 'scale(0.8)';
        } else if (el.classList.contains('rotate-in')) {
            el.style.transform = 'rotate(-10deg) scale(0.8)';
        } else {
            el.style.transform = 'translateY(30px)';
        }
        
        observer.observe(el);
    });
}

// Enhanced Counter Animation with Easing
function animateCounter(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + difference * eased);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Advanced Navbar Hide/Show with Momentum
function initNavbarBehavior() {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
        const scrollDistance = Math.abs(scrollY - lastScrollY);
        
        if (scrollY > 100) {
            if (scrollDirection === 'down' && scrollDistance > 5) {
                navbar.style.transform = 'translateY(-100%)';
            } else if (scrollDirection === 'up' && scrollDistance > 5) {
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Active Navigation Link Highlighting
function initActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = Array.from(navLinks).map(link => 
        document.querySelector(link.getAttribute('href'))
    ).filter(Boolean);
    
    function updateActiveLink() {
        const scrollPos = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.offsetTop <= scrollPos) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[i]?.classList.add('active');
                break;
            }
        }
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
}

// Enhanced Particle System for Hero Background
function initParticleSystem() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const hero = document.querySelector('.hero');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.3';
    canvas.style.zIndex = '1';
    
    hero.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = '#00d4ff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    const particles = Array.from({ length: 50 }, () => new Particle());
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
}

// Advanced Carousel Configurations with Touch Gestures
function initCarousels() {
    const carouselConfigs = {
        '.problems-carousel': {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: { delay: 4000 },
            loop: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: { 
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        },
        '.objectives-carousel': {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: { delay: 5000 },
            loop: true,
            effect: 'cards',
            cardsEffect: {
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: true
            },
            pagination: { 
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 2, effect: 'slide' },
                1024: { slidesPerView: 3, effect: 'slide' }
            }
        },
        '.senses-carousel': {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: { delay: 3500 },
            loop: true,
            effect: 'cube',
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            pagination: { 
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 2, effect: 'slide' },
                1024: { slidesPerView: 3, effect: 'slide' }
            }
        }
    };
    
    Object.entries(carouselConfigs).forEach(([selector, config]) => {
        const container = document.querySelector(selector);
        if (container && typeof Swiper !== 'undefined') {
            new Swiper(selector, config);
        }
    });
}

// Enhanced Theme Switching (Future Feature)
function initThemeSystem() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function applyTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        
        // Animate theme transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }
    
    prefersDark.addEventListener('change', (e) => applyTheme(e.matches));
    applyTheme(prefersDark.matches);
}

// Enhanced Performance Monitoring
function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            console.log(`🚀 Page Load Performance:
                - Load Time: ${loadTime}ms
                - DOM Ready: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms
                - First Paint: ${performance.getEntriesByType('paint')[0]?.startTime || 'N/A'}ms
            `);
            
            // Sustainable design metrics
            if (loadTime > 3000) {
                console.warn('⚠️ Page load time exceeds sustainable design guidelines (>3s)');
            }
        });
    }
}

// Welcome Message with ASCII Art
function showWelcomeMessage() {
    console.log(`
    🌟 AMBIENTE SENSORIAL PARA ADAPTAÇÃO ESCOLAR 🌟
    
    ╔══════════════════════════════════════════════════╗
    ║  Projeto de Pesquisa - Giovanna Romeu Souza      ║
    ║  Design: Neumorphism + Glassmorphism + Big Blocks ║
    ║  Tech: Vivid Glow + Sketchbook + Modern UI/UX    ║
    ╚══════════════════════════════════════════════════╝
    
    🎨 Estilos Aplicados:
    ✨ Neumorphism - Superfícies suaves em relevo
    🔮 Glassmorphism - Transparências e blur effects
    📐 Big Blocks - Contraste vívido e impacto visual
    🌈 Vivid Glow - Cores intensas e luminosas
    ✏️ Sketchbook - Elementos desenhados à mão
    📝 Tipografia Impactante - Fontes contundentes
    🎬 Microinterações - Animações sutis e feedback
    📱 Design Responsivo - 100% adaptativo
    🌱 Design Sustentável - Otimizado para performance
    
    Desenvolvido com ❤️ e tecnologias modernas
    `);
}

// Main Initialization Function
function initializeApp() {
    // Core functionality
    initScrollAnimations();
    initNavbarBehavior();
    initActiveNavigation();
    initCarousels();
    
    // Enhanced features
    initParticleSystem();
    initThemeSystem();
    initPerformanceMonitoring();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Animate hero elements on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-description, .hero-actions');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
    
    // Animate counters when visible
    const counterElements = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                const suffix = target.textContent.replace(/\d/g, '');
                
                animateCounter(target, 0, finalValue, 2000, suffix);
                counterObserver.unobserve(target);
            }
        });
    });
    
    counterElements.forEach(el => {
        el.style.opacity = '0';
        counterObserver.observe(el);
    });
    
    // Show welcome message
    showWelcomeMessage();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeApp);

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
        e.preventDefault();
        smoothScroll(target.getAttribute('href'));
        
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Enhanced keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('senseModal');
        if (modal && modal.style.display === 'flex') {
            closeModal();
        }
    }
    
    // Toggle navigation with Enter/Space on hamburger
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('hamburger')) {
        e.preventDefault();
        toggleNav();
    }
});

// Enhanced window resize handling
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Reinitialize carousels on significant resize
        if (typeof Swiper !== 'undefined') {
            document.querySelectorAll('.swiper').forEach(swiperEl => {
                if (swiperEl.swiper) {
                    swiperEl.swiper.update();
                }
            });
        }
    }, 250);
});

// Accessibility: Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
    document.documentElement.style.setProperty('--transition-normal', '0.01ms');
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    document.documentElement.style.setProperty('--transition-bounce', '0.01ms');
}

// Service Worker for Enhanced Performance (Future Enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here
        console.log('💡 Service Worker support detected - Ready for PWA features');
    });
}

// Enhanced error handling with user feedback
window.addEventListener('error', (e) => {
    console.error('❌ Application Error:', e.error);
    
    // Show user-friendly error message (non-intrusive)
    const errorNotification = document.createElement('div');
    errorNotification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff006e, #ff9500);
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(255, 0, 110, 0.3);
        z-index: 9999;
        font-size: 14px;
        backdrop-filter: blur(16px);
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    errorNotification.textContent = 'Algo deu errado, mas continue explorando! 🚀';
    
    document.body.appendChild(errorNotification);
    
    // Animate in
    setTimeout(() => {
        errorNotification.style.opacity = '1';
        errorNotification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        errorNotification.style.opacity = '0';
        errorNotification.style.transform = 'translateY(-20px)';
        setTimeout(() => errorNotification.remove(), 300);
    }, 5000);
});

// Export functions for testing and external use
window.SensorialApp = {
    toggleNav,
    smoothScroll,
    openModal,
    closeModal,
    simulateDownload,
    animateCounter
};