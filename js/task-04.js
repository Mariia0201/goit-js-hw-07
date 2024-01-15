
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {};
  const formElements = loginForm.elements;

  for (const element of formElements) {
    if (element.type !== 'submit') {
      const trimmedValue = element.value.trim();
      formData[element.name] = trimmedValue;
    }
  }

  if (Object.values(formData).some(value => value === '')) {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);

    // Додаткова логіка для обробки введених даних, наприклад, відправка на сервер

    loginForm.reset(); // Очищення значень полів форми
  }
});