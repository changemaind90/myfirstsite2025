document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.hero__inner');
  let currentIndex = 0;
  const totalSections = sections.length;

  function updateSections() {
    sections.forEach((section, index) => {
      section.classList.remove('active', 'prev', 'next');
      
      if (index === currentIndex) {
        section.classList.add('active');
      } else if (index < currentIndex) {
        section.classList.add('prev');
      } else {
        section.classList.add('next');
      }
    });
  }

  // Обработчики для кнопок
  document.addEventListener('click', function(e) {
    if (e.target.closest('.next-btn')) {
      currentIndex = (currentIndex + 1) % totalSections;
      updateSections();
    } else if (e.target.closest('.prev-btn')) {
      currentIndex = (currentIndex - 1 + totalSections) % totalSections;
      updateSections();
    }
  });

  updateSections();
});