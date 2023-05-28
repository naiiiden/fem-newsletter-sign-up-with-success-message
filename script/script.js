const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const startContainer = document.querySelector('.start-container')
const successContainer = document.querySelector('.success-container')

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
    document.querySelector('.email-span').textContent = emailInput.value
    startContainer.style.display= 'none'
    successContainer.style.display= 'flex'
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('.dismiss-button').addEventListener('click', () => {
    emailInput.value = ''
    startContainer.style.display= 'grid'
    successContainer.style.display= 'none'
})