// Adiciona animação ao carregar links
document.addEventListener('DOMContentLoaded', () => {
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach((button, index) => {
        button.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s both`;
        
        button.addEventListener('click', (e) => {
            // Adiciona efeito de clique
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
        
        // Adiciona feedback visual ao hover
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});

// Efeito de ripple ao clicar
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Analytics tracking (opcional)
function trackLinkClick(category, label) {
    console.log(`Link clicado: ${category} - ${label}`);
    // Aqui você pode integrar Google Analytics ou outro serviço
}