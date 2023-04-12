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
            // state[prop] = i;
            console.log('span');
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              console.log('checkbox');
            }
            // state[prop] = i;
            console.log('span');
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
