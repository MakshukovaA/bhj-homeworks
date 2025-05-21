document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product').forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');

    decBtn.addEventListener('click', () => {
      let currentCount = parseInt(quantityValue.textContent);
      if (currentCount > 1) {
        quantityValue.textContent = currentCount - 1;
      }
    });

    incBtn.addEventListener('click', () => {
      let currentCount = parseInt(quantityValue.textContent);
      quantityValue.textContent = currentCount + 1;
    });
  });

  document.querySelectorAll('.product__add').forEach(addButton => {
    addButton.addEventListener('click', () => {
      const product = addButton.closest('.product');
      const id = product.dataset.id;
      const imageSrc = product.querySelector('.product__image').src;
      const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

      const cartContainer = document.querySelector('.cart__products');

      let existingProduct = cartContainer.querySelector(`.cart__product[data-id="${id}"]`);

      if (existingProduct) {
        const countElem = existingProduct.querySelector('.cart__product-count');
        let currentCount = parseInt(countElem.textContent);
        countElem.textContent = currentCount + quantity;
      } else {
        const newCartItem = document.createElement('div');
        newCartItem.className = 'cart__product';
        newCartItem.dataset.id = id;

        newCartItem.innerHTML = `
          <img class="cart__product-image" src="${imageSrc}">
          <div class="cart__product-count">${quantity}</div>
        `;

        cartContainer.appendChild(newCartItem);
      }
    });
  });
});