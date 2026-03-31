// Professional Portfolio JS Enhancements

// Skills animation on scroll
function animateSkills() {
  const bars = document.querySelectorAll('.bar span');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0%';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}

// Contact form handling
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name') || form.querySelector('input[placeholder="Your Name"]').value;
    const email = formData.get('email') || form.querySelector('input[placeholder="Your Email"]').value;
    const message = formData.get('message') || form.querySelector('textarea[placeholder="Your Message"]').value;

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
    }

    if (!/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/g.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    // Simulate sending (in production, use EmailJS or backend)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert(`Thank you ${name}! Your message has been sent. I'll reply within 24 hours.`);
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// Smooth scrolling for anchor links
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Header scroll effect
function headerScrollEffect() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
      header.style.background = 'var(--dark)';
    }
  });
}

// Typing effect customization
function customizeTyping() {
  const typedElement = document.getElementById('typing');
  if (typedElement) {
    // Override typed.js strings if needed
    // Current strings are good
  }
}

// Initialize all features when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  animateSkills();
  initContactForm();
  smoothScroll();
  headerScrollEffect();
  customizeTyping();
});

// Intersection Observer for better performance

