import Notiflix from 'notiflix';

const refs = {
  submitBtn: document.querySelector('button'),
  form: document.querySelector('.form'),
};
refs.submitBtn.addEventListener('submit', createPromise);
refs.form.addEventListener('submit', onInputForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
let position = 0;

function onInputForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  let delay = form.elements.delay.value;
  const amount = form.elements.amount.value;
  const step = form.elements.step.value;

  for (i = 1; i <= amount; i++) {
    position = i;
    createPromise(position, delay, step)
      .then(message => {
        Notiflix.Notify.success(message);
      })
      .catch(message => {
        Notiflix.Notify.failure(message);
      });
    delay = Number(delay) + Number(step);
  }
  refs.form.reset();
}
