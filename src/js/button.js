const form = document.getElementsByClassName('button-toggle__form')[0];
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (document.getElementsByClassName('button-toggle__popower-form')[0]) {
      const popower = document.getElementsByClassName('button-toggle__popower-form')[0];
      popower.classList.toggle('button-toggle__popower-form_disabled');
    } else {
      const popower = document.createElement('div');
      popower.className = 'button-toggle__popower-form';

      const popowerHeader = document.createElement('div');
      popowerHeader.textContent = 'Привет, я Popower!';
      popowerHeader.style.backgroundColor = 'rgb(230, 230, 230)';
      popowerHeader.style.borderRadius = '5px 5px 0 0';
      popowerHeader.style.borderBottom = '1px solid rgb(58, 58, 58)';

      const popowerContent = document.createElement('div');
      popowerContent.textContent = 'Нажми на кнопку еще раз и я исчезну. Весело? 😃';
      popower.appendChild(popowerHeader);
      popower.appendChild(popowerContent);

      const button = document.getElementsByClassName('button-toggle__button')[0];
      button.offsetParent.appendChild(popower);
      popower.style.top = `${button.offsetTop - popower.offsetHeight}px`;
      popower.style.left = `${button.offsetLeft + button.offsetWidth / 2 - popower.offsetWidth / 2}px`;
    }
  });
}
