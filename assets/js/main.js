// Main JavaScript - AM Psicología Madrid

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // MOBILE MENU
  // ============================================
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenu.classList.add('translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      document.body.style.overflow = 'auto';
    });
  }

  // Close mobile menu on outside click
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
        document.body.style.overflow = 'auto';
      }
    });
  }

  // ============================================
  // DROPDOWN MENUS
  // ============================================
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('[data-dropdown-button]');
    const menu = dropdown.querySelector('[data-dropdown-menu]');
    let closeTimeout;

    if (button && menu) {
      // Desktop: hover with delay
      if (window.innerWidth >= 768) {
        dropdown.addEventListener('mouseenter', () => {
          // Clear any pending close timeout
          if (closeTimeout) {
            clearTimeout(closeTimeout);
          }
          menu.classList.remove('hidden');
          menu.classList.add('animate-fade-in-up');
        });

        dropdown.addEventListener('mouseleave', () => {
          // Add small delay before closing to allow mouse movement
          closeTimeout = setTimeout(() => {
            menu.classList.add('hidden');
          }, 150);
        });
      } else {
        // Mobile: click
        button.addEventListener('click', (e) => {
          e.preventDefault();
          menu.classList.toggle('hidden');
        });
      }
    }
  });

  // ============================================
  // STICKY HEADER
  // ============================================
  const header = document.getElementById('header');
  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }

      lastScroll = currentScroll;
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ============================================
  // INTERSECTION OBSERVER FOR ANIMATIONS
  // ============================================
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class with slight delay to ensure smooth rendering
        requestAnimationFrame(() => {
          entry.target.classList.add('animate-fade-in-up');
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });

  // ============================================
  // HERO CAROUSEL (if exists)
  // ============================================
  const heroSwiper = document.querySelector('.hero-swiper');

  if (heroSwiper && typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.hero-swiper', {
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 1800,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Pause/Play button functionality
    const pauseButton = document.getElementById('pauseButton');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    if (pauseButton && playIcon && pauseIcon) {
      let isPaused = false;

      pauseButton.addEventListener('click', () => {
        if (isPaused) {
          swiper.autoplay.start();
          playIcon.classList.add('hidden');
          pauseIcon.classList.remove('hidden');
          pauseButton.setAttribute('aria-label', 'Pausar carrusel');
        } else {
          swiper.autoplay.stop();
          pauseIcon.classList.add('hidden');
          playIcon.classList.remove('hidden');
          pauseButton.setAttribute('aria-label', 'Reproducir carrusel');
        }
        isPaused = !isPaused;
      });
    }
  }

  // ============================================
  // FORM VALIDATION
  // ============================================
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required]');

      inputs.forEach(input => {
        const errorMsg = input.parentElement.querySelector('.error-message');

        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('border-red-500');
          if (errorMsg) errorMsg.classList.remove('hidden');
        } else {
          input.classList.remove('border-red-500');
          if (errorMsg) errorMsg.classList.add('hidden');
        }

        // Email validation
        if (input.type === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('border-red-500');
            if (errorMsg) {
              errorMsg.textContent = 'Por favor, introduce un email válido';
              errorMsg.classList.remove('hidden');
            }
          }
        }

        // Phone validation (Spanish format)
        if (input.type === 'tel' && input.value) {
          const phoneRegex = /^[6-9]\d{8}$/;
          if (!phoneRegex.test(input.value.replace(/\s/g, ''))) {
            isValid = false;
            input.classList.add('border-red-500');
            if (errorMsg) {
              errorMsg.textContent = 'Por favor, introduce un teléfono válido';
              errorMsg.classList.remove('hidden');
            }
          }
        }
      });

      // Si no es válido, prevenir envío
      if (!isValid) {
        e.preventDefault();
      }
      // Si es válido, dejar que el formulario se envíe normalmente a Formspree
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.value.trim()) {
          this.classList.remove('border-red-500');
          const errorMsg = this.parentElement.querySelector('.error-message');
          if (errorMsg) errorMsg.classList.add('hidden');
        }
      });
    });
  });

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.remove('hidden');
      } else {
        backToTop.classList.add('hidden');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================
  // CONSOLE MESSAGE
  // ============================================
  console.log('%c✨ AM Psicología Madrid', 'font-size: 20px; color: #4e5f7e; font-weight: bold;');
  console.log('%cNuevo diseño 2026', 'font-size: 14px; color: #8b7461;');

});
