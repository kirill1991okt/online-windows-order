import inputOnlyNumber from '../servise';

const changeState = (state) => {
  const forms = document.querySelectorAll('.balcon_icons_img'),
    width = document.querySelectorAll('#width'),
    height = document.querySelectorAll('#height'),
    type = document.querySelectorAll('#view_type'),
    profile = document.querySelectorAll('.checkbox');

  function changeStateFromForms(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              i == 0 ? (state[prop] = 'cold') : (state[prop] = 'hot');
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;

          default:
            break;
        }
      });
    });
  }

  inputOnlyNumber(width);
  inputOnlyNumber(height);

  changeStateFromForms('click', forms, 'form');
  changeStateFromForms('input', width, 'width');
  changeStateFromForms('input', height, 'height');
  changeStateFromForms('change', type, 'type');
  changeStateFromForms('change', profile, 'profile');
};

export default changeState;
