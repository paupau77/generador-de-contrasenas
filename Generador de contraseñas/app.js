const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generateBtn = document.getElementById('generateBtn');
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER_CHARS = '0123456789';
const SPECIAL_CHARS = '!@#$%^&*()-_=+[]{}|;:,.<>?';
function generatePassword(length, includeUppercase, includeNumbers, includeSpecial) {
  let charSet = LOWERCASE_CHARS;
  if(includeUppercase) charSet += UPPERCASE_CHARS;
  if(includeNumbers) charSet += NUMBER_CHARS;
  if(includeSpecial) charSet += SPECIAL_CHARS;
  if (charSet.length === 0) return '';
  let password = '';
  for(let i=0; i<length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}
generateBtn.addEventListener('click', () => {
  const length = parseInt(lengthEl.value, 10);
  const includeUppercase = uppercaseEl.checked;
  const includeNumbers = numbersEl.checked;
  const includeSpecial = specialEl.checked;

  if (isNaN(length) || length < 4 || length > 64) {
    alert('Por favor, ingresa una longitud válida (entre 4 y 64).');
    return;
  }
  if (!includeUppercase && !includeNumbers && !includeSpecial) {
    // Solo minúsculas
    if (!confirm('Solo se usarán letras minúsculas para la contraseña. ¿Continuar?')) {
      return;
    }
  }
  const pwd = generatePassword(length, includeUppercase, includeNumbers, includeSpecial);
  resultEl.textContent = pwd || 'No se pudo generar la contraseña.';
});