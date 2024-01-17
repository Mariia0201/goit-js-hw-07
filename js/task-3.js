const inputContent = document.querySelector('#name-input');
const outputContent = document.querySelector('#name-output')
function checkName() {
    const inputValue = inputContent.value.trim();
    if (inputContent === '') {
        outputContent.textContent === 'Anonymous';
    }
    else {
        return outputContent.textContent = inputValue;
    }
}

inputContent.addEventListener('input', checkName);