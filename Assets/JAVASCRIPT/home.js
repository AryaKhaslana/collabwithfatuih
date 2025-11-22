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