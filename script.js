// ============================================
// الأرخبيل اللا متناظر - التفاعل
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // تفاعل الجزر
    // ============================================
    
    const islands = document.querySelectorAll('.island');
    
    islands.forEach(island => {
        island.style.transition = 'all 0.5s ease';
        island.style.cursor = 'pointer';
        
        island.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08)';
            this.style.filter = 'drop-shadow(0 0 30px rgba(74, 106, 154, 0.8))';
        });
        
        island.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'url(#glow)';
        });
    });
    
    // ============================================
    // نبض الجسور
    // ============================================
    
    const bridges = document.querySelectorAll('#bridges path');
    bridges.forEach((bridge, index) => {
        bridge.style.animation = `bridgePulse ${3 + index * 0.5}s ease-in-out infinite`;
    });
    
    // ============================================
    // نبض الجزر
    // ============================================
    
    islands.forEach((island, index) => {
        island.style.animation = `breathe ${5 + index * 0.5}s ease-in-out infinite`;
    });
    
    // ============================================
    // نقاط متناثرة
    // ============================================
    
    const svg = document.querySelector('#map-container svg');
    if (svg) {
        const starsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        starsGroup.setAttribute('id', 'stars');
        
        for (let i = 0; i < 80; i++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', Math.random() * 900);
            circle.setAttribute('cy', Math.random() * 900);
            circle.setAttribute('r', Math.random() * 2 + 0.5);
            circle.setAttribute('fill', '#ffffff');
            circle.setAttribute('opacity', Math.random() * 0.3 + 0.1);
            circle.style.animation = `dotTwinkle ${Math.random() * 4 + 3}s ease-in-out infinite`;
            circle.style.animationDelay = `${Math.random() * 5}s`;
            starsGroup.appendChild(circle);
        }
        
        svg.insertBefore(starsGroup, svg.firstChild);
    }
    
    console.log('الأرخبيل اللا متناظر - تم التحميل');
});
