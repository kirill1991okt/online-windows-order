const tabs = (
  headerSelector,
  tabsSelector,
  contentSelector,
  activeSelector,
  display = 'block'
) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabsSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = 'none';
    });

    tabs.forEach((item) => {
      item.classList.remove(activeSelector);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;
    tabs[i].classList.add(activeSelector);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;

    if (
      target &&
      (target.classList.contains(tabsSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))
    ) {
      tabs.forEach((item, i) => {
        item.addEventListener('click', () => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      });
    }
  });
};

export default tabs;
