const modals = () => {
  const openModals = (triggerSelector, modalSelector, closeSelector) => {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      document.querySelector(modalSelector).style.display = 'none';
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.currentTarget === e.target) {
        document.querySelector(modalSelector).style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  };

  const showModals = (selector, timer) => {
    setTimeout(function () {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, timer);
  };

  openModals(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  openModals('.phone_link', '.popup', '.popup .popup_close');

  //   showModals('.popup', 60000);
};

export default modals;
