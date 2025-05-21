document.addEventListener('DOMContentLoaded', () => {
  let tooltipDiv = null;

  document.querySelectorAll('.has-tooltip').forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();

      if (tooltipDiv) {
        tooltipDiv.remove();
        tooltipDiv = null;
      }

      tooltipDiv = document.createElement('div');
      tooltipDiv.className = 'tooltip tooltip_active';
      tooltipDiv.textContent = element.getAttribute('title');

      document.body.appendChild(tooltipDiv);

      const rect = element.getBoundingClientRect();

      const top = rect.bottom + window.scrollY + 5;
      const left = rect.left + window.scrollX + rect.width / 2;

      const tooltipWidth = tooltipDiv.offsetWidth;
      
      tooltipDiv.style.top = `${top}px`;
      tooltipDiv.style.left = `${left - tooltipWidth / 2}px`;
    });
  });

  document.addEventListener('click', (e) => {
    if (tooltipDiv && !e.target.closest('.has-tooltip')) {
      tooltipDiv.remove();
      tooltipDiv = null;
    }
  });
});