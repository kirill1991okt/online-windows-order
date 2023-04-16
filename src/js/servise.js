export const validateInputNumber = (element) => {
  element.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export const validateStateInModals = (
  target,
  state,
  openModals,
  errorMessage
) => {
  switch (target) {
    case 'popup_calc_button':
      state.width && state.height
        ? openModals(windows, modal)
        : errorMessage(content);
      !state.form ? (state.form = 0) : null;
      break;
    case 'popup_calc_profile_button':
      state.profile ? openModals(windows, modal) : errorMessage(content);
      !state.type ? (state.type = 'tree') : null;
      break;

    default:
      openModals(windows, modal);
      break;
  }
};
