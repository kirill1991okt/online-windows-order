const image = () => {
  const workSection = document.querySelector('.works'),
    imagePopup = document.createElement('div'),
    bigImage = document.createElement('img');

  imagePopup.classList.add('popup');

  imagePopup.appendChild(bigImage);
  workSection.appendChild(imagePopup);

  imagePopup.style.justifyContent = 'center';
  imagePopup.style.alignItems = 'center';
  imagePopup.style.display = 'none';

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;
    console.log(target);
    console.log(e.currentTarget);
    if (target && target.classList.contains('preview')) {
      const path = target.parentNode.getAttribute('href');

      imagePopup.style.display = 'flex';
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popup')) {
      imagePopup.style.display = 'none';
    }
  });
};

export default image;
