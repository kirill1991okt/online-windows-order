const inputOnlyNumber = (element) => {
  element.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export default inputOnlyNumber;
