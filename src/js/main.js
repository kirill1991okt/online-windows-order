import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
});
