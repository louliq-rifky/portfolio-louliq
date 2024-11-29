// hamburger
const hamburger = document.querySelector('#hamburger');
const NavMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
}); 

window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != NavMenu) {
        hamburger.classList.remove('hamburger-active');
        NavMenu.classList.add('hidden');
    }
});

// navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window .pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}

// type writer 
document.addEventListener('DOMContentLoaded', function() {
    const text = "UIN Sumatera Utara";
    const typewriterElement = document.getElementById('typewriter');
    
    let index = 0;
    let isDeleting = false;
    let delay = 200; // Waktu antara setiap karakter
    let typingSpeed = 150; // Waktu antara setiap karakter saat mengetik

    function type() {
        if (isDeleting) {
            // Menghapus karakter
            if (index > 0) {
                typewriterElement.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(type, typingSpeed);
            } else {
                // Setelah selesai menghapus, mulai mengetik lagi (repeat)
                isDeleting = false;
                setTimeout(type, delay);
            }
        } else {
            // Mengetik karakter
            if (index < text.length) {
                typewriterElement.textContent = text.substring(0, index + 1);
                index++;
                setTimeout(type, typingSpeed);
            } else {
                // Setelah selesai mengetik, mulai menghapus
                isDeleting = true;
                setTimeout(type, delay);
            }
        }
    }
    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% dari section terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll event listener for smooth animation when scrolling back up
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // Remove class when not in view
            }
        });
    });
});

function kirimEmail() {
    window.location.href = "mailto:louliqrifky0999@gmail.com";
}

// klik aoutside hamburger

