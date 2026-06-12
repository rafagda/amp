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

  function closeMobileMenu() {
    if (!mobileMenu || mobileMenu.classList.contains('hidden')) return;
    mobileMenu.classList.add('translate-x-full');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
    document.body.style.overflow = 'auto';
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenu) {
    // Close on outside click
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) closeMobileMenu();
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMobileMenu();
    });

    // Restore body scroll if viewport grows to desktop with the menu open
    window.matchMedia('(min-width: 768px)').addEventListener('change', function(e) {
      if (e.matches) closeMobileMenu();
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
      const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

      const openMenu = () => {
        if (closeTimeout) clearTimeout(closeTimeout);
        menu.classList.remove('hidden');
        menu.classList.add('animate-fade-in-up');
        button.setAttribute('aria-expanded', 'true');
      };

      const closeMenu = () => {
        menu.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
      };

      button.setAttribute('aria-haspopup', 'true');
      button.setAttribute('aria-expanded', 'false');

      // Desktop: hover with delay (evaluated per-event so resize/rotation works)
      dropdown.addEventListener('mouseenter', () => { if (isDesktop()) openMenu(); });
      dropdown.addEventListener('mouseleave', () => {
        if (isDesktop()) closeTimeout = setTimeout(closeMenu, 150);
      });

      // Mobile: click toggle
      button.addEventListener('click', (e) => {
        if (!isDesktop()) {
          e.preventDefault();
          if (menu.classList.contains('hidden')) openMenu(); else closeMenu();
        }
      });

      // Keyboard accessibility
      dropdown.addEventListener('focusin', () => { if (isDesktop()) openMenu(); });
      dropdown.addEventListener('focusout', (e) => {
        if (isDesktop() && !dropdown.contains(e.relatedTarget)) closeMenu();
      });
      dropdown.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
          closeMenu();
          button.focus();
        }
      });
    }
  });

  // ============================================
  // STICKY HEADER
  // ============================================
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    }, { passive: true });
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
    });
  }

  // ============================================
  // FORM VALIDATION
  // ============================================
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      let firstInvalid = null;
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      const markInvalid = (input) => {
        isValid = false;
        if (!firstInvalid) firstInvalid = input;
      };

      inputs.forEach(input => {
        const errorMsg = input.parentElement.querySelector('.error-message');

        // Checkboxes (consentimiento RGPD): validar marcado, no el value
        if (input.type === 'checkbox') {
          if (!input.checked) {
            markInvalid(input);
            if (errorMsg) errorMsg.classList.remove('hidden');
          } else {
            if (errorMsg) errorMsg.classList.add('hidden');
          }
          return;
        }

        if (!input.value.trim()) {
          markInvalid(input);
          input.classList.add('border-error');
          if (errorMsg) {
            errorMsg.textContent = 'Este campo es obligatorio';
            errorMsg.classList.remove('hidden');
          }
        } else {
          input.classList.remove('border-error');
          if (errorMsg) errorMsg.classList.add('hidden');
        }

        // Email validation
        if (input.type === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            markInvalid(input);
            input.classList.add('border-error');
            if (errorMsg) {
              errorMsg.textContent = 'Por favor, introduce un email válido';
              errorMsg.classList.remove('hidden');
            }
          }
        }

        // Phone validation (Spanish format, with or without +34/0034 prefix)
        if (input.type === 'tel' && input.value) {
          const phoneRegex = /^(?:\+34|0034)?[6-9]\d{8}$/;
          if (!phoneRegex.test(input.value.replace(/[\s\-\.]/g, ''))) {
            markInvalid(input);
            input.classList.add('border-error');
            if (errorMsg) {
              errorMsg.textContent = 'Por favor, introduce un teléfono válido';
              errorMsg.classList.remove('hidden');
            }
          }
        }
      });

      // Si no es válido, prevenir envío y enfocar el primer campo con error
      if (!isValid) {
        e.preventDefault();
        if (firstInvalid) firstInvalid.focus();
      }
      // Si es válido, dejar que el formulario se envíe normalmente a Formspree
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.value.trim()) {
          this.classList.remove('border-error');
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
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
