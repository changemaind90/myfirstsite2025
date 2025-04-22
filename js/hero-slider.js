document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero'); // Блок, у которого меняем фон
  const sections = document.querySelectorAll('.hero__inner');
  let currentIndex = 0;

  function updateSections() {
    sections.forEach((section, index) => {
      section.classList.remove('active', 'prev', 'next');
      
      if (index === currentIndex) {
        section.classList.add('active');
        // Меняем фон hero при переключении:
        hero.className = 'hero'; // Очищаем все классы
        hero.classList.add(`bg-slide-${index + 1}`); // Добавляем нужный
      } else if (index < currentIndex) {
        section.classList.add('prev');
      } else {
        section.classList.add('next');
      }
    });
  }

  // Кнопки "Вперёд/Назад" (без изменений)
  document.addEventListener('click', function(e) {
    if (e.target.closest('.next-btn')) {
      currentIndex = (currentIndex + 1) % sections.length;
      updateSections();
    } else if (e.target.closest('.prev-btn')) {
      currentIndex = (currentIndex - 1 + sections.length) % sections.length;
      updateSections();
    }
  });

  // Инициализация (ставим фон для первого слайда)
  hero.classList.add('bg-slide-1');
  updateSections();
});