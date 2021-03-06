// Напиши скрипт который
// при наборе текста в инпуте input#name - input(событие input)
// подставляет его текущее значение в span#name - output.
// Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const inputNameEl = document.querySelector('#name-input');
const spanOutputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', event => {
  spanOutputNameEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    spanOutputNameEl.textContent = 'Anonymous';
  }
});
