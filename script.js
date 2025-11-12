// Ambil semua elemen teks deskripsi
const allDescriptions = document.querySelectorAll('.deskripsi-teks');

// Fungsi untuk "membersihkan" kelas active
function updateDescriptions(activeIndex) {
    // 1. Sembunyikan semua teks (hapus kelas 'active')
    allDescriptions.forEach(deskripsi => {
        deskripsi.classList.remove('active');
    });

    // 2. Tampilkan teks yang sesuai dengan slide-nya
    const newActiveDescription = document.querySelector(`.deskripsi-teks[data-slide="${activeIndex}"]`);
    if (newActiveDescription) {
        newActiveDescription.classList.add('active');
    }
}

// Inisialisasi SWIPER
const swiper = new Swiper('.kopium-slider', {
    // Opsi yang kamu butuhkan:
    effect: 'coverflow', // Ini adalah efek 3D-nya
    grabCursor: true,      // Kursor tangan pas di-hover
    centeredSlides: true,  // Slide aktif akan ada di tengah
    slidesPerView: 'auto', // Tampilkan beberapa slide (di-setting CSS)
    loop: true,            // Muter terus (dari slide 3 balik ke 1)
    
    // Ini efek 'coverflow'nya
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    // 1. Jawaban untuk "dipencet pindah" (panah & dots)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Bikin dots-nya bisa diklik
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 2. Jawaban untuk "ganti teks"
    on: {
        // 'init' = Saat pertama kali load
        init: function () {
            // 'this.realIndex' = index slide yg aktif (misal: 0, 1, atau 2)
            updateDescriptions(this.realIndex);
        },
        // 'slideChange' = Saat slide ganti
        slideChange: function () {
            updateDescriptions(this.realIndex);
        }
    }
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar-kopium");
    if (window.scrollY > 10) {
        nav.classList.add("sticky-shadow");
    } else {
        nav.classList.remove("sticky-shadow");
    }
});