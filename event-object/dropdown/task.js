document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const valueElement = dropdown.querySelector('.dropdown__value');
      const listElement = dropdown.querySelector('.dropdown__list');

      valueElement.addEventListener('click', (event) => {
          event.preventDefault();
          listElement.classList.toggle('dropdown__list_active');
      });

      const links = dropdown.querySelectorAll('.dropdown__link');
      
      links.forEach(link => {
          link.addEventListener('click', (event) => {
              event.preventDefault();

              valueElement.textContent = link.textContent;

              listElement.classList.remove('dropdown__list_active');
          });
      });

      document.addEventListener('click', (event) => {
          if (!event.target.closest('.dropdown')) {
              listElement.classList.remove('dropdown__list_active');
          }
      });
  });
});