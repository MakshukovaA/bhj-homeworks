const div = document.querySelectorAll('.rotator');

div.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  
  setInterval(() => {
    const activeIndex = Array.from(cases).findIndex(c => c.classList.contains('rotator__case_active'));
    
    cases[activeIndex].classList.remove('rotator__case_active');
    
    const nextIndex = (activeIndex + 1) % cases.length;
    
    cases[nextIndex].classList.add('rotator__case_active');
    
  }, 1000);
});