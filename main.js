// Form validation
document.getElementById('register-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }
  alert('Account created successfully! Welcome to Orvexuim.');
  e.target.reset();
});

// Scroll animation for character cards
const characters = document.querySelectorAll('.character');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.3 }
);
characters.forEach((character) => {
  observer.observe(character);
});

// Toggle character details
document.querySelectorAll('.toggle-details').forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.previousElementSibling;
    details.classList.toggle('active');
    button.textContent = details.classList.contains('active') ? 'Hide Details' : 'Show Details';
  });
});
