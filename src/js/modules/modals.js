import { validateStateInModals } from '../servise';

const modals = (state) => {
  const bindModals = (
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) => {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      content = document.querySelector('.popup_calc_content'),
      scroll = calcScrollWidth();

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        switch (item.getAttribute('id')) {
          case 'popup_calc_button':
            state.width && state.height
              ? openModals(windows, modal, scroll)
              : errorMessage(content);
            !state.form ? (state.form = 0) : null;
            break;
          case 'popup_calc_profile_button':
            state.profile
              ? openModals(windows, modal, scroll)
              : errorMessage(content);
            !state.type ? (state.type = 'tree') : null;
            break;

          default:
            openModals(windows, modal, scroll);
            break;
        }
      });
    });

    close.addEventListener('click', () => {
      hiddenModals(windows, modalSelector, scroll);
    });

    modal.addEventListener('click', (e) => {
      if (e.currentTarget === e.target && closeClickOverlay) {
        hiddenModals(windows, modalSelector, scroll);
      }
    });
  };

  const showModals = (selector, timer) => {
    setTimeout(function () {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, timer);
  };

  const openModals = (windows, modal, scroll) => {
    windows.forEach((item) => {
      item.style.display = 'none';
    });

    modal.style.display = 'block';
    modal.style.marginRight = `${scroll}px`;
    document.body.style.overflow = 'hidden';
  };

  const hiddenModals = (windows, modalSelector, scroll) => {
    windows.forEach((item) => {
      item.style.display = 'none';
    });
    document.querySelector(modalSelector).style.display = 'none';
    document.querySelector(modalSelector).style.marginRight = `0px`;
    document.body.style.overflow = '';
  };

  const errorMessage = (content) => {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('status');
    errorDiv.textContent = 'Указаны не все данные';
    content.appendChild(errorDiv);

    setTimeout(() => {
      errorDiv.remove();
    }, 2000);
  };

  const calcScrollWidth = () => {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };

  bindModals(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  bindModals('.phone_link', '.popup', '.popup .popup_close');
  bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

  bindModals(
    '.popup_calc_button',
    '.popup_calc_profile',
    '.popup_calc_profile_close',
    false
  );

  bindModals(
    '.popup_calc_profile_button',
    '.popup_calc_end',
    '.popup_calc_end_close',
    false
  );

  showModals('.popup', 60000);
};

export default modals;
