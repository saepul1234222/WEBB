// Menambahkan efek bayangan (shadow) pada navbar saat halaman di-scroll ke bawah
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = '#ffffff';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    }
});

// Logika konfirmasi sederhana ketika link kontak diklik (opsional)
const contactLinks = document.querySelectorAll('.contact-icon');
contactLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Pengguna mencoba menghubungi via: ${this.textContent.trim()}`);
    });
});