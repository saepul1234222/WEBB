<script>
// Pesan selamat datang
window.onload = function() {
    alert("Selamat datang di Portfolio Fuji Sri Efendi 💙")
};

// Scroll halus saat klik menu
document.querySelectorAll('.nav-links a').forEach(link  {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    })
});

// Efek animasi saat scroll
const cards = document.querySelectorAll('.skill-card, .gallery-card');

const observer = new IntersectionObserver((entries) ={
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    })
});

cards.forEach(card 
    card.style.opacity = '0'
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease';
    observer.observe(card);
);

// Footer tahun otomatis
document.querySelector('footer p').innerHTML =
    `&copy; ${new Date().getFullYear()} Fuji Sri Efendi. Made with 💙`;
</script>