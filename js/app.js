const input = document.querySelector('input');
const errorMessage = document.getElementById('error');
const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!input.value.match(validRegex)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
});
