// Scroll Smooth para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Cerrar menú móvil si está abierto
            navMenu.classList.remove('active');
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 8px 30px rgba(109, 40, 217, 0.4)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(109, 40, 217, 0.3)';
    }
});

// Crear estrellas animadas en el hero
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = window.innerWidth > 768 ? 50 : 20;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Intersection Observer para animaciones al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.mecanica-card, .historia-texto, .barrios-texto').forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// Counters animados (opcional, para estadísticas)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Efectos al hacer hover en botones
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect simple para imágenes
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const dragonImg = document.querySelector('.dragon-img');
    if (dragonImg) {
        dragonImg.style.transform = `translateY(${scrollPos * 0.3}px)`;
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    createStars();

    // Añadir clase scroll-animate a elementos específicos
    const elementsToAnimate = document.querySelectorAll('.mecanica-card');
    elementsToAnimate.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Resposive handler
window.addEventListener('resize', () => {
    // Reiniciar estrellas en cambio de tamaño
    if (window.innerWidth > 1024) {
        navMenu.classList.remove('active');
    }
});

// Event listeners para botones principales
const btnPrimary = document.querySelectorAll('.btn-primary');
btnPrimary.forEach(btn => {
    btn.addEventListener('click', function() {
        // Efecto ripple
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';

        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }
        `;

        if (!document.querySelector('style[data-ripple]')) {
            style.setAttribute('data-ripple', 'true');
            document.head.appendChild(style);
        }
    });
});

// Log para verificar que el script se cargó
console.log('🐉 Dragones & Castillos - Página cargada correctamente');
