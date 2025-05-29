document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("input[name='name']");
  const emailInput = form.querySelector("input[name='email']");
  const messageInput = form.querySelector("textarea[name='message']");
  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple validation
    if (!nameInput.value.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!validateEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!messageInput.value.trim()) {
      alert("Please enter your message.");
      return;
    }

    // Simulate form submission
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    setTimeout(() => {
      alert("Message sent successfully!");
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }, 1500);
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  // Smooth scroll behavior for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll animation effect using IntersectionObserver
  const revealElements = document.querySelectorAll('.container');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
});
