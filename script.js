let passwordLength = 8;

let isUppercase = false;
let isNumbers = false;
let isSymbols = false;

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

    isUppercase = upperCaseCheckEl.Checked;
    isNumbers = numbersCheckEl.Checked;
    isSymbols = symbolsCheckEl.Checked;

    const passwordEl = document.getElementById('password');
    const password = generatePassword(passwordLength);
    passwordEl.innerHTML = password;
    // console.log(generatePassword(8));
})
