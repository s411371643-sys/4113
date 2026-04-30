document.addEventListener('DOMContentLoaded', () => {
    // 滾動時導覽列變色
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        window.scrollY > 50 
            ? navbar.style.background = "rgba(255, 255, 255, 0.95)" 
            : navbar.style.background = "rgba(255, 255, 255, 0.85)";
    });

    // 平滑捲動處理
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});