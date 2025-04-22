/* document.addEventListener('DOMContentLoaded', function() {
  // Инициализация всех слайдеров
  initSlider('shoes-slider');
  initSlider('clothes-slider');
  initSlider('accessories-slider');

  function initSlider(sliderClass) {
    const container = document.querySelector(`.${sliderClass}`);
    if (!container) return;
    
    const slides = container.querySelectorAll('.shop__catalog');
    const prevBtn = container.closest('.shop').querySelector('.slider-arrow-prev');
    const nextBtn = container.closest('.shop').querySelector('.slider-arrow-next');
    const bullets = container.closest('.shop').querySelectorAll('.slider-bullet');
    
    let currentIndex = 0;
    const slideCount = slides.length;

    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
      });

      bullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentIndex);
      });
    }

    function nextSlide() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1;
      }
      updateSlider();
    }

    // Назначаем обработчики только для текущего слайдера
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    if (bullets) {
      bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
          currentIndex = index;
          updateSlider();
        });
      });
    }

    // Инициализация
    updateSlider();
  }
}); */

const slidersCounters = {
  shoes: 0,
  clothes: 0,
};

const makeSlider = (e, sliderName) => {
  const container = e.currentTarget;
  const target = e.target;
  const prev = 'slider-arrow slider-arrow-prev';
  const next = 'slider-arrow slider-arrow-next';
  const collection = container.querySelectorAll('.shop__catalog');
  const lengthCollection = collection.length;
  const bullets = container.querySelectorAll('.slider-bullet');

  let counter = slidersCounters[sliderName];

  const updateSlider = () => {
    collection.forEach((catalog, i) => {
      catalog.style.transform = `translateX(${(i - counter) * 100 - i * 100}%)`;
    });

    bullets.forEach((bullet, i) => {
      bullet.classList.toggle('active', i === counter);
    });
  };

  if (target.classList.value === prev) {
    counter -= 1;

    if (counter === -1) {
      counter = lengthCollection - 1;
    }

    updateSlider();
  }

  if (target.classList.value === next) {
    counter += 1;

    if (counter === lengthCollection) {
      counter = 0;
    }

    updateSlider();
  }

  if (target.dataset.indexNumber) {
    counter = +target.dataset.indexNumber;
    updateSlider();
  }

  slidersCounters[sliderName] = counter;
};

document
  .querySelector('#shoes-slider')
  .addEventListener('click', (e) => makeSlider(e, 'shoes'));

document
  .querySelector('#clothes-slider')
  .addEventListener('click', (e) => makeSlider(e, 'clothes'));

document
  .querySelector('#accessories-slider')
  .addEventListener('click', (e) => makeSlider(e, 'accessories'));
