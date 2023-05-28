let emailValue
const form = document.querySelector('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    document.querySelector('.email-error').textContent = 'Valid email required'
    emailInput.classList.add('email-error-input')
    return;
  } else {
    document.querySelector('.email-error').textContent = ''
    emailInput.classList.remove('email-error-input')
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
