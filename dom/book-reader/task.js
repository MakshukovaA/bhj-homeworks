const fontSizeControls = document.querySelectorAll('.font-size');

const book = document.getElementById('book');

fontSizeControls.forEach(control => {
  control.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    fontSizeControls.forEach(c => c.classList.remove('font-size_active'));
    
    control.classList.add('font-size_active');
    
    const size = control.dataset.size;
    
    book.classList.remove('book_fs-small', 'book_fs-big');
    
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});