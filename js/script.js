document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper
  const swiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    slidesPerView: 1, // Показываем по одной секции за раз
    spaceBetween: 0 , // Отступ между секциями
    loop: true, // Бесконечная прокрутка
  });

  // Элементы управления
  const prevArrow = document.querySelector('.slider-arrow-prev');
  const nextArrow = document.querySelector('.slider-arrow-next');
  const bullets = document.querySelectorAll('.slider-bullet');

  // Обработчики для стрелок
  prevArrow.addEventListener('click', () => {
    swiper.slidePrev(); // Переключаем на предыдущий слайд
  });

  nextArrow.addEventListener('click', () => {
    swiper.slideNext(); // Переключаем на следующий слайд
  });

  // Обработчики для кружочков
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      swiper.slideTo(index); // Переключаем на соответствующий слайд
    });
  });

  // Обновление активного кружочка
  swiper.on('slideChange', () => {
    bullets.forEach((bullet, index) => {
      if (index === swiper.realIndex) {
        bullet.classList.add('active'); // Добавляем класс активному кружочку
      } else {
        bullet.classList.remove('active'); // Убираем класс у неактивных
      }
    });
  });
});