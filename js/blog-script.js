document.addEventListener('DOMContentLoaded', function() {
  // Инициализация слайдера блога
  initBlogSlider();

  function initBlogSlider() {
    const container = document.querySelector('.blog__catalog-container');
    if (!container) return;
    
    const slides = container.querySelectorAll('.blog__catalog');
    const prevBtn = document.querySelector('.blog .slider-arrow-prev');
    const nextBtn = document.querySelector('.blog .slider-arrow-next');
    const bullets = document.querySelectorAll('.blog .slider-bullet');
    
    let currentIndex = 0;
    const slideCount = slides.length;

    // Устанавливаем начальные стили
    container.style.position = 'relative';
    container.style.height = `${slides[0].offsetHeight}px`;

    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
      });

      // Обновляем буллеты
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

    // Назначаем обработчики
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    bullets.forEach((bullet, index) => {
      bullet.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });

    // Автоматическая высота контейнера при ресайзе
    window.addEventListener('resize', function() {
      container.style.height = `${slides[0].offsetHeight}px`;
    });

    // Инициализация
    updateSlider();
  }
});