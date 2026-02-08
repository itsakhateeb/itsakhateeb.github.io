/* --- Menu Toggle (لفتح وإغلاق القائمة في الموبايل) --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* --- Scroll Logic (تحديد الرابط النشط عند التمرير) --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                // التحقق من وجود الرابط قبل إضافة الكلاس لتجنب الأخطاء في الصفحات الفرعية
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        };
    });
    
    // إغلاق القائمة عند التمرير
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* --- Animations (مؤثرات الظهور عند التمرير) --- */
ScrollReveal({ 
    reset: true, 
    distance: '80px', 
    duration: 2000, 
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.timeline-items, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.contact-info', { origin: 'left' });

// أنيميشن خاص لصفحة تفاصيل المشروع (يعمل فقط إذا كانت العناصر موجودة)
ScrollReveal().reveal('.project-hero-content', { origin: 'top' });
ScrollReveal().reveal('.project-img', { origin: 'bottom' });
ScrollReveal().reveal('.details-text', { origin: 'left' });
ScrollReveal().reveal('.details-sidebar', { origin: 'right' });


/* --- Typing Effect (تأثير الكتابة في الصفحة الرئيسية) --- */
// التحقق من وجود العنصر قبل تشغيل التأثير لتجنب الأخطاء في الصفحات الفرعية
if (document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: ['SOC Analyst', 'Bug Hunter', 'AI Security Researcher'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}