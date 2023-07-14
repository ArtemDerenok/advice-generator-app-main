import fetchAdvice from './api/api';
import './scss/style.scss';

const adviceNum = document.getElementById('number');
const adviceText = document.getElementById('text');
const btn = document.getElementById('button');
const errorMsg = document.getElementById('error');

const showAdvice = (data) => {
  adviceNum.innerText = data.slip.id;
  adviceText.innerText = data.slip.advice;
};

const showError = (error) => {
  errorMsg.innerText = error.message;
};

const getAdvice = async () => {
  const result = await fetchAdvice();
  if (result instanceof Error) {
    showError(result);
  } else {
    showAdvice(result);
  }
};

getAdvice();

btn.addEventListener('click', getAdvice);
