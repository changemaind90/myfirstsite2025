document.addEventListener('DOMContentLoaded', function() {
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
});