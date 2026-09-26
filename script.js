// ============================================
// الأرخبيل اللا متناظر - التفاعل الهادئ
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    const iconCards = document.querySelectorAll('.icon-card');
    
    iconCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // هدوء. لا حركة. فقط توهج خفيف.
        });
    });
    
    console.log('الأرخبيل اللا متناظر - البوابة الأكاديمية');
});
