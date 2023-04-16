import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/form';
import changeState from './modules/changeState';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {
  const modalState = {};
  const deadline = '2023-04-18';

  changeState(modalState);
  modals(modalState);
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs(
    '.balcon_icons',
    '.balcon_icons_img',
    '.big_img > img',
    'do_image_more',
    'inline-block'
  );
  forms(modalState);
  timer('.container1', deadline);
});
