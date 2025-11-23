new Swiper(".wrapper", {
    loop: true,
    spaceBetween: 30,
    // Autoplay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // Pagination bullets
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar-kopium");
    if (window.scrollY > 10) {
        nav.classList.add("sticky-shadow");
    } else {
        nav.classList.remove("sticky-shadow");
    }
});

// pagination

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll('.home-kopium');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1 
  });

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll('.story');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1 
  });

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll('.tentang-kopium');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1 
  });

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll('.border-testi');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1 
  });

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});

// Pas website udah SELESAI loading semua gambar/konten
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  // Hilangkan loader
  loader.style.opacity = "0";
  // Hapus dari layar biar bisa diklik
  setTimeout(() => {
      loader.style.display = "none";
  }, 500);
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    // Kalau scroll udah lebih dari 100px ke bawah
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

// easter egg
let keys = '';

window.addEventListener('keydown', (e) => {
    keys += e.key.toUpperCase(); // Simpan ketikan user
    
    // Cek kalau user ngetik 'KOPI'
    if (keys.includes('KOPI')) {
        // Reset ketikan
        keys = ''; 
        
        // Puter satu website!
        document.body.style.transition = "transform 2s";
        document.body.style.transform = "rotate(360deg)";
        
        // Balikin normal setelah muter
        setTimeout(() => {
            document.body.style.transform = "rotate(0deg)";
            alert("🎉 SECRET MODE UNLOCKED: KOPIUM GACING! 🎉");
        }, 2000);
    }
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const hour = new Date().getHours();
const greetingElement = document.getElementById("greeting-text");

let text = "";
if (hour >= 5 && hour < 12) {
    text = "🌞 Selamat Pagi! Butuh kafein buat mulai hari?";
} else if (hour >= 12 && hour < 15) {
    text = "☀️ Panas ya? Ngopi dingin enak nih!";
} else if (hour >= 15 && hour < 18) {
    text = "☕ Ngopi sore sambil senja-an yuk?";
} else {
    text = "🌙 Masih melek? Temani lemburmu dengan Kopium.";
}

greetingElement.innerText = text;

const magnets = document.querySelectorAll('.btn');

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', (e) => {
        const position = magnet.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        // Gerakin tombolnya ngikutin mouse (tapi dikit aja)
        magnet.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
    });

    magnet.addEventListener('mouseout', (e) => {
        // Balikin ke posisi semula pas mouse pergi
        magnet.style.transform = "translate(0px, 0px)";
        magnet.style.transition = "all 0.3s ease";
    });
    
    // Hapus transisi pas lagi gerak biar smooth
    magnet.addEventListener('mouseenter', (e) => {
        magnet.style.transition = "none";
    });
});