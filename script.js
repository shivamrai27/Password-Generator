let passwordLength = 8;

let isUppercase = false;
let isNumbers = false;
let isSymbols = false;

const passwordEl = document.getElementById('password');
const passwordRangeInputEl = document.getElementById('passRangeInput');
const passRangeValueEl = document.getElementById('passRangeValue');
const genBtnEl = document.getElementById('genBtn');

passwordRangeInputEl.addEventListener('input', (e) => {
    passwordLength = +e.target.value
    passRangeValueEl.innerText = passwordLength
});



const generatePassword = (passwordLength) => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = isUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : "";
    const numbers = isNumbers ? '0123456789' : "";
    const symbols = isSymbols ? '!@#$%^&*()_+-=' : "";

    const passChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const charIndex = Math.floor(Math.random() * passChar.length);
        password += passChar[charIndex];
    }
    return password;

}

genBtnEl.addEventListener('click', () => {

    const upperCaseCheckEl = document.getElementById('uppercase');
    const numbersCheckEl = document.getElementById('numbers');
    const symbolsCheckEl = document.getElementById('symbols');

    isUppercase = upperCaseCheckEl.checked;
    isNumbers = numbersCheckEl.checked;
    isSymbols = symbolsCheckEl.checked;

    const password = generatePassword(passwordLength);
    passwordEl.innerHTML = password;

});

passwordEl.addEventListener('click', (e) => {
    if (e.target.innerText.length > 0) {
        navigator.clipboard.writeText(passwordEl.innerText)
            .then(() => {
                alert("Copied to clipboard");

            }).catch((err) => {
                alert("Could not copy password")
            })
    }
});