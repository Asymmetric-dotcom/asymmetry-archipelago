// ============================================
// الأرخبيل اللا متناظر - التفاعل
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // تحميل الخريطة
    // ============================================
    
    const mapContainer = document.getElementById('map-container');
    
    // إنشاء الخريطة مباشرة في الصفحة
    mapContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" width="100%" height="100%">
            <defs>
                <radialGradient id="seaGradient" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stop-color="#0d1424"/>
                    <stop offset="100%" stop-color="#050810"/>
                </radialGradient>
                
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- البحر -->
            <rect width="900" height="900" fill="url(#seaGradient)"/>
            
            <!-- النقاط المتناثرة -->
            <g id="stars"></g>
            
            <!-- الجسور -->
            <g id="bridges">
                <path d="M 280,380 Q 340,340 400,320" stroke="#4a6a9a" stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="6,4" filter="url(#softGlow)"/>
                <path d="M 520,340 Q 580,340 640,360" stroke="#6a4a8a" stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="6,4" filter="url(#softGlow)"/>
                <path d="M 340,520 Q 400,560 440,580" stroke="#8a6a4a" stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="6,4" filter="url(#softGlow)"/>
                <path d="M 500,560 Q 540,580 580,580" stroke="#3a5a7a" stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="6,4" filter="url(#softGlow)"/>
                <path d="M 620,520 Q 640,560 640,590" stroke="#3a6a5a" stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="6,4" filter="url(#softGlow)"/>
                <path d="M 240,440 Q 220,500 230,540" stroke="#6a3a4a" stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="6,4" filter="url(#softGlow)"/>
            </g>
            
            <!-- الجزر -->
            <g id="islands">
                <!-- جزيرة الفيزياء -->
                <a href="physics.html" target="_blank">
                    <g class="island" data-name="الفيزياء">
                        <polygon points="200,450 240,360 280,400 320,340 360,420 300,470 230,480" 
                                 fill="#2a4a7a" stroke="#4a7aaa" stroke-width="2.5" filter="url(#glow)" opacity="0.9"/>
                        <text x="280" y="420" text-anchor="middle" font-family="Amiri, serif" font-size="22" fill="#aaccff" font-weight="bold">فيزياء</text>
                    </g>
                </a>
                
                <!-- جزيرة الفلسفة -->
                <a href="philosophy.html" target="_blank">
                    <g class="island" data-name="الفلسفة">
                        <circle cx="480" cy="340" r="70" fill="#4a2a6a" stroke="#7a4aaa" stroke-width="2.5" filter="url(#glow)" opacity="0.9"/>
                        <text x="480" y="350" text-anchor="middle" font-family="Amiri, serif" font-size="22" fill="#ccaaFF" font-weight="bold">فلسفة</text>
                    </g>
                </a>
                
                <!-- جزيرة اللاهوت -->
                <a href="theology.html" target="_blank">
                    <g class="island" data-name="اللاهوت">
                        <ellipse cx="680" cy="380" rx="80" ry="55" fill="#6a4a2a" stroke="#aa7a4a" stroke-width="2.5" filter="url(#glow)" opacity="0.9"/>
                        <text x="680" y="390" text-anchor="middle" font-family="Amiri, serif" font-size="22" fill="#ffddaa" font-weight="bold">لاهوت</text>
                    </g>
                </a>
                
                <!-- جزيرة الوعي -->
                <a href="consciousness.html" target="_blank">
                    <g class="island" data-name="الوعي">
                        <polygon points="300,600 320,640 360,640 330,665 340,705 300,680 260,705 270,665 240,640 280,640" 
                                 fill="#2a6a5a" stroke="#4aaa8a" stroke-width="2.5" filter="url(#glow)" opacity="0.9"/>
                        <text x="300" y="660" text-anchor="middle" font-family="Amiri, serif" font-size="20" fill="#aaffdd" font-weight="bold">وعي</text>
                    </g>
                </a>
                
                <!-- جزيرة الدراسات العليا -->
                <a href="studies.html" target="_blank">
                    <g class="island" data-name="الدراسات العليا">
                        <polygon points="500,580 560,580 530,520" 
                                 fill="#6a2a3a" stroke="#aa4a6a" stroke-width="2.5" filter="url(#glow)" opacity="0.9"/>
                        <text x="530" y="570" text-anchor="middle" font-family="Amiri, serif" font-size="18" fill="#ffaacc" font-weight="bold">دراسات</text>
                    </g>
                </a>
                
                <!-- جزيرة الحوار -->
                <a href="dialogue.html" target="_blank">
                    <g class="island" data-name="الحوار">
                        <polygon points="640,600 680,620 710,590 740,610 720,650 680,640 650,670 630,630 620,650" 
                                 fill="#3a5a2a" stroke="#6a9a4a" stroke-width="2.5" filter="url(#glow)" opacity="0.9"/>
                        <text x="680" y="630" text-anchor="middle" font-family="Amiri, serif" font-size="20" fill="#ccffaa" font-weight="bold">حوار</text>
                    </g>
                </a>
            </g>
            
            <!-- الكلمات -->
            <g id="words" opacity="0.5">
                <text x="120" y="800" font-family="Amiri, serif" font-size="18" fill="#aaccff" opacity="0.6">وجود</text>
                <text x="280" y="820" font-family="Amiri, serif" font-size="20" fill="#ccaaFF" opacity="0.6">لا تناظر</text>
                <text x="450" y="810" font-family="Amiri, serif" font-size="16" fill="#ffddaa" opacity="0.6">حوار</text>
                <text x="580" y="830" font-family="Amiri, serif" font-size="18" fill="#aaffdd" opacity="0.6">اختلاف</text>
                <text x="720" y="800" font-family="Amiri, serif" font-size="16" fill="#ffaacc" opacity="0.6">تكامل</text>
                <text x="180" y="850" font-family="Amiri, serif" font-size="14" fill="#ccffaa" opacity="0.6">غاية</text>
                <text x="400" y="860" font-family="Amiri, serif" font-size="16" fill="#aaccff" opacity="0.6">فضاء</text>
                <text x="620" y="850" font-family="Amiri, serif" font-size="14" fill="#ccaaFF" opacity="0.6">أرخبيل</text>
            </g>
        </svg>
    `;
    
    // ============================================
    // إضافة النقاط المتناثرة
    // ============================================
    
    const starsGroup = document.getElementById('stars');
    if (starsGroup) {
        for (let i = 0; i < 80; i++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', Math.random() * 900);
            circle.setAttribute('cy', Math.random() * 900);
            circle.setAttribute('r', Math.random() * 2 + 0.5);
            circle.setAttribute('fill', '#ffffff');
            circle.setAttribute('opacity', Math.random() * 0.3 + 0.1);
            circle.classList.add('star');
            circle.style.animation = `dotTwinkle ${Math.random() * 4 + 3}s ease-in-out infinite`;
            circle.style.animationDelay = `${Math.random() * 5}s`;
            starsGroup.appendChild(circle);
        }
    }
    
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
        
        island.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            console.log('تم النقر على جزيرة: ' + name);
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
    
    console.log('الأرخبيل اللا متناظر - تم التحميل');
});
