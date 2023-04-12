import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/form';
import changeState from './modules/changeState';

document.addEventListener('DOMContentLoaded', () => {
  const modalState = {};
  console.log(modalState);

  changeState(modalState);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs(
    '.balcon_icons',
    '.balcon_icons_img',
    '.big_img > img',
    'do_image_more',
    'inline-block'
  );
  forms();
});
