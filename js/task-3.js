const inputContent = document.querySelector('#name-input');
const outputContent = document.querySelector('#name-output')
function checkName() {
    const inputValue = inputContent.value.trim();
    if (inputValue === '') {
        outputContent.textContent = 'Anonymous';
    }
    else {
        outputContent.textContent = inputValue;
    }
}

inputContent.addEventListener('input', checkName);