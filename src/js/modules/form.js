import inputOnlyNumber from '../servise';

const forms = () => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    phoneInput = document.querySelectorAll('input[name="user_phone"]');

  inputOnlyNumber(phoneInput);

  const statusMessage = {
    loading: 'Загрузка...',
    success: 'Заявка отправлена, с вами свяжутся!',
    failure: 'Что-то пошло не так...',
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = statusMessage.loading;

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  forms.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(item);

      const message = document.createElement('div');
      message.classList.add('status');
      item.appendChild(message);

      postData('assets/server.php', formData)
        .then((data) => {
          console.log(data);
          message.textContent = statusMessage.success;
        })
        .catch(() => {
          message.textContent = statusMessage.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            message.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
